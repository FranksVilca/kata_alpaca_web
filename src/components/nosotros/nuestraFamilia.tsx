// src/components/NuestraFamilia.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
import { useTranslations } from 'next-intl';

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function NuestraFamilia() {
  const t = useTranslations('usPage.today');

  return (
    <section className="w-full py-8 md:py-16 bg-white overflow-hidden">
      
        {/* VISTA MOBILE */}
        <div className="md:hidden">
        {/* Contenedor de imagen con frame - Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative w-full h-[200px] mb-8 "
        >
          {/* Background de fibras - Ocupa todo el ancho */}
          <div className="absolute inset-0 w-full h-30">
            <Image
              src="/nosotros/cm.webp"
              alt="Fibras de alpaca"
              fill
              className="object-cover"
            />
          </div>

          {/* Frame blanco con imagen - Centrado sobre las fibras */}
          <div className="absolute inset-0 flex items-center justify-center px-4 mt-8">
            <div className="bg-white p-2 shadow-2xl">
              <div className="relative w-[150px] h-[150px]">
                <Image
                  src="/nosotros/ceo1.webp"
                  alt="Eddy Mauricio y Patricia Muñoz"
                  fill
                  className="object-cover"
                />
                {/* Efecto de noise */}
                <div 
                  className="absolute inset-0 pointer-events-none opacity-[0.15]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    mixBlendMode: 'overlay'
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Texto centrado - Mobile (sobre fondo blanco) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="px-6 text-center"
        >
          <p className={`${raleway.className} text-[0.8rem] leading-relaxed text-black`}>
            {t('paragraph')}
          </p>
        </motion.div>
      </div>

      {/* VISTA DESKTOP */}
      <div className="hidden md:block">
        <div className="relative w-full h-[500px] lg:h-[600px]">
          
          {/* Imagen de fibras - Fondo izquierda (debajo de todo) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-0 top-0 w-full translate-y-1/3 h-[60%] z-0"
          >
            <Image
              src="/nosotros/cm.webp"
              alt="Fibras de alpaca"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Caja de texto blanca - Centro izquierda (sobre las fibras) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="absolute left-[8%] top-1/2 -translate-y-1/2 w-[50%] z-10 "
          >
            <div className="bg-white/95 px-8 py-8 lg:py-10 shadow-xl opacity-85">
              <p className={`${raleway.className} text-sm lg:text-lg leading-relaxed text-black text-justify mr-2`}>
                {t('paragraph')}
              </p>
            </div>
          </motion.div>

          {/* Imagen de familia/CEOs - Derecha */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[45%] lg:w-[42%] h-[85%] z-20"
          >
            <div className="relative w-full h-full">
              <Image
                src="/nosotros/ceo1.webp"
                alt="Eddy Mauricio y Patricia Muñoz"
                fill
                className="object-cover object-center"
              />
              {/* Efecto de noise */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.12]"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: 'overlay'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}