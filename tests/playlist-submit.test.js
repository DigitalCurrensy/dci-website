const test = require("node:test");
const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { validateSubmission, PLAYLISTS } = require("../api/_lib/validate");
const { handle } = require("../api/playlist-submit");

const root = path.join(__dirname, "..");
const good = { name: "Ada", artist: "Ada Wave", email: "ada@example.com", track: "https://open.spotify.com/track/abc", playlist: "Heat Check", consent_terms: true };

test("playlists list matches main.js PL (33, incl. PLAYLIST PRINCESS)", () => {
  const js = fs.readFileSync(path.join(root, "assets/js/main.js"), "utf8");
  const pl = JSON.parse(js.match(/const PL=(\{.*?\});\n/)[1]);
  const names = [...pl.featured, ...pl.grid].map((p) => p.name);
  assert.deepStrictEqual(PLAYLISTS, names);
  assert.strictEqual(names.length, 33);
  assert.ok(names.includes("PLAYLIST PRINCESS"));
  assert.ok(!js.includes("ANAIYA SMITH"));
});

test("submit.html offers every playlist", () => {
  const html = fs.readFileSync(path.join(root, "submit.html"), "utf8");
  for (const n of PLAYLISTS) assert.ok(html.includes(`value="${n.replace(/&/g, "&amp;")}"`), n);
});

test("valid submission passes", () => {
  const r = validateSubmission(good);
  assert.strictEqual(r.ok, true);
  assert.strictEqual(r.data.consent_email, false);
});

test("rejects bad email, non-https track, unknown playlist, no consent", () => {
  const r = validateSubmission({ ...good, email: "x", track: "http://evil.test/a", playlist: "Nope", consent_terms: false });
  assert.deepStrictEqual(r.errors.sort(), ["consent_terms", "email", "playlist", "track"]);
});

test("honeypot marks spam", () => {
  assert.strictEqual(validateSubmission({ ...good, website: "spam.biz" }).spam, true);
});

test("handler: 503 when not configured, no network call", async () => {
  let called = 0;
  const out = await handle({ method: "POST", body: good, headers: {} }, {}, async () => { called++; });
  assert.strictEqual(out.status, 503);
  assert.strictEqual(called, 0);
});

test("handler: sends email; adds contact only with consent", async () => {
  const env = { RESEND_API_KEY: "k", PLAYLIST_FORM_TO: "to@example.com", PLAYLIST_FORM_FROM: "f@example.com", RESEND_AUDIENCE_ID: "aud" };
  const calls = [];
  const f = async (url) => { calls.push(url); return { ok: true, json: async () => ({}) }; };
  assert.strictEqual((await handle({ method: "POST", body: good, headers: {} }, env, f)).status, 200);
  assert.strictEqual(calls.length, 1);
  await handle({ method: "POST", body: { ...good, consent_email: true }, headers: {} }, env, f);
  assert.ok(calls[2].includes("/audiences/aud/contacts"));
});

test("handler: turnstile required when secret set", async () => {
  const env = { TURNSTILE_SECRET_KEY: "s", RESEND_API_KEY: "k", PLAYLIST_FORM_TO: "t@e.com", PLAYLIST_FORM_FROM: "f@e.com" };
  const f = async () => ({ ok: true, json: async () => ({ success: false }) });
  assert.strictEqual((await handle({ method: "POST", body: good, headers: {} }, env, f)).status, 400);
});

test("handler: GET is 405", async () => {
  assert.strictEqual((await handle({ method: "GET" }, {})).status, 405);
});
