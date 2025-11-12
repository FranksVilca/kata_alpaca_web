// src/components/BannerNosotros.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Jura, Aboreto } from "next/font/google";
import { useTranslations } from 'next-intl';


const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export default function BannerNosotros() {
  const t = useTranslations('usPage.banner');

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
      <div className="absolute inset-0 md:bg-black/15 opacity-0 brightness-125   " />

      {/* Overlay fade out claro */}
      <div className="
        absolute inset-x-0 
        bottom-[-10px]  
        h-[200px]
        bg-gradient-to-t
        from-white
        to-transparent 
        z-10 
        md:hidden 
        "
        />
      {/* Contenido centrado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 text-center text-white px-4
          flex flex-col items-center
          
          -translate-y-35 
          md:translate-y-0
          md:justify-center
        "
      >
        {/* Título principal */}
        <h1
          className={`
            ${jura.className}
            text-[2.8rem]
            sm:text-5xl 
            md:text-9xl 
            lg:text-[10rem] 
            xl:text-[9rem]
            font-light 
            mb-3 md:mb-12
            tracking-[0.01em] md:tracking-[0.05em]
            drop-shadow-[0_3px_0px_rgba(0,0,0,0.8)]
            md:drop-shadow-[0_8px_0px_rgba(0,0,0,0.2)]
            `}
        >
          {t('title')}
        </h1>

        {/* Subtítulo */}
        <p
          className={`
            ${aboreto.className}
            text-[15px] sm:text-sm md:text-base lg:text-lg
            font-light tracking-[0.05em] md:tracking-[0.05em]
            

            font-
            // 🔥 MOBILE: Navegación más pegada al subtítulo
            mb-3 md:mb-12
            opacity-90 md:opacity-100
            drop-shadow-[0_0px_4px_rgba(0,0,0,0.5)]
          `}
        >
          {t('subtitle')}
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
            {t('home')}
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
            {t('aboutUs')}
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}