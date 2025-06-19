import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // should be smtp.gmail.com
    port: process.env.SMTP_PORT, // 587
    auth: {
      user: process.env.SMTP_USER, // your Gmail
      pass: process.env.SMTP_PASS, // the App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER,
      subject: 'New Contact Form Submission',
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email error:', err);
    res.status(500).json({ message: 'Email failed to send' });
  }
}
