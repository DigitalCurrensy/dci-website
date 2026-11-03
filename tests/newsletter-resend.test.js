const test = require("node:test");
const assert = require("node:assert/strict");
const { handle, resetHits, MESSAGES } = require("../api/newsletter");
const confirm = require("../api/newsletter-confirm");
const { makeToken, verifyToken, TTL_MS } = require("../api/_lib/newsletterToken");

const mx = async (d) => (d === "good.com" ? [{ exchange: "mx.good.com", priority: 10 }] : Promise.reject(new Error("ENOTFOUND")));
const SECRET = "test-secret-not-real";
const env = { RESEND_API_KEY: "re_test", RESEND_AUDIENCE_ID: "aud_1", NEWSLETTER_FROM: "DCI <hi@example.com>", NEWSLETTER_CONFIRM_SECRET: SECRET };
const good = { email: "a@good.com", name: "Ada", playlist: "Heat Check", consent: true };
const req = (body, ip) => ({ method: "POST", headers: { "x-forwarded-for": ip }, body });

test("each missing Resend env var fails closed with 503 and no network call", async () => {
  resetHits();
  let calls = 0;
  const f = async () => { calls += 1; return { ok: true }; };
  const names = ["RESEND_API_KEY", "RESEND_AUDIENCE_ID", "NEWSLETTER_FROM", "NEWSLETTER_CONFIRM_SECRET"];
  for (let i = 0; i < names.length; i++) {
    const e = { ...env, [names[i]]: "" };
    const out = await handle(req(good, `20.0.0.${i}`), e, f, mx);
    assert.equal(out.status, 503, names[i]);
    assert.equal(out.body.message, MESSAGES.not_configured);
    const c = await confirm.handle({ method: "GET", query: { token: makeToken("a@good.com", SECRET) } }, e, f);
    assert.equal(c.status, 503, names[i]);
  }
  assert.equal(calls, 0);
});

test("RATE_CARD_FROM is used when NEWSLETTER_FROM is unset", async () => {
  resetHits();
  const bodies = [];
  const f = async (_u, init) => { bodies.push(JSON.parse(init.body)); return { ok: true }; };
  const out = await handle(req(good, "20.1.0.1"), { ...env, NEWSLETTER_FROM: "", RATE_CARD_FROM: "DCI <rc@example.com>" }, f, mx);
  assert.equal(out.status, 200);
  assert.equal(bodies[1].from, "DCI <rc@example.com>");
});

test("invalid email and missing consent are rejected before Resend", async () => {
  resetHits();
  let calls = 0;
  const f = async () => { calls += 1; return { ok: true }; };
  assert.equal((await handle(req({ ...good, email: "nope" }, "20.2.0.1"), env, f, mx)).body.error, "email_format");
  assert.equal((await handle(req({ ...good, consent: false }, "20.2.0.2"), env, f, mx)).body.error, "consent");
  assert.equal(calls, 0);
});

test("happy path: pending contact, then confirmation email with a valid signed link", async () => {
  resetHits();
  const calls = [];
  const f = async (url, init) => { calls.push({ url, init, body: JSON.parse(init.body) }); return { ok: true, status: 200 }; };
  const out = await handle(req(good, "20.3.0.1"), env, f, mx);
  assert.equal(out.status, 200);
  assert.equal(out.body.ok, true);
  assert.equal(calls.length, 2);
  assert.equal(calls[0].url, "https://api.resend.com/audiences/aud_1/contacts");
  assert.equal(calls[0].body.unsubscribed, true);
  assert.equal(calls[0].body.email, "a@good.com");
  assert.ok(calls[0].init.signal instanceof AbortSignal);
  assert.equal(calls[1].url, "https://api.resend.com/emails");
  assert.ok(calls[1].init.signal instanceof AbortSignal);
  assert.deepEqual(calls[1].body.to, ["a@good.com"]);
  const m = calls[1].body.text.match(/\/api\/newsletter-confirm\?token=(\S+)/);
  assert.ok(m);
  assert.equal(verifyToken(decodeURIComponent(m[1]), SECRET), "a@good.com");
});

test("existing contact (409) still gets a fresh link", async () => {
  resetHits();
  let n = 0;
  const f = async () => (++n === 1 ? { ok: false, status: 409 } : { ok: true });
  assert.equal((await handle(req(good, "20.4.0.1"), env, f, mx)).status, 200);
});

test("Resend failures return a generic 502", async () => {
  resetHits();
  const cases = [
    async () => { throw new Error("re_test secret down"); },
    async () => ({ ok: false, status: 500 }),
    (() => { let n = 0; return async () => (++n === 1 ? { ok: true } : { ok: false, status: 403 }); })(),
  ];
  for (let i = 0; i < cases.length; i++) {
    const out = await handle(req(good, `20.5.0.${i}`), env, cases[i], mx);
    assert.equal(out.status, 502);
    assert.equal(out.body.message, MESSAGES.delivery_failed);
    assert.ok(!JSON.stringify(out.body).includes("re_test"));
  }
});

test("confirm: valid token subscribes the contact", async () => {
  const calls = [];
  const f = async (url, init) => { calls.push({ url, init }); return { ok: true }; };
  const out = await confirm.handle({ method: "GET", query: { token: makeToken("a@good.com", SECRET) } }, env, f);
  assert.equal(out.status, 200);
  assert.match(out.html, /on the list/);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, "https://api.resend.com/audiences/aud_1/contacts/a%40good.com");
  assert.equal(calls[0].init.method, "PATCH");
  assert.deepEqual(JSON.parse(calls[0].init.body), { unsubscribed: false });
  assert.ok(calls[0].init.signal instanceof AbortSignal);
  assert.ok(!out.html.includes("a@good.com"));
});

test("confirm: expired and tampered tokens are refused without a Resend call", async () => {
  let calls = 0;
  const f = async () => { calls += 1; return { ok: true }; };
  const t0 = Date.now();
  const tok = makeToken("a@good.com", SECRET, t0);
  const expired = await confirm.handle({ method: "GET", query: { token: tok } }, env, f, t0 + TTL_MS + 1);
  assert.equal(expired.status, 400);
  const [e, exp, sig] = tok.split(".");
  const tampered = [
    `${Buffer.from("b@good.com").toString("base64url")}.${exp}.${sig}`,
    `${e}.${Number(exp) + 999999}.${sig}`,
    `${e}.${exp}.${sig.slice(0, -1)}${sig.endsWith("A") ? "B" : "A"}`,
    makeToken("a@good.com", "wrong-secret"),
    "", "garbage",
  ];
  for (const t of tampered) {
    assert.equal((await confirm.handle({ method: "GET", query: { token: t } }, env, f)).status, 400, t);
  }
  assert.equal(calls, 0);
});

test("confirm: Resend failure shows a generic error page", async () => {
  const out = await confirm.handle({ method: "GET", query: { token: makeToken("a@good.com", SECRET) } }, env, async () => { throw new Error("x"); });
  assert.equal(out.status, 502);
  assert.ok(!out.html.includes("re_test"));
});
