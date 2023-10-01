export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    const res = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
      { method: 'POST' }
    );

    if (res.ok) {
      return Response.json({ status: 'success', message: 'CAPTCHA VERIFIED' });
    } else {
      throw new Error('Failed Captcha');
    }
  } catch (error) {
    return Response.json(
      { status: 'error', message: 'Internal server error' },
      { status: 500 }
    );
  }
}
