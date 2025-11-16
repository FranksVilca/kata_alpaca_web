// src/components/ProcesosBanner.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Jura } from "next/font/google";
import { useTranslations } from "next-intl";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProcesosBanner() {
  const t = useTranslations('Process.banner');

  return (
    <section className="relative w-full h-[230px] md:h-[450px] flex items-center justify-center overflow-hidden">
      {/* GIF de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/procesos/textil.gif"
          alt="Proceso de tejido"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Overlay negro 80% */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      {/* Contenido */}
      <motion.div
        className="relative z-20 md:z-20 px-6 md:px-12 max-w-4xl mx-auto text-center"
      >
        <h1
          className={`
            ${jura.className}
            text-xl md:text-4xl 
            font-medium
            text-[#FFBC8C]
            leading-normal md:leading-relaxed
          `}
        >
          {t('title')}
        </h1>
      </motion.div>
    </section>
  );
}