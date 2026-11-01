// Conversation + lead log. Supabase REST (free tier) when SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY are set
// and migrations/001_sales_agent.sql is applied; otherwise a no-op store that reports stored:false.
export function storeFromEnv(env = {}, fetchImpl = fetch) {
  if (!env.SUPABASE_URL || !env.SUPABASE_SERVICE_ROLE_KEY) return { name: "none", async log() { return false; }, async lead() { return false; } };
  const base = env.SUPABASE_URL.replace(/\/$/, "") + "/rest/v1/";
  const h = { apikey: env.SUPABASE_SERVICE_ROLE_KEY, authorization: `Bearer ${env.SUPABASE_SERVICE_ROLE_KEY}`, "content-type": "application/json", prefer: "resolution=merge-duplicates,return=minimal" };
  const post = async (table, row) => { try { const r = await fetchImpl(base + table, { method: "POST", headers: h, body: JSON.stringify(row) }); return r.ok; } catch { return false; } };
  return {
    name: "supabase",
    log: (row) => post("sales_agent_messages", row),
    lead: (row) => post("sales_agent_leads", row),
  };
}

export function memoryStore() {
  const s = { name: "memory", messages: [], leads: [] };
  s.log = async (row) => { s.messages.push(row); return true; };
  s.lead = async (row) => { s.leads.push(row); return true; };
  return s;
}
