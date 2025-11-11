// src/components/BannerNosotros.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Jura, Aboreto } from "next/font/google";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function BannerNosotros() {
  return (
    <section className="relative w-full h-[90vh] md:h-[75vh] flex items-center justify-center  overflow-hidden">
      {/* Imagen de fondo */}
      <Image
        src="/nosotros/nosotros.jpg"
        alt="Paisaje andino con alpacas"
        fill
        priority
        className="object-cover brightness-[0.7]"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/15" />

      {/* Contenido centrado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 text-center text-white px-4
          flex flex-col items-center
          
          // 🔥 MOBILE: Contenido más arriba (20px adicionales)
          -translate-y-35 md:translate-y-0
          
          // Centra verticalmente en desktop
          md:justify-center
        "
      >
        {/* Título principal */}
        <h1
          className={`
            ${jura.className}
            text-4xl sm:text-5xl md:text-8xl lg:text-[8rem] xl:text-[9rem]
            font-light tracking-[0.1em] md:tracking-[0.05em]
            mb-2 md:mb-4 
            drop-shadow-[0_0px_12px_rgba(0,0,0,0.5)]
          `}
        >
          NOSOTROS
        </h1>

        {/* Subtítulo */}
        <p
          className={`
            ${aboreto.className}
            text-[10px] sm:text-sm md:text-base lg:text-lg
            font-light tracking-[0.15em] md:tracking-[0.2em]
            
            // 🔥 MOBILE: Navegación más pegada al subtítulo
            mb-3 md:mb-12
            
            drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]
          `}
        >
          LEGADO TEXTIL, CALIDAD ETERNA
        </p>

        {/* Navegación - Formato "INICIO / QUIEN SOMOS" */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex items-center gap-2 md:gap-4 text-sm md:text-base lg:text-lg"
        >
          <motion.a
            href="/"
            whileHover={{ scale: 1.05 }}
            className={`
              ${aboreto.className}
              tracking-[0.1em] md:tracking-[0.15em]
              hover:underline underline-offset-4
              transition-all duration-200
            `}
          >
            INICIO
          </motion.a>

          <span className="text-white/80">/</span>

          <motion.a
            href="/nosotros"
            whileHover={{ scale: 1.05 }}
            className={`
              ${aboreto.className}
              tracking-[0.1em] md:tracking-[0.15em]
              underline underline-offset-4
              transition-all duration-200
            `}
          >
            QUIEN SOMOS
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}