import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Solo permitir en desarrollo o con una clave secreta
  const isAllowed =
    process.env.NODE_ENV === "development" || req.query.secret === "kata2024";

  if (!isAllowed) {
    return res.status(403).json({ error: "Forbidden" });
  }

  return res.status(200).json({
    NODE_ENV: process.env.NODE_ENV,
    EMAIL_USER: process.env.EMAIL_USER ? "✅ CONFIGURADO" : "❌ FALTA",
    EMAIL_PASS: process.env.EMAIL_PASS ? "✅ CONFIGURADO" : "❌ FALTA",
    EMAIL_USER_BOOK: process.env.EMAIL_USER_BOOK
      ? "✅ CONFIGURADO"
      : "❌ FALTA",
    EMAIL_PASS_BOOK: process.env.EMAIL_PASS_BOOK
      ? "✅ CONFIGURADO"
      : "❌ FALTA",
    // NO mostramos los valores reales por seguridad
  });
}
