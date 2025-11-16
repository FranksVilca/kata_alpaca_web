// src/components/DelDisenoALaPrenda.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto, Jura } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function DelDisenoALaPrenda() {
  const t = useTranslations("Process.w2");

  return (
    <section className="w-full py-6 md:py-20 bg-white">
      <div className="w-full px-0">

        {/* Título con líneas (solo mobile) */}
        <motion.div

          className="flex items-center gap-4 mb-4 px-0 md:hidden"
        >
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2
            className={`
              ${aboreto.className}
              text-[16px] md:text-2xl 
              font-thin
              text-[#C85A3F]
              text-center
              tracking-tighter
              whitespace-nowrap
              drop-shadow-[0_8px_2px_rgba(0,0,0,0.3)]
            `}
          >
            {t("title")}
          </h2>
          <div className="flex-1 h-px bg-gray-300"></div>
        </motion.div>

        {/* Título Desktop */}
        <motion.h2
          className={`
            ${aboreto.className}
            hidden md:block
            md:text-[3.5vw]
            md:font-thin
            md:tracking-[0.01rem]
            md:text-[#C85A3F]
            md:mb-8
            md:text-center
            md:drop-shadow-[0_4px_1px_rgba(0,0,0,0.2)]  

          `}
        >
          {t("title")}
        </motion.h2>

        {/* Subtítulo — solo MOBILE (arriba, color negro) */}
        <motion.p
          className={`
            ${jura.className}
            block md:hidden
            text-[14px]
            font-normal
            text-[#000000]
            text-center
            px-4
            mb-10
          `}
        >
          {t("text")}
        </motion.p>



        {/* IMÁGENES */}
        <div
          className="
            relative 
            h-[280px] 
            mb-2 
            md:flex md:flex-col md:gap-6 
            md:h-auto md:mb-12 md:max-w-full
          "
        >

          {/* Imagen 1 */}
          <motion.div
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.3 }}
            // viewport={{ once: true }}
            className="
              absolute 
              left-0 
              w-[70%] h-[150px] 
              z-10 
               md:mt-0
              md:relative md:w-[78%] md:h-[300px]
            "
          >
            <Image
              src="/procesos/1img.webp"
              alt="Proceso de diseño"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>

          {/* Imagen 2 */}
          <motion.div
            className="
              absolute 
              bottom-0 right-0 
              w-[70%] h-[120px] 
              z-20 
              drop-shadow-[-8px_-8px_0px_rgba(255,255,255,1)]
              md:relative md:self-end md:w-[78%] md:h-[300px] md:drop-shadow-none
            "
          >
            <Image
              src="/procesos/2img.webp"
              alt="Telas y productos"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </motion.div>

        </div>

        {/* Subtítulo — solo DESKTOP (abajo, color C85A3F) */}
        <motion.p

          className={`
            ${jura.className}
            hidden md:block
            md:text-4xl
            md:font-medium
            md:text-[#C85A3F]
            text-center
            md:px-0
            md:mt-12 md:max-w-5xl md:mx-auto
            md:drop-shadow-[0_3px_0px_rgba(0,0,0,0.3)]
          `}
        >
          {t("text")}
        </motion.p>

      </div>
    </section>
  );
}
