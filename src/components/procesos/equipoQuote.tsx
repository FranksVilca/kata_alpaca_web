// src/components/EquipoQuote.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function EquipoQuote() {
  const t = useTranslations('Process.w6');

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* 3 Imágenes sin gaps */}
      <div className="grid grid-cols-3 md:gap-0 gap-0 w-full ">

        <div className="relative w-[100%] h-[190px] md:h-[670px]">
          <Image
            src="/procesos/9img.webp"
            alt="Equipo trabajando 1"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[190px] md:h-[670px]">
          <Image
            src="/procesos/10img.webp"
            alt="Equipo trabajando 2"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative w-full h-[190px] md:h-[670px]">
          <Image
            src="/procesos/11img.webp"
            alt="Equipo trabajando 3"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>


      </div>

      {/* Overlay oscuro sobre las imágenes */}

      {/* Texto centrado */}
      <motion.div
        className="absolute inset-0 z-20 flex items-end justify-center px-2 md:px-30 py-4 md:py-10 opacity-80"
      >
        <p
          className={`
            ${aboreto.className}
            text-[11px] md:text-[32px] 
            font-normal
            text-center
            text-white
            leading-relaxed
          `}
        >
          {t('text')}
        </p>
      </motion.div>

    </section>
  );
}