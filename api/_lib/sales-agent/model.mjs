// Real model call over any OpenAI-compatible chat endpoint. Default: Google Gemini free tier
// (OpenAI-compatible endpoint). Env names: SALES_AGENT_MODEL_API_KEY, optional SALES_AGENT_MODEL_BASE_URL, SALES_AGENT_MODEL.
export const DEFAULT_BASE = "https://generativelanguage.googleapis.com/v1beta/openai";
export const DEFAULT_MODEL = "gemini-2.5-flash";

export async function callModel({ system, messages, env = {}, fetchImpl = fetch }) {
  const key = env.SALES_AGENT_MODEL_API_KEY;
  if (!key) return { ok: false, error: "model_not_configured" };
  const base = (env.SALES_AGENT_MODEL_BASE_URL || DEFAULT_BASE).replace(/\/$/, "");
  const r = await fetchImpl(base + "/chat/completions", {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      model: env.SALES_AGENT_MODEL || DEFAULT_MODEL,
      temperature: 0.3,
      max_tokens: 350,
      messages: [{ role: "system", content: system }, ...messages],
    }),
  });
  if (!r.ok) return { ok: false, error: "model_" + r.status };
  const j = await r.json().catch(() => null);
  const text = j?.choices?.[0]?.message?.content;
  return text ? { ok: true, text: String(text) } : { ok: false, error: "model_empty" };
}
