import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    tipoDocumento,
    numeroDocumento,
    correo,
    telefono,
    pais,
    direccion,
    tipoProducto,
    monto,
    descripcion,
    motivo,
    detalle,
    comprobante,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER_BOOK,
      pass: process.env.EMAIL_PASS_BOOK,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      replyTo: correo,
      to: process.env.EMAIL_USER,
      subject: `📋 ${motivo === 'reclamo' ? 'RECLAMO' : 'QUEJA'} - ${nombre} ${apellidoPaterno}`,
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
              .section-title { background: #FF8112; color: white; padding: 10px 15px; margin: 20px 0 15px 0; border-radius: 5px; font-weight: bold; }
              .field { background: white; margin: 10px 0; padding: 15px; border-radius: 8px; border-left: 4px solid #575151; }
              .field-label { color: #FF8112; font-weight: bold; font-size: 12px; text-transform: uppercase; margin-bottom: 5px; }
              .field-value { color: #333; font-size: 16px; word-break: break-word; }
              .message-box { background: white; padding: 20px; border-radius: 8px; margin-top: 15px; border: 2px solid #575151; }
              .footer { text-align: center; padding: 20px; background: #333; color: white; }
              .footer a { color: #FAF5E8; text-decoration: none; }
              .badge { display: inline-block; background: ${motivo === 'reclamo' ? '#dc3545' : '#ffc107'}; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; margin-top: 10px; font-weight: bold; }
              .alert-box { background: #fff3cd; border-left: 4px solid #ffc107; padding: 15px; margin: 15px 0; border-radius: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="logo-section">
                <img src="https://www.kataalpaca.com/en/img/logo/logo-kata-alpaca.png" alt="KATA ALPACA Logo">
              </div>
              
              <div class="header">
                <h1>📋 Libro de Reclamaciones</h1>
                <div class="badge">${motivo === 'reclamo' ? 'RECLAMO' : 'QUEJA'}</div>
              </div>
              
              <div class="content">
                <div class="section-title">👤 DATOS DEL CONSUMIDOR</div>
                
                <div class="field">
                  <div class="field-label">Nombre Completo</div>
                  <div class="field-value">${nombre} ${apellidoPaterno} ${apellidoMaterno}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">Documento de Identidad</div>
                  <div class="field-value">${tipoDocumento.toUpperCase()}: ${numeroDocumento}</div>
                </div>

                <div class="section-title">📞 DATOS DE CONTACTO</div>
                
                <div class="field">
                  <div class="field-label">📧 Correo Electrónico</div>
                  <div class="field-value"><a href="mailto:${correo}" style="color: #575151; text-decoration: none;">${correo}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">📱 Teléfono</div>
                  <div class="field-value"><a href="tel:${telefono}" style="color: #575151; text-decoration: none;">${telefono}</a></div>
                </div>
                
                <div class="field">
                  <div class="field-label">🌍 País</div>
                  <div class="field-value">${pais}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">📍 Dirección</div>
                  <div class="field-value">${direccion}</div>
                </div>

                <div class="section-title">🛍️ IDENTIFICACIÓN DEL PRODUCTO/SERVICIO</div>
                
                <div class="field">
                  <div class="field-label">Tipo</div>
                  <div class="field-value">${tipoProducto === 'producto' ? 'Producto' : 'Servicio'}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">💰 Monto</div>
                  <div class="field-value">${monto}</div>
                </div>
                
                <div class="message-box">
                  <div class="field-label">📝 Descripción del Producto/Servicio</div>
                  <div class="field-value" style="margin-top: 10px; white-space: pre-wrap;">${descripcion || 'No proporcionada'}</div>
                </div>

                <div class="section-title">⚠️ DETALLE DEL ${motivo === 'reclamo' ? 'RECLAMO' : 'QUEJA'}</div>
                
                <div class="alert-box">
                  <strong>${motivo === 'reclamo' ? '🔴 RECLAMO' : '🟡 QUEJA'}:</strong>
                  ${motivo === 'reclamo' 
                    ? 'Disconformidad relacionada a los productos o servicios' 
                    : 'Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público'}
                </div>
                
                <div class="message-box">
                  <div class="field-label">Detalle Completo</div>
                  <div class="field-value" style="margin-top: 10px; white-space: pre-wrap;">${detalle}</div>
                </div>
                
                <div class="field">
                  <div class="field-label">🧾 Comprobante de Pago</div>
                  <div class="field-value">${comprobante}</div>
                </div>
                
                <div style="text-align: center; margin-top: 20px; padding: 15px; background: white; border-radius: 8px;">
                  <p style="color: #666; font-size: 12px; margin: 5px 0;">Recibido el ${new Date().toLocaleString('es-PE', { dateStyle: 'full', timeStyle: 'short' })}</p>
                  <p style="color: #999; font-size: 11px; margin: 5px 0;">La empresa dará respuesta en un plazo máximo de 30 días calendario</p>
                </div>
              </div>
              
              <div class="footer">
                <p style="margin: 5px 0;"><strong>KATA ALPACA</strong></p>
                <p style="margin: 5px 0; font-size: 12px;">Libro de Reclamaciones</p>
                <p style="margin: 5px 0; font-size: 12px;">
                  <a href="mailto:${process.env.EMAIL_USER}">${process.env.EMAIL_USER}</a>
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        KATA ALPACA - LIBRO DE RECLAMACIONES
        ${motivo === 'reclamo' ? 'RECLAMO' : 'QUEJA'}
        
        === DATOS DEL CONSUMIDOR ===
        Nombre: ${nombre} ${apellidoPaterno} ${apellidoMaterno}
        Documento: ${tipoDocumento.toUpperCase()} - ${numeroDocumento}
        
        === DATOS DE CONTACTO ===
        Email: ${correo}
        Teléfono: ${telefono}
        País: ${pais}
        Dirección: ${direccion}
        
        === IDENTIFICACIÓN DEL PRODUCTO/SERVICIO ===
        Tipo: ${tipoProducto === 'producto' ? 'Producto' : 'Servicio'}
        Monto: ${monto}
        Descripción: ${descripcion || 'No proporcionada'}
        
        === DETALLE DEL ${motivo === 'reclamo' ? 'RECLAMO' : 'QUEJA'} ===
        ${detalle}
        
        Comprobante: ${comprobante}
        
        Recibido el ${new Date().toLocaleString('es-PE')}
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error al enviar correo:', err);
    return res.status(500).json({ error: 'Error al enviar el correo' });
  }
}