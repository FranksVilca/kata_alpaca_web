// src/components/NuestraHistoria.tsx

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

export default function programming() {
  const t = useTranslations('Process.w3');

  return (
    <section className="w-full py-4 md:py-20 bg-white">
      <div className="mx-0 px-0 md:px-0 md:mr-[60px] ">

        {/*  VISTA WEB (DESKTOP ONLY)        */}
        <div className="hidden md:block">

          {/* Desktop: Imágenes y contenido lado a lado */}
          <div className="flex flex-row gap-20 md:h-[645px]">

            {/* Imágenes (derecha) */}
            <motion.div
              className="flex-1 relative md:w-[665px]"
            >
              <div className="absolute top-0 left-0 w-[392px] h-[493px] z-10">
                <Image
                  src="/procesos/3img.webp"
                  alt="Fibra"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              <div className="absolute bottom-0 right-0 w-[421px] h-[510px] z-20">
                <Image
                  src="/procesos/4img.webp"
                  alt="Modelo"
                  fill
                  className="object-cover object-[center_20%]"
                />
              </div>
            </motion.div>

            {/* Texto (derecha) */}
            <motion.div
              className="flex-1 flex flex-col justify-start mt-20 "
            >
              <h2
                className={`
                  ${aboreto.className}
                  text-[60px] font-thin
                  text-right
                  leading-15
                  tracking-[0.01rem]
                  text-[#C85A3F]
                  mb-0
                  drop-shadow-[0_6px_2px_rgba(0,0,0,0.3)]
                `}
              >
                {t("title")}
              </h2>

              <h3
                className={`
                  ${aboreto.className}
                  text-[36px] font-extrabold
                  text-right
                  tracking-[0.01rem]
                  text-[#000000]
                  mb-20
                  drop-shadow-[0_3px_1px_rgba(0,0,0,0.3)]
                `}
              >
                {t("subtitle")}
              </h3>

              <div className="space-y-4 text-black leading-relaxed">
                <p className={`${raleway.className} text-[26px] tracking-normal text-justify leading-7`}>
                  {t("paragraph")}
                </p>
              </div>
            </motion.div>

          </div>

        </div>

        {/*  VISTA MOBILE (MOBILE ONLY)      */}
        <div className="md:hidden">

          {/* Título con líneas decorativas */}
          <div className="flex items-center gap-4 mb-15 px-0">
            <div className="flex-1 h-px bg-gray-300"></div>
            <h2
              className={`
                ${aboreto.className}
                text-[16px]
                font-thin
                text-[#C85A3F]
                text-center
                whitespace-nowrap
                drop-shadow-[0_8px_2px_rgba(0,0,0,0.3)]
              `}
            >
              {t("title")}
            </h2>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          {/* Icono de llama centrado arriba */}
          <div className="relative z-10 w-12 h-12 mb-0 justify-center flex mx-auto">
            <Image
              src="/procesos/llama.svg"
              alt="Llama"
              width={64}
              height={64}
              className="object-contain"
            />
          </div>


          {/* Contenedor con fondo */}
          <div className="relative w-full h-[408px] flex flex-col items-center justify-center px-14">

            {/* Imagen de fondo */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/procesos/5img.webp"
                alt="Fondo tejido"
                fill
                className="object-cover"
              />
            </div>



            {/* Subtítulo centrado */}
            <h3
              className={`
                ${aboreto.className}
                relative z-10
                text-[18px]
                font-extrabold
                tracking-tighter
                text-center
                text-[#000000]
                mt-8
                mb-6
                drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]
              `}
            >
              {t("subtitle")}
            </h3>

            {/* Cuadrado blanco redondeado con párrafo */}
            <div className="relative z-10 bg-white rounded-3xl px-6 py-8 shadow-lg max-w-md">
              <p className={`${raleway.className} text-[13px] text-black text-justify leading-relaxed`}>
                {t("paragraph")}
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}