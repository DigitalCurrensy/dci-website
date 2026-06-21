import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const formType = body?.formType;
    const payload = body?.payload;

    if (!formType || !payload || typeof payload !== "object") {
      return NextResponse.json({ error: "Invalid invite request" }, { status: 400 });
    }

    // Connect this block to CRM, Airtable, HubSpot, Formspree, or a custom API.
    // Keep validation server-side when a production integration is added.
    return NextResponse.json({
      ok: true,
      message: "Invite request accepted for review.",
    });
  } catch {
    return NextResponse.json({ error: "Unable to parse invite request" }, { status: 400 });
  }
}
