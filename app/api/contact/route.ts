import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ ok: false, error: "Email not configured" }, { status: 503 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: "varunthota.com <onboarding@resend.dev>",
      to: "varun.thota@gmail.com",
      replyTo: email,
      subject: `Message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    if (result.error) {
      console.error("Resend error:", result.error);
      return NextResponse.json({ ok: false, error: result.error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route exception:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
