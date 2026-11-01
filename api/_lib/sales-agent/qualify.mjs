// Lead qualification: deterministic extraction from the visitor's own messages. No model needed.
const EMAIL = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i;
const BUDGET = [
  [/\b(no budget|free|nothing|\$?0\b)/i, "none"],
  [/\b(under|less than|below)\s*\$?\s?1(,?000|k)\b|\$\s?[1-9]\d{2}\b/i, "<1k"],
  [/\$?\s?(1|2|3|4)(,?\d{3}|k)\b|1k\s*-\s*5k/i, "1k-5k"],
  [/\$?\s?([5-9]|1\d)(,?\d{3}|k)\b|5k\s*-\s*20k/i, "5k-20k"],
  [/\$?\s?([2-9]\d|\d{3})(,?\d{3}|k)\b|20k\+/i, "20k+"],
];
const TIMELINE = [
  [/\b(asap|now|today|this week|immediately|urgent)\b/i, "now"],
  [/\b(this month|next (couple|few)? ?weeks?|in \d weeks?|30 days)\b/i, "30d"],
  [/\b(next month|this quarter|60 days|90 days|in \d months?|q[1-4])\b/i, "90d"],
  [/\b(later|next year|someday|just (looking|browsing)|exploring|not sure)\b/i, "later"],
];
const NEED = {
  clip: /\b(clip|campaign|promo|song|track|release|artist|tiktok|reels|shorts|views)\b/i,
  web: /\b(website|site|landing|redesign|seo|web ?page|online|booking page|store)\b/i,
  spa: /\b(agent|chatbot|bot|ai|assistant|automation|memory|eval|missed calls|leads?)\b/i,
  hookdrop: /\b(sponsor|sponsorship|brand deal|placement|drop|producer|beat|partnership)\b/i,
};

export function extractLead(messages, site) {
  const user = (messages || []).filter((m) => m && m.role === "user").map((m) => String(m.content || ""));
  const all = user.join("\n");
  const lead = { site, email: null, business: null, need: null, budget: null, timeline: null };
  const e = all.match(EMAIL); if (e) lead.email = e[0].toLowerCase();
  const b = all.match(/\b(?:my|our) (?:business|company|brand|studio|shop|label|band) (?:is|is called|name is)\s+([^.,\n!?]{2,60})/i)
    || all.match(/\b(?:i run|we run|i own|we own|i'?m with|we are|i work at)\s+(?:a |an )?([^.,\n!?]{2,60})/i);
  if (b) lead.business = b[1].trim();
  const needRe = NEED[site] || NEED.web;
  const n = user.find((u) => needRe.test(u)); if (n) lead.need = n.trim().slice(0, 240);
  for (const [re, v] of BUDGET) if (re.test(all)) { lead.budget = v; break; }
  for (const [re, v] of TIMELINE) if (re.test(all)) { lead.timeline = v; break; }
  return lead;
}

/** Score 0-100 and qualified flag. Qualified = has email + business + need, budget not "none", timeline not "later". */
export function scoreLead(lead) {
  let s = 0;
  if (lead.email) s += 25;
  if (lead.business) s += 20;
  if (lead.need) s += 20;
  if (lead.budget && lead.budget !== "none") s += lead.budget === "<1k" ? 5 : 20;
  if (lead.timeline) s += { now: 15, "30d": 15, "90d": 10, later: 0 }[lead.timeline];
  const qualified = Boolean(lead.email && lead.business && lead.need) && lead.budget !== "none" && lead.timeline !== "later" && s >= 70;
  const missing = ["business", "need", "budget", "timeline", "email"].filter((k) => !lead[k]);
  return { score: Math.min(100, s), qualified, missing };
}

/** The next qualifying question to steer toward, in a fixed order. */
export function nextQuestion(missing) {
  const q = {
    business: "What's the name of your business or project?",
    need: "What are you hoping to get done?",
    budget: "Roughly what budget range are you working with: under $1k, $1k-5k, $5k-20k, or more?",
    timeline: "When are you hoping to start?",
    email: "What's the best email to send details to?",
  };
  return missing.length ? q[missing[0]] : null;
}
