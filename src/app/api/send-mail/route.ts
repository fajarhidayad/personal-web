import nodemailer from 'nodemailer';
import { contactFormSchema } from '@/types/schema';

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass,
  },
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const validate = contactFormSchema.safeParse(data);

    if (!validate.success) {
      return Response.json(
        {
          status: 'error',
          message: 'Bad request, form not valid',
        },
        { status: 400 }
      );
    }
    const info = await transporter.sendMail({
      from: data.email,
      to: email,
      subject: `${data.subject} from ${data.email}`,
      text: data.message,
    });

    return Response.json({ status: 'success', messgae: info.response });
  } catch (error) {
    console.error(error);
    return Response.json(
      { status: 'error', message: 'Bad request' },
      { status: 400 }
    );
  }
}
