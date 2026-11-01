// Vercel serverless function: POST /api/rate-card — email-gated rate cards for /services.
// Same pattern as api/playlist-submit.js (PR #3): validate, optional Turnstile, send via Resend.
// Env (names only, set in Vercel):
//   RESEND_API_KEY        required
//   RATE_CARD_FROM        verified sender, e.g. "DCI <hello@send.digitalcurrensy.com>" (no DCI domain verified in Resend yet)
//   RATE_CARD_LEADS_TO    inbox that receives each lead (email, name, company, card, timestamp) = the lead record
//   RESEND_AUDIENCE_ID    optional; adds the lead as a Resend contact
//   TURNSTILE_SECRET_KEY  optional; when set, a valid token is required
const fs = require("fs");
const path = require("path");
const dns = require("dns").promises;
const { parseDomainList, validateRateCardLead } = require("./_lib/rateCard");
const CARDS = require("./_lib/rateCards");

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map(); // per-instance; resets on cold start

function limited(ip, now = Date.now()) {
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= LIMIT) { hits.set(ip, arr); return true; }
  arr.push(now); hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return false;
}

let disposable = null;
function list() {
  if (!disposable) disposable = parseDomainList(fs.readFileSync(path.join(__dirname, "_lib", "disposable-domains.txt"), "utf8"));
  return disposable;
}

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

async function verifyTurnstile(token, ip, secret, fetchImpl) {
  const r = await fetchImpl("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: String(token || ""), remoteip: ip || "" }),
  });
  const j = await r.json().catch(() => ({}));
  return Boolean(j && j.success);
}

async function handle(req, env = process.env, fetchImpl = fetch, resolveMx = dns.resolveMx) {
  if (req.method !== "POST") return { status: 405, body: { ok: false, error: "method_not_allowed" } };
  const ip = String((req.headers && req.headers["x-forwarded-for"]) || "").split(",")[0].trim() || "local";
  if (limited(ip)) return { status: 429, body: { ok: false, error: "rate_limited" } };
  let body = req.body;
  if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const card = body && (body.card === "spa" || body.card === "web") ? body.card : null;
  if (!card) return { status: 400, body: { ok: false, error: "card" } };
  const v = await validateRateCardLead(body, { disposable: list(), resolveMx });
  if (!v.ok) return v.error === "spam" ? { status: 200, body: { ok: true } } : { status: 400, body: { ok: false, error: v.error } };
  if (env.TURNSTILE_SECRET_KEY && !(await verifyTurnstile(body["cf-turnstile-response"], ip, env.TURNSTILE_SECRET_KEY, fetchImpl))) {
    return { status: 400, body: { ok: false, error: "captcha" } };
  }
  if (!env.RESEND_API_KEY || !env.RATE_CARD_FROM || !env.RATE_CARD_LEADS_TO) return { status: 503, body: { ok: false, error: "not_configured" } };
  const d = v.data;
  const c = CARDS[card];
  const auth = { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" };
  const sent = await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: auth,
    body: JSON.stringify({
      from: env.RATE_CARD_FROM,
      to: [d.email],
      subject: c.subject,
      text: `Hi ${d.name},\n\nYour rate card is attached. Reply to this email or talk to our agent on digitalcurrensy.com to set up a call.\n\n— Adrian Swish, Digital Currensy Inc.`,
      attachments: [{ filename: c.filename, content: c.b64 }],
    }),
  });
  if (!sent.ok) return { status: 502, body: { ok: false, error: "delivery_failed" } };
  // Lead record: one email per lead to the DCI inbox (no database on this static site).
  await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: auth,
    body: JSON.stringify({
      from: env.RATE_CARD_FROM,
      to: [env.RATE_CARD_LEADS_TO],
      reply_to: d.email,
      subject: `Rate card lead (${card}): ${d.name}`,
      html: `<ul><li>Email: ${esc(d.email)}</li><li>Name: ${esc(d.name)}</li><li>Company: ${esc(d.company)}</li><li>Card: ${card}</li><li>Source: digitalcurrensy.com/services</li><li>At: ${new Date().toISOString()}</li></ul>`,
    }),
  }).catch(() => null);
  if (env.RESEND_AUDIENCE_ID) {
    await fetchImpl(`https://api.resend.com/audiences/${encodeURIComponent(env.RESEND_AUDIENCE_ID)}/contacts`, {
      method: "POST", headers: auth, body: JSON.stringify({ email: d.email, first_name: d.name, unsubscribed: false }),
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
module.exports.limited = limited;
