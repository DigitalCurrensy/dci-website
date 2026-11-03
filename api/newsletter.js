"use strict";

// POST /api/newsletter — one playlist email list.
// Main has Resend for rate-card delivery, not a newsletter audience, and Resend
// contact create has no double-opt-in flag. This list therefore posts once to
// the founder-configured HTTPS endpoint NEWSLETTER_WEBHOOK_URL. If that tool
// supports double opt-in, turn it on there. Unset or non-HTTPS = fail closed.
// No date of birth is read or stored.

const fs = require("fs");
const path = require("path");
const dns = require("dns").promises;
const { parseDomainList, parseEmail, isDisposable, hasMx, clean } = require("./_lib/rateCard");
const { names } = require("./_lib/playlists");

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
  const url = webhookUrl(env);
  if (!url) return { status: 503, body: { ok: false, error: "not_configured", message: MESSAGES.not_configured } };
  const sent = await fetchImpl(url, {
    method: "POST",
    redirect: "manual",
    headers: { "content-type": "application/json", accept: "application/json" },
    body: JSON.stringify(v.data),
  });
  if (!sent || sent.ok === false) return { status: 502, body: { ok: false, error: "delivery_failed", message: MESSAGES.delivery_failed } };
  return { status: 200, body: { ok: true } };
}

module.exports = async function (req, res) {
  const out = await handle(req);
  res.setHeader("cache-control", "no-store");
  res.status(out.status).json(out.body);
};
module.exports.handle = handle;
module.exports.validateNewsletter = validateNewsletter;
module.exports.MESSAGES = MESSAGES;
module.exports.resetHits = resetHits;
module.exports.webhookUrl = webhookUrl;
