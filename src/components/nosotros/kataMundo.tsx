// src/components/KataParaElMundo.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto, Raleway, Jura } from "next/font/google";
import { useTranslations } from "next-intl";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function KataParaElMundo() {
  const t = useTranslations('usPage.world');

  const stats = [
    {
      icon: "/nosotros/icons/tag.svg",
      label: t('stat1Label'),
      value: t('stat1Value'),
    },
    {
      icon: "/nosotros/icons/globe.svg",
      label: t('stat2Label'),
      value: t('stat2Value'),
    },
    {
      icon: "/nosotros/icons/globe.svg",
      label: t('stat3Label'),
      value: t('stat3Value'),
    },
    {
      icon: "/nosotros/icons/people.svg",
      label: t('stat4Label'),
      value: t('stat4Value'),
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-12 md:py-20 overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/nosotros/walpaca.webp"
          alt="Fondo naturaleza"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        
        {/* Títulos */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2
            className={`
              ${aboreto.className}
              text-3xl md:text-5xl lg:text-6xl xl:text-7xl
              font-normal
              tracking-[0.01em]
              text-white
              mb-2 md:mb-4
            `}
          >
            {t('title')}
          </h2>
          
          <p
            className={`
              ${aboreto.className}
              text-sm md:text-3xl 
              md:font-bold
              tracking-[0.05em]
              text-white/70
            `}
          >
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Tarjetas de estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 flex flex-col items-center justify-between min-h-[220px] md:min-h-[280px] shadow-lg"
            >
              {/* Icono */}
              <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mt-4 md:mt-6 mb-3 md:mb-4 flex items-center justify-center">
                <Image
                  src={stat.icon}
                  alt={stat.label}
                  width={48}
                  height={48}
                  className="object-contain md:w-16 md:h-16"
                />
              </div>

              {/* Texto descriptivo */}
              <p
                className={`
                  ${raleway.className}
                  text-xs md:text-sm lg:text-base
                  font-light
                  text-gray-700
                  text-center
                  mb-2 md:mb-6
                  flex-grow
                  flex items-center
                  leading-tight
                `}
              >
                {stat.label}
              </p>

              {/* Número */}
              <div
                className={`
                  ${jura.className}
                  text-3xl md:text-4xl lg:text-5xl
                  font-bold
                  text-gray-900
                `}
              >
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}