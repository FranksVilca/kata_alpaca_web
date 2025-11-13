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

export default function NuestraHistoria() {
  const t = useTranslations('usPage.history');

  return (
    <section className="w-full py-8 md:py-20 bg-white">
      <div className="mx-0 px-4 md:px-0 md:ml-30 ">
        
        {/* MOBILE: Imágenes arriba */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden relative w-full h-[400px] mb-8"
        >
          {/* Imagen 1 - Fibra (arriba derecha) */}
          <div className="absolute top-0 right-0 w-[80%] h-[80%] z-10">
            <Image
              src="/nosotros/fibra.webp"
              alt="Fibra de alpaca"
              fill
              className="object-cover"
            />
          </div>
          
          {/* Imagen 2 - Manos tejiendo (abajo izquierda) */}
          <div className="absolute bottom-0 left-0 w-[60%] h-[70%] z-20">
            <Image
              src="/nosotros/fabricacionManos.webp"
              alt="Proceso de tejido"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Layout Principal */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-15 ">
          
          {/* Columna de Contenido - Izquierda en Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Título */}
            <h2
              className={`
                ${aboreto.className}
                text-2xl md:text-[3.5vw] 
                font-thin
                tracking-[0.05em] md:tracking-[0.01rem]
                text-[#C85A3F]
                mb-6 md:mb-8
                drop-shadow-[0_3px_1px_rgba(0,0,0,0.3)]
              `}
            >
              {t('title')}
            </h2>

            {/* Texto */}
            <div className="space-y-4 md:space-y-4 text-black leading-relaxed">
              <p className={`${raleway.className} text-[0.85rem] md:text-base lg:text-lg tracking-tight text-justify`}>
                {t('paragraph1')}
              </p>
              
              <p className={`${raleway.className} text-[0.85rem] md:text-base lg:text-lg tracking-tight text-justify`}>
                {t('paragraph2')}
              </p>
            </div>
          </motion.div>

          {/* Columna de Imágenes - Derecha en Desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden md:block flex-1 relative h-[45rem] "
          >
            {/* Imagen 1 - Fibra (arriba derecha) */}
            <div className="absolute top-0 right-0 w-[80%] h-[80%] z-10 ">
              <Image
                src="/nosotros/fibra.webp"
                alt="Fibra de alpaca"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Imagen 2 - Manos tejiendo (abajo izquierda) */}
            <div className="absolute bottom-0 left-0 w-[70%] h-[70%] z-20">
              <Image
                src="/nosotros/fabricacionManos.webp"
                alt="Proceso de tejido"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}