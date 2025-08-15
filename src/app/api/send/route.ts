
// import { NextRequest, NextResponse } from 'next/server';
// import { Resend } from 'resend';
// import * as z from 'zod';

// export const runtime = 'edge';

// const resend = new Resend(process.env.RESEND_API_KEY);

// const sendEmailSchema = z.object({
//   name: z.string().min(2),
//   email: z.string().email(),
//   message: z.string().min(10),
// });

// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { name, email, message } = sendEmailSchema.parse(body);

//     const { data, error } = await resend.emails.send({
//       from: 'contact@siddharthsharabu.co.uk',
//       to: 'contact@siddharthsharabu.co.uk',
//       subject: `New message from ${name}`,
//       reply_to: email,
//       html: `<p>You have a new message from your portfolio contact form.</p>
//              <p><strong>Name:</strong> ${name}</p>
//              <p><strong>Email:</strong> ${email}</p>
//              <p><strong>Message:</strong></p>
//              <p>${message}</p>`,
//     });

//     if (error) {
//       console.error(error);
//       return NextResponse.json({ error: error.message }, { status: 500 });
//     }

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error(error);
//     if (error instanceof z.ZodError) {
//       return NextResponse.json({ error: error.issues }, { status: 400 });
//     }
//     return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
//   }
// }


import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as z from 'zod';

export const runtime = 'edge';

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

    // 1️⃣ Send notification email to YOU
    const { error: notifyError } = await resend.emails.send({
      from: 'contact@siddharthsharabu.co.uk',
      to: 'contact@siddharthsharabu.co.uk',
      subject: `New message from ${name}`,
      reply_to: email,
      html: `
        <p>You have a new message from your portfolio contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (notifyError) {
      console.error(notifyError);
      return NextResponse.json({ error: notifyError.message }, { status: 500 });
    }

    // 2️⃣ Send confirmation email to the USER
    const { error: confirmError } = await resend.emails.send({
      from: 'contact@siddharthsharabu.co.uk', // Must be from verified domain
      to: email,
      subject: 'We’ve received your message',
      html: `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out via my portfolio website. I’ve received your message and will get back to you soon.</p>
        <p><strong>Your Message:</strong></p>
        <blockquote>${message}</blockquote>
        <p>Best regards,<br/>Siddharth Sharabu</p>
      `,
    });

    if (confirmError) {
      console.error(confirmError);
      // We won't fail the whole request if confirmation fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
