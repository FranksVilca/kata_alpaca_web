// src/components/NuestrosPilares.tsx

"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Aboreto, Raleway } from "next/font/google";
import { useTranslations } from "next-intl";

// Reutilizamos las mismas fuentes
const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"], // Usamos peso 400 para los textos de los pilares
});



export default function NuestrosPilares() {
    const t = useTranslations('usPage.ourPillars');
    // Definimos los datos de los pilares para un código más limpio y modular
    const pilaresData = [
      {
        id: 1,
        title: t("p1"),
        src: "/nosotros/alpaca1.jpg", // Asegúrate de tener estas imágenes
      },
      {
        id: 2,
        title: t("p2"),
        src: "/nosotros/alpaca2.jpg",
      },
      {
        id: 3,
        title: t("p3"),
        src: "/nosotros/alpaca3.jpg",
      },
    ];

  return (
    <section 
      id="nuestros-pilares" 
      className="w-full py-16 md:py-20 bg-white"
    >
      <div className="container mx-auto px-10 md:mx-auto ">
        
        {/* Título Principal - Centrado */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`
            ${aboreto.className}
            text-4xl sm:text-5xl md:text-6xl text-center
            text-[#C85A3F]
            mb-10 md:mb-16
            drop-shadow-[0_4px_2px_rgba(0,0,0,0.3)]
          `}
        >
          {t('title')}
        </motion.h2>

        {/* Contenedor de Pilares */}
        <div className="flex justify-center items-start gap-2 md:gap-20 "> 
          {pilaresData.map((pilar, index) => (
            <motion.div
              key={pilar.id}
              className="flex flex-col items-center text-center w-1/3 max-w-[200px]"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Imagen Circular */}
              <div className="w-12 h-12 md:w-25 md:h-25 overflow-hidden rounded-full shadow-lg mb-4">
                <Image
                  src={pilar.src}
                  alt={pilar.title}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Texto del Pilar */}
              <p className={`${raleway.className} text-base md:text-xl text-black font-semibold tracking-wide`}>
                {pilar.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
