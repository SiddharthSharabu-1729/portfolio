
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmailSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = sendEmailSchema.parse(body);

    const { data, error } = await resend.emails.send({
      from: 'contact@siddharthsharabu.co.uk',
      to: 'contact@siddharthsharabu.co.uk',
      subject: `New message from ${name}`,
      reply_to: email,
      html: `<p>You have a new message from your portfolio contact form.</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>`,
    });

    if (error) {
      console.error(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
