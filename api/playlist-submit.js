// Vercel serverless function: POST /api/playlist-submit
// Free-tier stack: validates, optional Cloudflare Turnstile check, then emails the submission via Resend.
// All config comes from environment variables set in Vercel (never in the repo):
//   RESEND_API_KEY        required to deliver
//   PLAYLIST_FORM_TO      inbox that receives submissions (required)
//   PLAYLIST_FORM_FROM    verified sender, e.g. "DCI Playlists <playlists@send.example.com>" (required)
//   RESEND_AUDIENCE_ID    optional; contacts added ONLY when consent_email is true
//   TURNSTILE_SECRET_KEY  optional; when set, a valid Turnstile token is required
const { validateSubmission } = require("./_lib/validate");

async function verifyTurnstile(token, ip, secret, fetchImpl) {
  const r = await fetchImpl("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: String(token || ""), remoteip: ip || "" }),
  });
  const j = await r.json().catch(() => ({}));
  return Boolean(j && j.success);
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

async function handle(req, env = process.env, fetchImpl = fetch) {
  if (req.method !== "POST") return { status: 405, body: { ok: false, error: "method_not_allowed" } };
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const v = validateSubmission(body);
  if (v.spam) return { status: 200, body: { ok: true } }; // quietly drop bots
  if (!v.ok) return { status: 400, body: { ok: false, errors: v.errors } };

  if (env.TURNSTILE_SECRET_KEY) {
    const ip = (req.headers && (req.headers["x-forwarded-for"] || "")).split(",")[0].trim();
    const pass = await verifyTurnstile(body["cf-turnstile-response"], ip, env.TURNSTILE_SECRET_KEY, fetchImpl);
    if (!pass) return { status: 400, body: { ok: false, errors: ["captcha"] } };
  }

  if (!env.RESEND_API_KEY || !env.PLAYLIST_FORM_TO || !env.PLAYLIST_FORM_FROM) {
    return { status: 503, body: { ok: false, error: "not_configured" } };
  }
  const d = v.data;
  const html = `<h2>New playlist submission</h2><ul>
<li>Name: ${esc(d.name)}</li><li>Artist: ${esc(d.artist)}</li><li>Email: ${esc(d.email)}</li>
<li>Track: ${esc(d.track)}</li><li>Playlist: ${esc(d.playlist)}</li><li>Note: ${esc(d.note)}</li>
<li>Email updates consent: ${d.consent_email ? "yes" : "no"}</li><li>Submitted: ${new Date().toISOString()}</li></ul>`;
  const auth = { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" };
  const sent = await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: auth,
    body: JSON.stringify({ from: env.PLAYLIST_FORM_FROM, to: [env.PLAYLIST_FORM_TO], reply_to: d.email, subject: `Playlist submission: ${d.artist} → ${d.playlist}`, html }),
  });
  if (!sent.ok) return { status: 502, body: { ok: false, error: "delivery_failed" } };

  if (d.consent_email && env.RESEND_AUDIENCE_ID) {
    await fetchImpl(`https://api.resend.com/audiences/${encodeURIComponent(env.RESEND_AUDIENCE_ID)}/contacts`, {
      method: "POST",
      headers: auth,
      body: JSON.stringify({ email: d.email, first_name: d.name, unsubscribed: false }),
    }).catch(() => null);
  }
  return { status: 200, body: { ok: true } };
}

module.exports = async function (req, res) {
  const out = await handle(req);
  res.setHeader("cache-control", "no-store");
  res.status(out.status).json(out.body);
};
module.exports.handle = handle;
