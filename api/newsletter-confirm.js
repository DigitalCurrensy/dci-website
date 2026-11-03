"use strict";
// GET /api/newsletter-confirm?token=… — second step of double opt-in.
// Verifies the signed 48h token, then sets the Resend contact to unsubscribed:false.
// Same env as api/newsletter.js; missing = 503 not open yet. Never logs emails or secrets.
const { verifyToken } = require("./_lib/newsletterToken");

const TIMEOUT_MS = 8000;

function page(status, title, msg) {
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>${title} | Digital Currensy Inc.</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#050505;color:#f5f5f5;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;text-align:center}main{max-width:32rem;padding:2rem}img{width:72px;height:auto;margin-bottom:1rem}h1{font-size:1.6rem;margin:.5rem 0}p{color:#bdbdbd;line-height:1.5}a{color:#fff}</style></head><body><main><img src="/dci-logo.png" alt="Digital Currensy Inc."><h1>${title}</h1><p>${msg}</p><p><a href="/playlists">Back to playlists</a></p></main></body></html>`;
  return { status, html };
}

async function handle(req, env = process.env, fetchImpl = fetch, now = Date.now()) {
  if (!req || req.method !== "GET") return page(405, "Not allowed", "Open the link from your email.");
  const from = env.NEWSLETTER_FROM || env.RATE_CARD_FROM;
  if (!env.RESEND_API_KEY || !env.RESEND_AUDIENCE_ID || !from || !env.NEWSLETTER_CONFIRM_SECRET) {
    return page(503, "Not open yet", "Playlist updates are not open yet. Please try again later.");
  }
  const q = (req.query && req.query.token) || new URL(req.url || "/", "https://x").searchParams.get("token");
  const email = verifyToken(String(q || ""), env.NEWSLETTER_CONFIRM_SECRET, now);
  if (!email) return page(400, "Link expired or invalid", "That confirmation link is invalid or older than 48 hours. Sign up again to get a fresh one.");
  let r;
  try {
    r = await fetchImpl(`https://api.resend.com/audiences/${encodeURIComponent(env.RESEND_AUDIENCE_ID)}/contacts/${encodeURIComponent(email)}`, {
      method: "PATCH",
      headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({ unsubscribed: false }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch { r = null; }
  if (!r || r.ok === false) return page(502, "Something went wrong", "We could not confirm that just now. Please try the link again later.");
  return page(200, "You're on the list", "Thanks for confirming. You'll get DCI playlist updates by email.");
}

module.exports = async function (req, res) {
  let out;
  try { out = await handle(req); } catch { out = page(500, "Something went wrong", "Please try the link again later."); }
  res.setHeader("cache-control", "no-store");
  res.setHeader("content-type", "text/html; charset=utf-8");
  res.status(out.status).send(out.html);
};
module.exports.handle = handle;
module.exports.TIMEOUT_MS = TIMEOUT_MS;
