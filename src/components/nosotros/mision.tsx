// src/components/Mision.tsx

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

export default function Mision() {
  const t = useTranslations('usPage.mission');

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="container ml-20 px-4 md:px-8">
        
        <div className="flex flex-row md:flex-row gap-8 md:gap-12 lg:gap-16">
          

          {/* Columna de Contenido - Abajo en mobile, Izquierda en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full mt-20 md:mt-2 md:flex-1 flex flex-col justify-center md:order-1"
          >
            {/* Título */}
            <h2
              className={`
                ${aboreto.className}
                text-4xl md:text-5xl lg:text-6xl
                font-normal
                tracking-[0.1em]
                text-[#BE5103]
                mb-6 md:mb-8
              `}
            >
              {t('title')}
            </h2>

            {/* Texto */}
            <p 
              className={`
                ${raleway.className} 
                text-sm md:text-base lg:text-lg
                font-light
                leading-tight md:leading-loose
                text-gray-800
                text-justify
              `}
            >
              {t('paragraph')}
            </p>
          </motion.div>

        {/* Columna de Imagen - Arriba en mobile, Derecha en desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full md:flex-1 relative h-[340px] md:h-[400px] md:order-2"
          >
            <Image
              src="/nosotros/manosAlpaca.jpg"
              alt="Manos trabajando con fibra de alpaca"
              fill
              className="object-cover object-top md:object-center"
            />
          </motion.div>

          
        </div>
      </div>
    </section>
  );
}