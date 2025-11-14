import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const { enterpriseName, names, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER, // tu correo Gmail
      pass: process.env.EMAIL_PASS, // tu contraseña o App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${names}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: 'Nuevo mensaje desde el formulario de contacto',
      text: `
        Enterpise: ${enterpriseName}
        Nombre: ${names}
        Email: ${email}
        Celular: ${phone}
        Mensaje: ${message}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error al enviar correo:', err);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}
