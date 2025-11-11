// src/components/QuienesSomos.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto, Jura, Raleway } from "next/font/google";
import { useTranslations } from "next-intl";

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});
const aboreto = Aboreto({
    subsets: ["latin"],
    weight: ["400"],
  });
const raleway = Raleway({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
  });

export default function QuienesSomos() {
  const t = useTranslations('usPage.aboutUs');

  return (
    <section 
      id="quienes-somos" 
      className="w-full py-15 md:py-40 bg-white"
    >
      <div className="container mx-auto  px-4 md:px-20 ">
        {/* Layout Mobile y Desktop */}
        <div className="flex flex-row md:flex-row gap-4 md:gap-16">
          
          {/* Columna de Imágenes - Izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-[25%] md:w-6/12 flex gap-1 md:gap-7 items-center justify-center"
          >
            {/* Mobile y Desktop: 3 imágenes */}
            <div className="w-1/3 h-[65%] md:h-2/3">
              <Image
                src="/nosotros/textura-alpaca-1.jpg"
                alt="Textura de alpaca gris"
                width={100}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/3 h-[80%] md:h-11/12">
              <Image
                src="/nosotros/textura-alpaca-2.jpg"
                alt="Textura de alpaca beige"
                width={100}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-1/3 h-[65%] md:h-2/3">
              <Image
                src="/nosotros/textura-alpaca-3.jpg"
                alt="Textura de alpaca marrón"
                width={100}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Columna de Contenido - Derecha */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Título */}
            <h2
              className={`
                ${aboreto.className}
                text-xl md:text-[4vw]
                font-thin
                align-middle
                tracking-[0.001em] md:tracking-[0]
                text-[#C85A3F]
                mb-3 md:mb-6
                drop-shadow-[0_3px_1px_rgba(0,0,0,0.3)]
                whitespace-nowrap
              `}
            >
              {t('title')}
            </h2>

            {/* Texto */}
            <div className="space-y-3 md:space-y-4 text-black leading-relaxed">
              <p className={`${raleway.className} text-[0.75rem] md:text-base tracking-tighter md:tracking-tight text-justify`}>
                {t('paragraph1')}
              </p>
              
              <p className={`${raleway.className} text-[0.75rem] md:text-base tracking-tighter md:tracking-tight text-justify`}>
                {t('paragraph2')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}