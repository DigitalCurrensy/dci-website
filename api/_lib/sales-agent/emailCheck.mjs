// Email checks for the rate card: format, disposable domain, MX. Copied from agentic-spa-door api/_lib/rateCard.js (DCI-owned).
const EMAIL_RE = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]{1,64}@([a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+)$/;

function clean(v, max) {
  return String(v == null ? "" : v).replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, max);
}

/** Parse the vendored comma-separated list into a Set. */
function parseDomainList(text) {
  return new Set(String(text).split(/[,\s]+/).map((d) => d.trim().toLowerCase()).filter(Boolean));
}

/** Format check. Returns the lowercased email and its domain, or null. */
function parseEmail(raw) {
  const email = clean(raw, 254).toLowerCase();
  const m = EMAIL_RE.exec(email);
  if (!m) return null;
  const domain = m[1];
  if (!/\.[a-z]{2,}$/.test(domain)) return null;
  return { email, domain };
}

/** True when the domain or any parent domain is on the disposable list. */
function isDisposable(domain, list) {
  const parts = String(domain).toLowerCase().split(".");
  for (let i = 0; i < parts.length - 1; i++) if (list.has(parts.slice(i).join("."))) return true;
  return false;
}

/** True when the domain publishes at least one MX record. resolveMx is injectable for tests. */
async function hasMx(domain, resolveMx) {
  try {
    const recs = await resolveMx(domain);
    return Array.isArray(recs) && recs.some((r) => r && r.exchange && r.exchange !== ".");
  } catch {
    return false;
  }
}

/**
 * Full check: honeypot, format, disposable domain, MX. Returns { ok, data } or { ok:false, error }.
 * error is one of: spam, email_format, email_disposable, email_no_mx, name.
 */
async function validateRateCardLead(body, { disposable, resolveMx }) {
  const b = body && typeof body === "object" ? body : {};
  if (clean(b.website, 200) !== "") return { ok: false, error: "spam" };
  const parsed = parseEmail(b.email);
  if (!parsed) return { ok: false, error: "email_format" };
  if (isDisposable(parsed.domain, disposable)) return { ok: false, error: "email_disposable" };
  const name = clean(b.name, 100);
  if (!name) return { ok: false, error: "name" };
  if (!(await hasMx(parsed.domain, resolveMx))) return { ok: false, error: "email_no_mx" };
  return { ok: true, data: { email: parsed.email, domain: parsed.domain, name, company: clean(b.company, 120) } };
}

export { EMAIL_RE, clean, parseDomainList, parseEmail, isDisposable, hasMx, validateRateCardLead };
