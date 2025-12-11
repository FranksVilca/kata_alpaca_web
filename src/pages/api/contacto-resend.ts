import { NextApiRequest, NextApiResponse } from "next";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { enterpriseName, names, email, phone, message } = req.body;

  if (!email || !names || !message) {
    return res.status(400).json({
      error: "Faltan campos requeridos",
      details: "email, names y message son obligatorios"
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'KATA ALPACA <contacto@kataalpaca.com>',
      to: ['emunoz@kataalpaca.com'],
      replyTo: email,
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
                <img src="https://instagram.faqp1-1.fna.fbcdn.net/v/t51.2885-19/61251219_326675671600068_4811332981861908480_n.jpg?stp=dst-jpg_s150x150_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby41NjguYzIifQ&_nc_ht=instagram.faqp1-1.fna.fbcdn.net&_nc_cat=100&_nc_oc=Q6cZ2QE_9ZZj3GNgu0ptab3qADWofh5MZpJALfwt6djhAAvbFB0Vsk-HT3_fREPrw6kxp38&_nc_ohc=DF8x4IEqy50Q7kNvwFzaibk&_nc_gid=z0gw7Cw0i9A5W39YyNyJWw&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AfkNtyDeasFq8ixXcZNCuBsN9Bd7cR6Rh1lyGsxn6B3zeA&oe=69411C39&_nc_sid=22de04" alt="KATA ALPACA Logo">
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
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("❌ Error de Resend:", error);
      return res.status(400).json({
        success: false,
        error: error.message
      });
    }

    console.log("✅ Correo enviado con Resend:", data?.id);
    return res.status(200).json({
      success: true,
      messageId: data?.id,
      message: "Correo enviado correctamente",
    });
  } catch (err: any) {
    console.error("❌ Error al enviar correo:", err);
    return res.status(500).json({
      success: false,
      error: "Error al enviar el correo",
      details: err.message,
    });
  }
}