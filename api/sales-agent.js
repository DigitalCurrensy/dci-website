// POST /api/sales-agent — "Talk to our agent" (voice + chat) for DCI Web Studio. Off unless SALES_AGENT_ENABLED=1.
const fs = require("fs");
const path = require("path");
const dns = require("dns").promises;
const CARDS = require("./_lib/rateCards");

let agentP = null;
async function get() {
  if (agentP) return agentP;
  agentP = (async () => {
    const m = await import("./_lib/sales-agent/index.mjs");
    const { parseDomainList } = await import("./_lib/sales-agent/emailCheck.mjs");
    const env = process.env;
    const disposable = parseDomainList(fs.readFileSync(path.join(__dirname, "_lib", "disposable-domains.txt"), "utf8"));
    const kb = (f) => fs.readFileSync(path.join(__dirname, "_lib", "sales-agent", "knowledge", f), "utf8");
    return m.createSalesAgent({
      site: "web",
      knowledge: kb("web.md") + "\n\nDCI also offers:\n" + kb("spa.md"),
      env,
      store: m.storeFromEnv(env),
      calendar: m.calendarFromEnv(env),
      sendRateCard: m.makeRateCardSender({ card: CARDS.web, disposable, resolveMx: dns.resolveMx, env: { ...env, SALES_AGENT_FROM: env.SALES_AGENT_FROM || env.RATE_CARD_FROM }, siteLabel: "DCI Web Studio" }),
    });
  })();
  return agentP;
}

module.exports = async function handler(req, res) {
  res.setHeader("cache-control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ ok: false });
  let body = req.body; if (typeof body === "string") { try { body = JSON.parse(body); } catch { body = {}; } }
  const out = await (await get()).handle(body || {});
  return res.status(out.status).json(out.body);
};
