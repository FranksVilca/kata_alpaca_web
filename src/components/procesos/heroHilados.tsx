// src/components/process/heroHilados.tsx

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

export default function Yarn() {
  const t = useTranslations('Process.w4');

  return (
    <section className="w-full py-4 md:py-20 bg-white">
      <div className="mx-0 px-0">

        {/*  VISTA WEB (DESKTOP ONLY)        */}
        <div className="hidden md:block md:px-0 md:ml-[80px] md:h-[658px]">

          {/* Desktop: Imágenes y contenido lado a lado */}
          <div className="flex flex-row gap-20">

            {/* Texto (derecha) */}
            <motion.div
              className="w-full md:w-[605px] flex flex-col justify-start mt-20"
            >
              <h2
                className={`
                  ${aboreto.className}
                  text-[60px] font-thin
                  leading-10
                  tracking-[0.01rem]
                  text-[#C85A3F]
                  mb-20
                  drop-shadow-[0_3px_1px_rgba(0,0,0,0.3)]
                `}
              >
                {t("title")}
              </h2>

              <div className="space-y-4 text-black leading-relaxed">
                <p className={`${raleway.className} text-[26px] tracking-normal text-justify leading-7`}>
                  {t("paragraph")}
                </p>
              </div>
            </motion.div>

            {/* Imágenes (derecha) */}
            <motion.div
              className="flex-1 relative h-[655px]"
            >
              <div className="absolute top-0 right-0 w-[392px] h-[488px] z-10">
                <Image
                  src="/procesos/7img.webp"
                  alt="Fibra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="absolute bottom-0 left-0 w-[421px] h-[510px] z-20">
                <Image
                  src="/procesos/6img.webp"
                  alt="Modelo"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </motion.div>

          </div>

        </div>

        {/*  VISTA MOBILE (MOBILE ONLY)      */}
        <div className="md:hidden">
          
          {/* Línea decorativa */}
          <div className="w-full h-px bg-gray-300 mb-6 "></div>

          {/* 3 Imágenes lado a lado sin gaps */}
          <div className="grid grid-cols-3 gap-0 w-full mb-8">
            <div className="relative w-full h-[180px]">
              <Image
                src="/procesos/4img.webp"
                alt="Imagen 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[180px]">
              <Image
                src="/procesos/6img.webp"
                alt="Imagen 2"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[180px]">
              <Image
                src="/procesos/7img.webp"
                alt="Imagen 3"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Título centrado */}
          <h2
            className={`
              ${aboreto.className}
              text-[15px]
              font-thin
              text-center
              text-[#C85A3F]
              mb-6
              drop-shadow-[0_2px_1px_rgba(0,0,0,0.2)]
            `}
          >
            {t("title")}
          </h2>

          {/* Párrafo centrado */}
          <p
            className={`
              ${raleway.className}
              text-[12px]
              text-justify
              text-black
              leading-relaxed
              px-12
            `}
          >
            {t("paragraph")}
          </p>

        </div>

      </div>
    </section>
  );
}