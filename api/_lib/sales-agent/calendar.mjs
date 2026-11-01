// Calendar provider interface. The founder's availability source is OPEN, so the default is a stub
// that is OFF unless SALES_AGENT_CALENDAR=stub|google|calcom. Every provider implements:
//   busy(fromISO, toISO) -> [{start, end}]   and   book({start, end, email, name, summary}) -> {ok, id?}
// Slots are proposed by proposeSlots() from business hours minus busy blocks.

export class StubCalendar {
  constructor() { this.name = "stub"; this.real = false; }
  async busy() { return []; }
  async book(req) { return { ok: true, id: "stub-" + Date.parse(req.start), pending: true }; }
}

/** Google Calendar free/busy (free API). Needs an OAuth access token or service account token minted outside this package. */
export class GoogleFreeBusyCalendar {
  constructor({ token, calendarId, fetchImpl = fetch }) { Object.assign(this, { token, calendarId, fetchImpl, name: "google", real: true }); }
  async busy(timeMin, timeMax) {
    const r = await this.fetchImpl("https://www.googleapis.com/calendar/v3/freeBusy", {
      method: "POST",
      headers: { authorization: `Bearer ${this.token}`, "content-type": "application/json" },
      body: JSON.stringify({ timeMin, timeMax, items: [{ id: this.calendarId }] }),
    });
    if (!r.ok) throw new Error("google_freebusy_" + r.status);
    const j = await r.json();
    return (j.calendars?.[this.calendarId]?.busy || []);
  }
  async book() { return { ok: true, pending: true }; } // v1: founder confirms; the agent emails both sides.
}

/** Cal.com hosted API v2 (free plan). Self-hosting Cal.com is AGPL-3.0: NEEDS FOUNDER OK before any self-host. */
export class CalComCalendar {
  constructor({ apiKey, eventTypeId, fetchImpl = fetch }) { Object.assign(this, { apiKey, eventTypeId, fetchImpl, name: "calcom", real: true }); }
  async busy() { return []; } // Cal.com enforces availability at booking time.
  async book({ start, email, name }) {
    const r = await this.fetchImpl("https://api.cal.com/v2/bookings", {
      method: "POST",
      headers: { authorization: `Bearer ${this.apiKey}`, "content-type": "application/json", "cal-api-version": "2024-08-13" },
      body: JSON.stringify({ start, eventTypeId: Number(this.eventTypeId), attendee: { name, email, timeZone: "America/Los_Angeles" } }),
    });
    if (!r.ok) return { ok: false, error: "calcom_" + r.status };
    const j = await r.json().catch(() => ({}));
    return { ok: true, id: j?.data?.uid || null };
  }
}

export function calendarFromEnv(env = {}, fetchImpl = fetch) {
  const mode = String(env.SALES_AGENT_CALENDAR || "off").toLowerCase();
  if (mode === "google" && env.GOOGLE_CALENDAR_TOKEN && env.GOOGLE_CALENDAR_ID) return new GoogleFreeBusyCalendar({ token: env.GOOGLE_CALENDAR_TOKEN, calendarId: env.GOOGLE_CALENDAR_ID, fetchImpl });
  if (mode === "calcom" && env.CALCOM_API_KEY && env.CALCOM_EVENT_TYPE_ID) return new CalComCalendar({ apiKey: env.CALCOM_API_KEY, eventTypeId: env.CALCOM_EVENT_TYPE_ID, fetchImpl });
  if (mode === "stub") return new StubCalendar();
  return null;
}

// Business hours in America/Los_Angeles, Mon-Fri 10:00-16:00, 30-min calls. PT offset approximated by month (PDT Mar-Oct).
function ptOffsetHours(d) { const m = d.getUTCMonth(); return m >= 2 && m <= 9 ? 7 : 8; }

export async function proposeSlots(cal, { now = new Date(), days = 5, count = 3, minutes = 30 } = {}) {
  const from = new Date(now.getTime() + 24 * 3600e3);
  const to = new Date(from.getTime() + days * 2 * 24 * 3600e3);
  const busy = cal ? await cal.busy(from.toISOString(), to.toISOString()) : [];
  const out = [];
  for (let d = 0; d < days * 2 && out.length < count; d++) {
    const day = new Date(Date.UTC(from.getUTCFullYear(), from.getUTCMonth(), from.getUTCDate() + d));
    const off = ptOffsetHours(day);
    const ptDay = new Date(day.getTime());
    const dow = ptDay.getUTCDay();
    if (dow === 0 || dow === 6) continue;
    for (const h of [10, 13, 15]) {
      const start = new Date(day.getTime() + (h + off) * 3600e3);
      const end = new Date(start.getTime() + minutes * 60e3);
      if (start <= from) continue;
      const clash = busy.some((b) => new Date(b.start) < end && new Date(b.end) > start);
      if (!clash) { out.push({ start: start.toISOString(), end: end.toISOString() }); break; }
    }
  }
  return out;
}

export function formatSlotPT(iso) {
  return new Date(iso).toLocaleString("en-US", { timeZone: "America/Los_Angeles", weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" }) + " PT";
}
