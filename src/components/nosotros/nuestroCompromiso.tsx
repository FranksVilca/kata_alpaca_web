// src/components/NuestroCompromiso.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto, Raleway } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

// Componente reutilizable para cuadrados
const DecoSquare = () => (
  <div className="w-[var(--Mdeco-ancho)] md:w-[var(--deco-ancho)] h-[var(--Mdeco-alto)] md:h-[var(--deco-alto)] bg-white" />
);

export default function NuestroCompromiso() {
  const t = useTranslations('usPage.commitment');

  const styleVars = {
    '--deco-ancho': '20%',
    '--deco-alto': '40px',
    '--Mdeco-ancho': '20%',
    '--Mdeco-alto': '25px',
    '--Mpadding-lateral': '3%',
    '--padding-lateral': '3%',
  } as React.CSSProperties;

  return (
    <section 
      className="relative w-full h-[300px] md:h-[400px] overflow-hidden mb-8 md:mb-20"
      style={styleVars}
    >
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nosotros/compromiso.webp"
          alt="Fondo de fibra de alpaca"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Cuadrados superiores */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between px-[var(--padding-lateral)]">
        <DecoSquare />
        <DecoSquare />
        <DecoSquare />
      </div>

      {/* Contenedor central */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white/90  px-8 py-4 md:px-8 md:py-8  max-w-7xl w-full"
        >
          <h2
            className={`
              ${aboreto.className}
              text-2xl md:text-[3.5vw] 
              font-normal
              tracking-[0.05em] md:tracking-[0.05em]
              text-[#C85A3F]
              mb-1 md:mb-5
              text-center
              drop-shadow-[0_3px_1px_rgba(0,0,0,0.3)]
            `}
          >
            {t('title')}
          </h2>

          <p 
            className={`
              ${raleway.className} 
              text-[10px] md:text-[20px] 
              font-light
              leading-relaxed md:leading-tight
              text-gray-800
              text-center
            `}
          >
            {t('paragraph')}
          </p>
        </motion.div>
      </div>

      {/* Cuadrados inferiores */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-between px-[var(--padding-lateral)]">
        <DecoSquare />
        <DecoSquare />
        <DecoSquare />
      </div>
    </section>
  );
}