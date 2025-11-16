// src/components/closezanner.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function CloseBanner() {
  const t = useTranslations('Process.w6');

  return (
    <section className="w-full overflow-hidden bg-white">

      {/* VISTA MOBILE */}
      <div className="md:hidden mt-10 mb-10 relative flex flex-row w-full h-[180px]">

        {/* Texto */}
        <motion.div
          className="flex-1 ml-2 flex justify-center items-center shadow-[-20px_0px_10px_rgba(0,0,0,0.2)] ]
 "
        >
          <p
            className={`
              ${aboreto.className}
              text-[12px]
              font-normal
              text-[#BE5103]
              max-w-[125px]
              leading-tight
              drop-shadow-[0_2px_2px_rgba(0,0,0,0.2)]
            `}
          >
            {t('text')}
          </p>
        </motion.div>
        {/* Imagen derecha */}
        <div className="flex-1 relative h-full">

          <Image
            src="/procesos/12img.webp"
            alt="Control de calidad"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

        </div>


      </div>

      {/* VISTA DESKTOP */}
      <div className="mt-30 mb-60 hidden md:flex md:flex-row md:items-center md:h-[480px]">

        {/* Texto a la izquierda */}
        <motion.div
          className="flex-1 flex items-center justify-start pl-25"
        >
          <p
            className={`
              ${aboreto.className}
              text-[30px]
              font-extrabold
              text-[#BE5103]
              max-w-[560px]
              leading-relaxed
              drop-shadow-[3px_0px_1px_rgba(0,0,0,0.2)]
            `}
          >
            {t('text')}
          </p>
        </motion.div>

        {/* Imagen a la derecha */}
        <div className="flex-1 relative h-full">
          <Image
            src="/procesos/12img.webp"
            alt="Control de calidad"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>

        </div>

      </div>

    </section>
  );
}