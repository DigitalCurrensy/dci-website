"use strict";
// Signed, expiring double-opt-in token: base64url(email).expiryMs.hmacSha256.
// Secret: NEWSLETTER_CONFIRM_SECRET. Compare is timing-safe.
const crypto = require("crypto");

const TTL_MS = 48 * 60 * 60 * 1000;

function b64u(s) { return Buffer.from(s, "utf8").toString("base64url"); }
function sign(payload, secret) { return crypto.createHmac("sha256", secret).update(payload).digest("base64url"); }

function makeToken(email, secret, now = Date.now()) {
  const payload = `${b64u(email)}.${now + TTL_MS}`;
  return `${payload}.${sign(payload, secret)}`;
}

// Returns the email, or null when the token is malformed, tampered or expired.
function verifyToken(token, secret, now = Date.now()) {
  if (!secret || typeof token !== "string" || token.length > 1000) return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [e, exp, sig] = parts;
  if (!/^\d{1,15}$/.test(exp) || !/^[A-Za-z0-9_-]+$/.test(e) || !/^[A-Za-z0-9_-]+$/.test(sig)) return null;
  const want = Buffer.from(sign(`${e}.${exp}`, secret));
  const got = Buffer.from(sig);
  if (want.length !== got.length || !crypto.timingSafeEqual(want, got)) return null;
  if (Number(exp) < now) return null;
  const email = Buffer.from(e, "base64url").toString("utf8");
  return email.includes("@") ? email : null;
}

module.exports = { makeToken, verifyToken, TTL_MS };
