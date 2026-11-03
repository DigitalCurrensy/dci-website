"use strict";

// POST /api/newsletter — one playlist email list, double opt-in via Resend.
// Primary path (all four set): RESEND_API_KEY, RESEND_AUDIENCE_ID,
// NEWSLETTER_FROM (falls back to RATE_CARD_FROM), NEWSLETTER_CONFIRM_SECRET.
//   1. Contact is created in the audience with unsubscribed:true (pending).
//   2. A confirmation email carries a signed 48h link to /api/newsletter-confirm.
//   3. Clicking it flips the contact to unsubscribed:false (see newsletter-confirm.js).
// Legacy path: if the Resend set is incomplete but NEWSLETTER_WEBHOOK_URL is a
// valid HTTPS URL, the old single webhook POST is used. Neither = 503 not open yet.
// Emails and secrets are never logged. No date of birth is read or stored.

const fs = require("fs");
const path = require("path");
const dns = require("dns").promises;
const { parseDomainList, parseEmail, isDisposable, hasMx, clean } = require("./_lib/rateCard");
const { names } = require("./_lib/playlists");
const { makeToken } = require("./_lib/newsletterToken");

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map();
const KNOWN = new Set(names());

const MESSAGES = {
  email_format: "That email doesn't look right.",
  email_disposable: "Please use a real inbox, not a throwaway address.",
  email_no_mx: "That email domain can't receive mail.",
  consent: "Tick the box if you want playlist emails. We will not add you without it.",
  playlist: "Pick a playlist from the list, or leave it blank.",
  rate_limited: "Too many tries. Wait a few minutes and try again.",
  not_configured: "Playlist updates are not open yet. Please try again later.",
  delivery_failed: "We could not save that just now. Please try again later.",
};

function limited(ip, now = Date.now()) {
  const arr = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= LIMIT) {
    hits.set(ip, arr);
    return true;
  }
  arr.push(now);
  hits.set(ip, arr);
  if (hits.size > 5000) hits.clear();
  return false;
}

function resetHits() {
  hits.clear();
}

let disposable = null;
function list() {
  if (!disposable) {
    disposable = parseDomainList(fs.readFileSync(path.join(__dirname, "_lib", "disposable-domains.txt"), "utf8"));
  }
  return disposable;
}

function consentYes(v) {
  return v === true || v === "true" || v === "on" || v === "yes";
}

function webhookUrl(env) {
  const raw = String((env && env.NEWSLETTER_WEBHOOK_URL) || "").trim();
  if (!raw) return null;
  let u;
  try { u = new URL(raw); } catch { return null; }
  if (u.protocol !== "https:") return null;
  return u.toString();
}

function resendConfig(env) {
  const e = env || {};
  const from = String(e.NEWSLETTER_FROM || e.RATE_CARD_FROM || "").trim();
  if (!e.RESEND_API_KEY || !e.RESEND_AUDIENCE_ID || !from || !e.NEWSLETTER_CONFIRM_SECRET) return null;
  return { key: e.RESEND_API_KEY, audience: e.RESEND_AUDIENCE_ID, from, secret: e.NEWSLETTER_CONFIRM_SECRET };
}

function siteOrigin(env) {
  const raw = String((env && env.NEWSLETTER_SITE_URL) || "https://www.digitalcurrensy.com").trim();
  try { const u = new URL(raw); if (u.protocol === "https:") return u.origin; } catch {}
  return "https://www.digitalcurrensy.com";
}

async function resendSignup(cfg, data, env, fetchImpl) {
  const headers = { authorization: `Bearer ${cfg.key}`, "content-type": "application/json" };
  const failed = { status: 502, body: { ok: false, error: "delivery_failed", message: MESSAGES.delivery_failed } };
  let created;
  try {
    created = await fetchImpl(`https://api.resend.com/audiences/${encodeURIComponent(cfg.audience)}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email: data.email, first_name: data.name || undefined, unsubscribed: true }),
      signal: AbortSignal.timeout(SIGNUP_TIMEOUT_MS),
    });
  } catch { return failed; }
  // 409/422 = contact already exists: leave its state alone and resend the link.
  if (!created || (created.ok === false && created.status !== 409 && created.status !== 422)) return failed;
  const link = `${siteOrigin(env)}/api/newsletter-confirm?token=${encodeURIComponent(makeToken(data.email, cfg.secret))}`;
  let sent;
  try {
    sent = await fetchImpl("https://api.resend.com/emails", {
      method: "POST",
      headers,
      body: JSON.stringify({
        from: cfg.from,
        to: [data.email],
        subject: "Confirm your DCI playlist updates",
        text: `Hi${data.name ? " " + data.name : ""},\n\nConfirm you want DCI playlist emails by opening this link (valid 48 hours):\n${link}\n\nIf you did not sign up, ignore this email and you will not be added.\n\n— Digital Currensy Inc.`,
      }),
      signal: AbortSignal.timeout(SIGNUP_TIMEOUT_MS),
    });
  } catch { return failed; }
  if (!sent || sent.ok === false) return failed;
  return { status: 200, body: { ok: true, pending: true } };
}

async function validateNewsletter(body, { disposable: domains, resolveMx }) {
  const b = body && typeof body === "object" ? body : {};
  if (clean(b.website, 200) !== "") return { ok: false, spam: true };
  const parsed = parseEmail(b.email);
  if (!parsed) return { ok: false, error: "email_format" };
  if (isDisposable(parsed.domain, domains)) return { ok: false, error: "email_disposable" };
  if (!(await hasMx(parsed.domain, resolveMx))) return { ok: false, error: "email_no_mx" };
  const playlist = clean(b.playlist, 120);
  if (playlist && !KNOWN.has(playlist)) return { ok: false, error: "playlist" };
  if (!consentYes(b.consent)) return { ok: false, error: "consent" };
  return {
    ok: true,
    data: {
      email: parsed.email,
      name: clean(b.name, 100),
      playlist: playlist || null,
      consent: true,
      source: "dci-playlist-list",
    },
  };
}

async function handle(req, env = process.env, fetchImpl = fetch, resolveMx = dns.resolveMx) {
  if (!req || req.method !== "POST") return { status: 405, body: { ok: false, error: "method_not_allowed" } };
  const ip = String((req.headers && req.headers["x-forwarded-for"]) || "").split(",")[0].trim() || "local";
  if (limited(ip)) return { status: 429, body: { ok: false, error: "rate_limited", message: MESSAGES.rate_limited } };
  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const v = await validateNewsletter(body, { disposable: list(), resolveMx });
  if (v.spam) return { status: 200, body: { ok: true } };
  if (!v.ok) return { status: 400, body: { ok: false, error: v.error, message: MESSAGES[v.error] || MESSAGES.delivery_failed } };
  const cfg = resendConfig(env);
  if (cfg) return resendSignup(cfg, v.data, env, fetchImpl);
  const url = webhookUrl(env);
  if (!url) return { status: 503, body: { ok: false, error: "not_configured", message: MESSAGES.not_configured } };
  let sent;
  try {
    sent = await fetchImpl(url, {
      method: "POST",
      redirect: "manual",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify(v.data),
      signal: AbortSignal.timeout(SIGNUP_TIMEOUT_MS),
    });
  } catch {
    return { status: 502, body: { ok: false, error: "delivery_failed", message: MESSAGES.delivery_failed } };
  }
  if (!sent || sent.ok === false) return { status: 502, body: { ok: false, error: "delivery_failed", message: MESSAGES.delivery_failed } };
  return { status: 200, body: { ok: true } };
}

const SIGNUP_TIMEOUT_MS = 8000;

module.exports = async function (req, res) {
  let out;
  try {
    out = await handle(req);
  } catch {
    // Never leak env names or error text to the visitor.
    out = { status: 500, body: { ok: false, error: "delivery_failed", message: MESSAGES.delivery_failed } };
  }
  res.setHeader("cache-control", "no-store");
  res.status(out.status).json(out.body);
};
module.exports.handle = handle;
module.exports.validateNewsletter = validateNewsletter;
module.exports.MESSAGES = MESSAGES;
module.exports.resetHits = resetHits;
module.exports.webhookUrl = webhookUrl;
module.exports.resendConfig = resendConfig;
module.exports.SIGNUP_TIMEOUT_MS = SIGNUP_TIMEOUT_MS;
