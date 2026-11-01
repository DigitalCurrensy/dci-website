// DCI sales agent server route. Framework-agnostic: handle(body) -> { status, body }.
// Sites wrap it in a Vercel/Next route. Off unless SALES_AGENT_ENABLED=1.
import { screenInput, filterOutput, AI_DISCLOSURE } from "./guardrails.mjs";
import { extractLead, scoreLead, nextQuestion } from "./qualify.mjs";
import { callModel } from "./model.mjs";
import { proposeSlots, formatSlotPT } from "./calendar.mjs";
import { sendEmail, leadSummaryHtml } from "./mail.mjs";

export const SITES = {
  clip: "CLIP OR NOT",
  web: "DCI Web Studio",
  spa: "Agentic Spa",
  hookdrop: "HOOK DROP",
};

export function systemPrompt(site, knowledge) {
  const priceRule = site === "clip"
    ? "The ONLY price you may ever state is: \"campaigns from $1,500\". Everything else about pricing is in the rate card, which you can email."
    : "Never state any price, rate, fee or amount. Pricing is only in the rate card, which you can email.";
  return [
    `You are the AI sales assistant for ${SITES[site]}, a Digital Currensy Inc. (DCI) service. Say you are an AI assistant for DCI if asked or at the start.`,
    "Goals, in order: greet, answer questions from the KNOWLEDGE only, then learn the visitor's business, what they need, budget range, timeline, and email.",
    "Ask at most one question per reply. Keep replies under 80 words. Plain, friendly, no hype.",
    priceRule,
    "Never promise results, views, revenue or rankings. Never give legal, tax, financial or medical advice.",
    "Never ask for or accept payment details, passwords or ID numbers. Never collect details from anyone under 18.",
    "If you don't know, say so and offer a human follow-up by email. Don't invent facts, clients or testimonials.",
    "You can: email the rate card, and propose call times. The site UI handles both; just offer them.",
    "KNOWLEDGE:\n" + String(knowledge || "").slice(0, 8000),
  ].join("\n");
}

function clean(messages) {
  return (Array.isArray(messages) ? messages : []).slice(-16)
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .map((m) => ({ role: m.role, content: String(m.content || "").slice(0, 800) }));
}

export function createSalesAgent({ site, knowledge, env = {}, fetchImpl = fetch, store, calendar, sendRateCard, now = () => new Date() }) {
  if (!SITES[site]) throw new Error("unknown site " + site);
  const enabled = env.SALES_AGENT_ENABLED === "1" || env.SALES_AGENT_ENABLED === "true";
  const system = systemPrompt(site, knowledge);

  const notifiedSessions = new Set();
  async function finishLead(sessionId, messages, extra = {}) {
    const lead = { ...extractLead(messages, site), ...extra };
    const score = scoreLead(lead);
    if (!score.qualified) return { lead, score, notified: false };
    if (notifiedSessions.has(sessionId) && !extra.slot) return { lead, score, notified: true };
    notifiedSessions.add(sessionId);
    const row = { session_id: sessionId, site, ...lead, score: score.score, qualified: true, created_at: now().toISOString() };
    const stored = store ? await store.lead(row) : false;
    const mail = env.SALES_AGENT_LEADS_TO
      ? await sendEmail(env, fetchImpl, { to: [env.SALES_AGENT_LEADS_TO], reply_to: lead.email, subject: `Qualified lead (${SITES[site]}): ${lead.business}`, html: leadSummaryHtml(lead, score, messages) })
      : { ok: false };
    return { lead, score, notified: mail.ok, stored };
  }

  async function handle(body = {}) {
    if (!enabled) return { status: 404, body: { ok: false, error: "disabled" } };
    const action = body.action || "chat";
    const sessionId = String(body.sessionId || "").slice(0, 64) || "anon";
    const messages = clean(body.messages);

    if (action === "status") return { status: 200, body: { ok: true, site, voice: true, calendar: calendar ? calendar.name : null, disclosure: AI_DISCLOSURE } };

    if (action === "rate_card") {
      if (!sendRateCard) return { status: 200, body: { ok: false, error: "no_rate_card" } };
      const r = await sendRateCard({ email: body.email, name: body.name, company: body.company });
      return { status: 200, body: { ok: r.ok, error: r.error || null, text: r.ok ? "Sent. Check your inbox for the rate card." : "That email didn't pass our checks. Please use a real work or personal inbox." } };
    }

    if (action === "slots") {
      if (!calendar) return { status: 200, body: { ok: true, slots: [], text: "Booking isn't connected yet. Leave your email and a person at DCI will reply to set a time." } };
      const slots = await proposeSlots(calendar, { now: now() });
      return { status: 200, body: { ok: true, slots: slots.map((s) => ({ ...s, label: formatSlotPT(s.start) })) } };
    }

    if (action === "book") {
      const lead = extractLead(messages, site);
      const email = String(body.email || lead.email || "").toLowerCase();
      if (!calendar || !body.slot?.start || !/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(email)) return { status: 400, body: { ok: false, error: "slot_or_email" } };
      const b = await calendar.book({ start: body.slot.start, end: body.slot.end, email, name: body.name || lead.business || "Guest", summary: `${SITES[site]} intro call` });
      if (!b.ok) return { status: 200, body: { ok: false, error: b.error } };
      const label = formatSlotPT(body.slot.start);
      await sendEmail(env, fetchImpl, { to: [email], subject: `Your ${SITES[site]} call: ${label}`, text: `You're booked for ${label}${b.pending ? " (pending confirmation from DCI)" : ""}. Reply to this email to change it.\n\n— Digital Currensy Inc.` });
      const fin = await finishLead(sessionId, messages, { email, slot: label });
      return { status: 200, body: { ok: true, text: `Booked: ${label}. A confirmation is on its way to ${email}.`, pending: Boolean(b.pending), qualified: fin.score.qualified } };
    }

    // chat
    const last = [...messages].reverse().find((m) => m.role === "user");
    const screen = screenInput(last?.content);
    let text; let source;
    if (screen.action !== "allow") { text = screen.reply; source = "guardrail"; }
    else {
      const m = await callModel({ system, messages, env, fetchImpl });
      if (!m.ok) return { status: 503, body: { ok: false, error: m.error, text: "I'm offline for a moment. Leave your email and a person at DCI will follow up." } };
      text = filterOutput(m.text, site); source = "model";
    }
    const convo = screen.action === "minor" ? [] : [...messages, { role: "assistant", content: text }];
    const fin = screen.action === "minor" ? { score: { score: 0, qualified: false, missing: [] } } : await finishLead(sessionId, convo);
    if (store && screen.action !== "minor") await store.log({ session_id: sessionId, site, role_user: last?.content || "", role_agent: text, source, created_at: now().toISOString() });
    const ask = screen.action === "allow" && !fin.score.qualified ? nextQuestion(fin.score.missing) : null;
    return { status: 200, body: { ok: true, text, source, nextQuestion: ask, qualified: fin.score.qualified, offer: { rateCard: Boolean(sendRateCard), booking: Boolean(calendar) } } };
  }
  return { handle, system };
}
