// Resend email (free tier). Env: RESEND_API_KEY, SALES_AGENT_FROM (verified sender), SALES_AGENT_LEADS_TO (founder inbox).
export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function sendEmail(env, fetchImpl, msg) {
  if (!env.RESEND_API_KEY || !env.SALES_AGENT_FROM) return { ok: false, error: "mail_not_configured" };
  const r = await fetchImpl("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from: env.SALES_AGENT_FROM, ...msg }),
  });
  return r.ok ? { ok: true } : { ok: false, error: "mail_" + r.status };
}

export function leadSummaryHtml(lead, score, transcript) {
  const rows = ["site", "business", "need", "budget", "timeline", "email", "slot"].map((k) => `<li>${k}: ${esc(lead[k] ?? "-")}</li>`).join("");
  const convo = transcript.slice(-12).map((m) => `<p><b>${m.role === "user" ? "Visitor" : "Agent"}:</b> ${esc(m.content)}</p>`).join("");
  return `<h2>Qualified lead (score ${score.score})</h2><ul>${rows}</ul><h3>Conversation</h3>${convo}`;
}
