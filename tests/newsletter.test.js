const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { handle, resetHits, MESSAGES } = require("../api/newsletter");

const mx = async (d) => (d === "good.com" ? [{ exchange: "mx.good.com", priority: 10 }] : Promise.reject(new Error("ENOTFOUND")));
const env = { NEWSLETTER_WEBHOOK_URL: "https://hooks.example.com/dci-playlist-list" };
const good = { email: "a@good.com", name: "Ada", playlist: "Heat Check", consent: true };

function req(body, ip) {
  return { method: "POST", headers: { "x-forwarded-for": ip }, body };
}

test("invalid emails and an unticked consent are rejected", async () => {
  resetHits();
  const cases = [
    [{ ...good, email: "not-an-email" }, "email_format"],
    [{ ...good, email: "a@yopmail.com" }, "email_disposable"],
    [{ ...good, email: "a@nomx.com" }, "email_no_mx"],
    [{ ...good, consent: false }, "consent"],
    [{ ...good, consent: "" }, "consent"],
    [{ email: "a@good.com", name: "Ada", playlist: "Heat Check" }, "consent"],
    [{ ...good, playlist: "Not A Real Playlist" }, "playlist"],
  ];
  for (let i = 0; i < cases.length; i++) {
    let calls = 0;
    const fetchImpl = async () => { calls += 1; return { ok: true }; };
    const [body, error] = cases[i];
    const out = await handle(req(body, `10.0.0.${i + 1}`), env, fetchImpl, mx);
    assert.equal(out.status, 400, error);
    assert.equal(out.body.ok, false);
    assert.equal(out.body.error, error);
    assert.equal(out.body.message, MESSAGES[error]);
    assert.equal(calls, 0, error);
  }
});

test("honeypot blocks bots and does not call the endpoint", async () => {
  resetHits();
  let calls = 0;
  const fetchImpl = async () => { calls += 1; return { ok: true }; };
  const out = await handle(req({ ...good, website: "https://spam.example" }, "10.1.0.1"), env, fetchImpl, mx);
  assert.equal(out.status, 200);
  assert.equal(out.body.ok, true);
  assert.equal(calls, 0);
});

test("a valid submission hits the mocked endpoint once", async () => {
  resetHits();
  const calls = [];
  const fetchImpl = async (url, init) => {
    calls.push({ url, init });
    return { ok: true, status: 200 };
  };
  const out = await handle(req({ ...good, dateOfBirth: "1990-01-01", dob: "1990-01-01" }, "10.2.0.1"), env, fetchImpl, mx);
  assert.equal(out.status, 200);
  assert.equal(out.body.ok, true);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, env.NEWSLETTER_WEBHOOK_URL);
  assert.equal(calls[0].init.method, "POST");
  const payload = JSON.parse(calls[0].init.body);
  assert.deepEqual(payload, {
    email: "a@good.com",
    name: "Ada",
    playlist: "Heat Check",
    consent: true,
    source: "dci-playlist-list",
  });
  assert.equal("dateOfBirth" in payload, false);
  assert.equal("dob" in payload, false);
  assert.equal("website" in payload, false);
});

test("optional name and playlist may be omitted", async () => {
  resetHits();
  const calls = [];
  const fetchImpl = async (url, init) => { calls.push(JSON.parse(init.body)); return { ok: true }; };
  const out = await handle(req({ email: " Ada@Good.com ", consent: "yes" }, "10.2.0.2"), env, fetchImpl, mx);
  assert.equal(out.status, 200);
  assert.equal(calls.length, 1);
  assert.equal(calls[0].email, "ada@good.com");
  assert.equal(calls[0].name, "");
  assert.equal(calls[0].playlist, null);
});

test("endpoint unset fails closed with a friendly message and no network call", async () => {
  resetHits();
  let calls = 0;
  const fetchImpl = async () => { calls += 1; return { ok: true }; };
  for (const unset of [{}, { NEWSLETTER_WEBHOOK_URL: "" }, { NEWSLETTER_WEBHOOK_URL: "http://insecure.example/hook" }]) {
    const out = await handle(req(good, "10.3.0." + calls), unset, fetchImpl, mx);
    assert.equal(out.status, 503);
    assert.equal(out.body.ok, false);
    assert.equal(out.body.error, "not_configured");
    assert.equal(out.body.message, MESSAGES.not_configured);
  }
  assert.equal(calls, 0);
});

test("rate limit blocks the sixth post from one address", async () => {
  resetHits();
  let calls = 0;
  const fetchImpl = async () => { calls += 1; return { ok: true }; };
  let last;
  for (let i = 0; i < 6; i++) last = await handle(req(good, "10.9.9.9"), env, fetchImpl, mx);
  assert.equal(last.status, 429);
  assert.equal(last.body.message, MESSAGES.rate_limited);
  assert.equal(calls, 5);
});

test("homepage and playlist index use the same list form", () => {
  const home = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  const index = fs.readFileSync(path.join(__dirname, "..", "playlists", "index.html"), "utf8");
  for (const html of [home, index]) {
    assert.match(html, /<form class="playlist-list"/);
    assert.match(html, /name="email"/);
    assert.match(html, /name="consent"/);
    assert.match(html, /href="\/privacy"/);
    assert.match(html, /name="website"/);
    assert.equal(/date of birth|birthdate/i.test(html), false);
  }
  const homeForm = home.slice(home.indexOf("<!-- playlist-list -->"), home.indexOf("<!-- /playlist-list -->"));
  assert.equal((homeForm.match(/<option value="/g) || []).length, 34);
});
