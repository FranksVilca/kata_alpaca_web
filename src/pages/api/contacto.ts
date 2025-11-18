import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  // DEBUG: Verificar variables de entorno
  console.log(
    "🔍 EMAIL_USER:",
    process.env.EMAIL_USER ? "CONFIGURADO ✅" : "FALTA ❌"
  );
  console.log(
    "🔍 EMAIL_PASS:",
    process.env.EMAIL_PASS ? "CONFIGURADO ✅" : "FALTA ❌"
  );

  const { enterpriseName, names, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `🔔 Nuevo Cliente Potencial - ${enterpriseName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f4f4f4; }
              .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
              .logo-section { background: white; padding: 20px; text-align: center; border-bottom: 3px solid #575151; }
              .logo-section img { max-width: 150px; height: auto; }
              .header { background: linear-gradient(135deg, #F2F2D0 0%, #F2F2D0 100%); color: #575151; padding: 30px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; }
              .content { background: #f9f9f9; padding: 30px; }
              .field { background: white; margin: 15px 0; padding: 15px; border-radius: 8px; border-left: 4px solid #575151; }
              .field-label { color: #FF8112; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .field-value { color: #333; font-size: 16px; word-break: break-word; }
              .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 15px; border: 2px solid #575151; }
              .footer { text-align: center; padding: 20px; background: #333; color: white; }
              .footer a { color: #FAF5E8; text-decoration: none; }
              .badge { display: inline-block; background: #4CAF50; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo-section">
                <img src="https://www.kataalpaca.com/en/img/logo/logo-kata-alpaca.png" alt="KATA ALPACA Logo">
              </div>
              
              <div class="header">
                <h1>🎉 ¡Nuevo Cliente Potencial!</h1>
                <div class="badge">FORMULARIO DE CONTACTO</div>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="field-label">🏢 Empresa</div>
                  <div class="field-value">${enterpriseName}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">👤 Nombre Completo</div>
                  <div class="field-value">${names}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">📧 Email</div>
                  <div class="field-value"><a href="mailto:${email}" style="color: #575151; text-decoration: none;">${email}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">📱 Celular</div>
                  <div class="field-value"><a href="tel:${phone}" style="color: #575151; text-decoration: none;">${phone}</a></div>
                </div>
                
                <div class="message-box">
                  <div class="field-label">💬 Mensaje</div>
                  <div class="field-value" style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding: 15px; background: white; border-radius: 8px;">
                  <p style="color: #666; font-size: 12px; margin: 5px 0;">Recibido el ${new Date().toLocaleString(
                    "es-PE",
                    { dateStyle: "full", timeStyle: "short" }
                  )}</p>
                </div>
              </div>
              
              <div class="footer">
                <p style="margin: 5px 0;"><strong>KATA ALPACA</strong></p>
                <p style="margin: 5px 0; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto</p>
                <p style="margin: 5px 0; font-size: 12px;">
                  <a href="mailto:${process.env.EMAIL_USER}">${
        process.env.EMAIL_USER
      }</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        KATA ALPACA - NUEVO CLIENTE POTENCIAL
        
        Empresa: ${enterpriseName}
        Nombre: ${names}
        Email: ${email}
        Celular: ${phone}
        
        Mensaje:
        ${message}
        
        Recibido el ${new Date().toLocaleString("es-PE")}
      `,
    });

    console.log("✅ Correo enviado exitosamente:", info.messageId);
    return res.status(200).json({
      success: true,
      messageId: info.messageId,
      debug: "Correo enviado correctamente",
    });
  } catch (err: any) {
    console.error("❌ Error al enviar correo:", err);

    // Retornar detalles del error al cliente para debugging
    return res.status(500).json({
      error: "Error al enviar el correo",
      details: {
        message: err.message,
        code: err.code,
        command: err.command,
        response: err.response,
        responseCode: err.responseCode,
      },
    });
  }
}
