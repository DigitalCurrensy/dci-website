// Email-gated rate card, same rules as /api/rate-card: honeypot, format, disposable block, MX, then Resend with
// the PDF attached server-side (the PDF is never at a public URL). Site passes its card {filename, b64, subject}.
import { validateRateCardLead } from "./emailCheck.mjs";
import { sendEmail } from "./mail.mjs";

export function makeRateCardSender({ card, disposable, resolveMx, env, fetchImpl = fetch, siteLabel }) {
  return async function sendRateCard({ email, name, company }) {
    const v = await validateRateCardLead({ email, name: name || "there", company }, { disposable, resolveMx });
    if (!v.ok) return { ok: false, error: v.error };
    if (!card || !card.b64) return { ok: false, error: "no_card" };
    const r = await sendEmail(env, fetchImpl, {
      to: [v.data.email],
      subject: card.subject || `${siteLabel} rate card`,
      text: `Hi ${v.data.name},\n\nYour ${siteLabel} rate card is attached. Reply to this email or come back and talk to our agent any time to set up a call.\n\n— Digital Currensy Inc.`,
      attachments: [{ filename: card.filename, content: card.b64 }],
    });
    return r.ok ? { ok: true, email: v.data.email } : r;
  };
}
