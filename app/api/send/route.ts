import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';

const resend = new Resend("re_dcxuq6DM_LZrgdhEachDHCqQumm52VbTB");

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, subject, message } = await req.json()
    console.log("helo enter")
    const { data, error } = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`,
      to: ['gabrielpaez011@gmail.com'],
      subject: subject,
      react: await EmailTemplate({ body: message, email: email, firstName: name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    console.log("data", data)

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}