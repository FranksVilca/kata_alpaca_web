// src/components/Vision.tsx

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

export default function Vision() {
  const t = useTranslations('usPage.vission');

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="w-full md:pl-0">
        
        <div className="flex flex-row md:flex-row gap-6 md:gap-12 lg:gap-16 sm:min-h-[400px]">
          
          {/* Columna de Imagen - Abajo izquierda en mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-[180px] mr-auto relative h-[280px] md:w-full md:flex-1 md:h-[400px] md:order-1 md:mr-0 self-center "
          >
            <Image
              src="/nosotros/vision.webp"
              alt="Manos trabajando con fibra de alpaca"
              fill
              className="object-cover object-bottom md:object-center"
            />
            <div className="absolute inset-0 bg-black/30"></div>

          </motion.div>
          {/* Columna de Contenido - Arriba derecha en mobile */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-[calc(100%-180px-1.5rem)] px-5 md:w-full md:flex-1 flex flex-col justify-center md:order-2 md:px-0 md:mr-20"
          >
            <h2
              className={`
                ${aboreto.className}
                text-3xl md:text-[4vw] 
                font-normal
                tracking-[0.1em]
                text-[#BE5103]
                drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]
                mb-4 md:mb-8
              `}
            >
              {t('title')}
            </h2>

            <p 
              className={`
                ${raleway.className} 
                text-[0.85rem] md:text-lg
                font-light
                leading-tight md:leading-tight
                text-gray-800
                text-justify
              `}
            >
              {t('paragraph')}
            </p>
          </motion.div>

          
          
        </div>
      </div>
    </section>
  );
}