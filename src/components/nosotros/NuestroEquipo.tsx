// src/components/NuestroEquipo.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Jura, Raleway } from "next/font/google";
import { useTranslations } from "next-intl";

const jura = Jura({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export default function NuestroEquipo() {
  const t = useTranslations('usPage.team');

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="w-full px-4 md:px-30">
        
        {/* Imágenes */}
        <div className="flex flex-row md:flex-row gap-4 md:gap-12 mb-8 md:mb-40">
          
          {/* Columna izquierda - Logo + Imagen 1 */}
          <div className="flex-1 flex flex-col gap-4 md:gap-8">
            {/* Logo - Solo visible en desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="hidden md:block w-full md:mt-[200px] md:mb-[100px] mx-auto "
            >
              <Image
                src="/nosotros/icons/kata.svg"
                alt="Kata Alpaca Logo"
                width={420}
                height={360}
                className="object-contain mx-auto"
              />
            </motion.div>

            {/* Imagen 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full h-[280px] md:h-[690px] md:drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]"
            >
              <Image
                src="/nosotros/mw.webp"
                alt="Stand Kata Alpaca"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* Columna derecha - Imagen 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex-1 relative h-[280px] md:h-[800px] md:mt-24 md:drop-shadow-[4px_4px_4px_rgba(0,0,0,0.5)]"
          >
            <Image
              src="/nosotros/pw.webp"
              alt="Equipo Kata Alpaca"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* Cita */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center px-2 md:px-0"
        >
          <p
            className={`
              ${jura.className}
              text-base md:text-[26px]
              font-normal md:font-medium
              tracking-[0.002em] md:tracking-[0.05em]
              text-black md:text-[#A4561E]
              md:drop-shadow-[0_2px_1px_rgba(0,0,0,0.2)]
              leading-tight md:leading-relaxed
            `}
          >
            {t('quote')}
          </p>
        </motion.div>

      </div>
    </section>
  );
}