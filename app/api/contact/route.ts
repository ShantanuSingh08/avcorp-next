import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  company?: string;
  contact?: string;
  category?: string;
  requirement?: string;
  /** Honeypot field: real visitors never fill this in. */
  website?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GENERIC_ERROR =
  "We couldn't send your enquiry. Please try again or reach us directly.";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill every field, including ones hidden from real visitors.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim();
  const contact = body.contact?.trim();
  const company = body.company?.trim();
  const category = body.category?.trim() || "Not specified";
  const requirement = body.requirement?.trim() || "Not specified";

  if (!name || !contact) {
    return NextResponse.json(
      { error: "Name and Email / Phone are required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Add it to the environment to enable the contact form."
    );
    return NextResponse.json(
      {
        error:
          "The enquiry form isn't fully set up yet. Please call or email us directly.",
      },
      { status: 500 }
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || "A V CORP Website <onboarding@resend.dev>";

  const rows: [string, string][] = [
    ["Name", name],
    ["Company", company || "Not specified"],
    ["Email / Phone", contact],
    ["Product category", category],
  ];

  const html = `
    <h2 style="margin:0 0 16px;color:#0b2d57">New website enquiry</h2>
    <table cellpadding="6" cellspacing="0">
      ${rows
        .map(
          ([label, value]) =>
            `<tr><td style="color:#667085;font-weight:700">${escapeHtml(
              label
            )}</td><td>${escapeHtml(value)}</td></tr>`
        )
        .join("")}
    </table>
    <p style="color:#667085;font-weight:700;margin:16px 0 4px">Requirement</p>
    <p style="white-space:pre-wrap;margin:0">${escapeHtml(requirement)}</p>
  `;

  const text = [
    "New website enquiry",
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Requirement:",
    requirement,
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      subject: `New enquiry from ${name}`,
      html,
      text,
      ...(EMAIL_RE.test(contact) ? { replyTo: contact } : {}),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: GENERIC_ERROR }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return NextResponse.json({ error: GENERIC_ERROR }, { status: 500 });
  }
}
