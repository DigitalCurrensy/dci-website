// Run: node --test tests/rate-card.test.js  (no CI workflow change in this PR)
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("fs");
const path = require("path");
const { parseDomainList, parseEmail, isDisposable, validateRateCardLead } = require("../api/_lib/rateCard");
const { handle } = require("../api/rate-card");

const list = parseDomainList(fs.readFileSync(path.join(__dirname, "..", "api", "_lib", "disposable-domains.txt"), "utf8"));
const mx = async (d) => (d === "good.com" ? [{ exchange: "mx.good.com", priority: 10 }] : Promise.reject(new Error("ENOTFOUND")));

test("format", () => {
  assert.deepEqual(parseEmail(" Ada@Example.COM "), { email: "ada@example.com", domain: "example.com" });
  for (const bad of ["", "ada", "ada@", "@x.com", "ada@x", "a b@x.com", "ada@x..com"]) assert.equal(parseEmail(bad), null, bad);
});

test("disposable", () => {
  assert.ok(list.size > 1000);
  assert.equal(isDisposable("mailinator.com", list), true);
  assert.equal(isDisposable("x.mailinator.com", list), true);
  assert.equal(isDisposable("gmail.com", list), false);
});

test("full validation", async () => {
  const ctx = { disposable: list, resolveMx: mx };
  assert.equal((await validateRateCardLead({ email: "a@good.com", name: "Ada" }, ctx)).ok, true);
  assert.equal((await validateRateCardLead({ email: "a@yopmail.com", name: "Ada" }, ctx)).error, "email_disposable");
  assert.equal((await validateRateCardLead({ email: "a@nomx.com", name: "Ada" }, ctx)).error, "email_no_mx");
  assert.equal((await validateRateCardLead({ email: "a@good.com", name: "Ada", website: "bot" }, ctx)).error, "spam");
});

test("handler sends the card and a lead record, never a URL", async () => {
  const calls = [];
  const fetchImpl = async (url, init) => { calls.push({ url, body: JSON.parse(init.body) }); return { ok: true, json: async () => ({}) }; };
  const env = { RESEND_API_KEY: "k", RATE_CARD_FROM: "DCI <a@b.com>", RATE_CARD_LEADS_TO: "in@b.com" };
  const out = await handle({ method: "POST", headers: { "x-forwarded-for": "1.1.1.1" }, body: { email: "a@good.com", name: "Ada", card: "spa" } }, env, fetchImpl, mx);
  assert.equal(out.status, 200);
  assert.equal(calls[0].body.to[0], "a@good.com");
  assert.ok(calls[0].body.attachments[0].content.length > 1000);
  assert.equal(calls[1].body.to[0], "in@b.com");
  const bad = await handle({ method: "POST", headers: { "x-forwarded-for": "2.2.2.2" }, body: { email: "a@good.com", name: "Ada", card: "x" } }, env, fetchImpl, mx);
  assert.equal(bad.status, 400);
});

test("rate limit per IP", async () => {
  const env = {};
  let last;
  for (let i = 0; i < 6; i++) last = await handle({ method: "POST", headers: { "x-forwarded-for": "9.9.9.9" }, body: {} }, env, fetch, mx);
  assert.equal(last.status, 429);
});
