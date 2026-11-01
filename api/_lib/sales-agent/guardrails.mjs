// Guardrails for the DCI sales agent. Pure functions, no I/O.
export const AI_DISCLOSURE = "I'm an AI assistant for Digital Currensy Inc. (DCI).";
export const HANDOFF = "A person at DCI will follow up by email.";

const JAIL = /ignore (all |any )?(previous|prior|above)|jailbreak|developer mode|reveal (your )?(system|hidden)|print .{0,20}prompt|api[ _-]?key|sk-[a-z0-9]{8,}/i;
const ADVICE = /\b(legal advice|lawyer|lawsuit|sue|contract review|tax(es)?\b|irs|deduct|write[- ]?off|invest(ment|ing)?\b|stock tip|crypto price|financial advice|medical|diagnos)/i;
const PAYMENT = /\b(?:\d[ -]?){13,19}\b|\bcvv\b|\bcvc\b|card number|routing number|account number|\bssn\b|social security|passport|password/i;
const MINOR = /\b(i'?m|i am|im)\s*(1[0-7]|[5-9])\b|\b(1[0-7]|[5-9])\s*(years?|yrs?)\s*old\b|\bunder ?18\b|\bminor\b|\bmy (son|daughter|kid|child) (is|'s) (1[0-7]|[5-9])\b/i;
const HUMAN = /\b(human|real person|talk to (a )?(person|someone|adrian|founder)|speak to)\b/i;

/** Screen a visitor message before any model call. Returns { action, reply? }. */
export function screenInput(text) {
  const t = String(text || "").trim();
  if (!t) return { action: "block", reply: "Ask me anything about DCI's services." };
  if (PAYMENT.test(t)) return { action: "block", reason: "sensitive", reply: "Please don't share card numbers, passwords or ID numbers here. I never take payment or sensitive details in chat. " + HANDOFF };
  if (MINOR.test(t)) return { action: "minor", reason: "minor", reply: "Thanks for telling me. DCI only works with adults (18+), so I can't collect your details. Please ask a parent or guardian to reach out." };
  if (JAIL.test(t)) return { action: "block", reason: "jailbreak", reply: "I can only help with DCI's services. " + AI_DISCLOSURE };
  if (ADVICE.test(t)) return { action: "block", reason: "advice", reply: "I can't give legal, tax, financial or medical advice. Please talk to a licensed professional. I'm happy to answer questions about DCI's services." };
  if (HUMAN.test(t)) return { action: "handoff", reply: AI_DISCLOSURE + " Leave your email and " + HANDOFF.toLowerCase() };
  return { action: "allow" };
}

const PRICE = /(\$\s?\d[\d,.]*\s?k?|\b\d[\d,.]*\s?(usd|dollars|bucks)\b|\b\d+\s?k\b)/gi;
const PROMISE = /\b(guarantee[sd]?|we promise|promised|will definitely|100% (sure|certain)|risk[- ]free|you will (make|earn|get) \$?\d|go viral for sure)\b/gi;

/** Filter model output. Only CLIP OR NOT may say "campaigns from $1,500"; every other number with $ is removed. */
export function filterOutput(text, site) {
  let out = String(text || "").trim();
  const allowed = site === "clip" ? "campaigns from $1,500" : null;
  const keep = "\u0000KEEP\u0000";
  if (allowed) out = out.replace(/campaigns (start(ing)? )?(from|at) \$1,?500/gi, keep);
  let priced = false;
  out = out.replace(PRICE, () => { priced = true; return "[pricing is in the rate card]"; });
  if (allowed) out = out.split(keep).join(allowed);
  out = out.replace(PROMISE, "aim to");
  if (priced) out = out.replace(/(\[pricing is in the rate card\][\s,]*)+/g, "[pricing is in the rate card] ");
  return out.slice(0, 1200);
}
