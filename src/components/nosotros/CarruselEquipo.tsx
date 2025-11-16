// src/components/CarruselEquipo.tsx

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  {
    src: "/nosotros/carousel/image1.webp",
    alt: "Stand Kata Alpaca 1",
  },
  {
    src: "/nosotros/carousel/image2.webp",
    alt: "Stand Kata Alpaca 2",
  },
  {
    src: "/nosotros/carousel/image3.webp",
    alt: "Stand Kata Alpaca 3",
  },
  {
    src: "/nosotros/carousel/image4.webp",
    alt: "Stand Kata Alpaca 4",
  },
];

export default function CarruselEquipo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Autoplay cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="w-full py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-4">
        
        {/* Contenedor del carrusel */}
        <div className="relative w-full aspect-16/10 md:aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-lg">
          
          {/* Imágenes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Indicadores (Dots) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all
                  ${currentIndex === index 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/75'
                  }
                `}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}