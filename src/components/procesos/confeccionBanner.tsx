// src/components/ConfeccionBanner.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ConfeccionBanner() {
  const t = useTranslations('Process.confection');

  return (
    <section className="w-full overflow-x-hidden bg-white mt-10">

      {/* Imagen sin márgenes */}
      <div className="relative w-full h-[70px] md:h-[200px]">
        <Image
          src="/procesos/8img.webp"
          alt="Confección artesanal"
          fill
          className="object-cover"
        />
      </div>

      {/* Título */}
      <motion.div
        className="py-6 md:py-16 px-2 md:px-0"
      >
        <h2
          className={`
            ${aboreto.className}
            text-[14px] md:text-[48px]
            font-thin
            text-center
            text-[#C85A3F]
            drop-shadow-[0_3px_1px_rgba(0,0,0,0.3)]
          `}
        >
          {t('title')}
        </h2>
      </motion.div>

    </section>
  );
}