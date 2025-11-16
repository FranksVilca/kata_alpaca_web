"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Aboreto } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const Garments: React.FC = () => {
  const f = useTranslations("Home");
  const [centerScale, setCenterScale] = useState(1);
  const [isClient, setIsClient] = useState(false);
  const centerImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Confirmar que estamos en el cliente
    setIsClient(true);

    const handleScroll = () => {
      if (window.innerWidth >= 768) return; // Solo en móvil

      if (centerImageRef.current) {
        const rect = centerImageRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementCenter = rect.top + rect.height / 2;
        const viewportCenter = windowHeight / 2;

        // Calcular distancia del centro
        const distance = Math.abs(elementCenter - viewportCenter);
        const maxDistance = windowHeight / 2;

        // Escala de 1 a 1.15 cuando está en el centro
        const scale = Math.max(1, 1.15 - (distance / maxDistance) * 0.15);
        setCenterScale(scale);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="py-16 sm:py-24 md:py-40">
      <div className="relative mb-6 sm:mb-8 px-4">
        <div
          className={`text-3xl sm:text-4xl md:text-6xl text-center text-[#BE5103] tracking-[0.2em] sm:tracking-[0.3em] relative z-10 ${aboreto.className}`}
        >
          {f("garmentsTitle")}
        </div>
        <div className="absolute top-1/2 left-0 right-0 h-[4px] bg-[#fff] z-10 -translate-y-1/2"></div>
      </div>

      <div
        className={`flex justify-center items-center w-full px-2 sm:px-4 ${aboreto.className}`}
      >
        {/* Cardigan */}
        <div className="relative flex-1 h-[280px] sm:h-[350px] md:h-120 overflow-visible group">
          <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-120 group-hover:z-20">
            <Image
              src="/home/6Image.webp"
              alt="Cardigan"
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 33vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center pb-4 sm:pb-8">
              <p className="text-white text-xs sm:text-base md:text-xl tracking-[0.2em] sm:tracking-[0.3em] font-light">
                CARDIGAN
              </p>
            </div>
          </div>
        </div>

        {/* Poncho */}
        <div
          ref={centerImageRef}
          className="relative flex-1 h-[350px] sm:h-[420px] md:h-160 overflow-visible group z-10 transition-transform duration-300 md:transition-none"
          style={
            isClient && window.innerWidth < 768
              ? { transform: `scale(${centerScale})` }
              : undefined
          }
        >
          <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-120 group-hover:z-20">
            <Image
              src="/home/7Image.webp"
              alt="Poncho Calado Cocos"
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 34vw, 34vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center pb-4 sm:pb-8">
              <p className="text-white text-xs sm:text-base md:text-xl tracking-[0.2em] sm:tracking-[0.3em] text-center font-light leading-tight">
                PONCHO
                <br />
                CALADO COCOS
              </p>
            </div>
          </div>
        </div>

        {/* Sweter */}
        <div className="relative flex-1 h-[280px] sm:h-[350px] md:h-120 overflow-visible group">
          <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-120 group-hover:z-20">
            <Image
              src="/home/8Image.webp"
              alt="Sweter"
              fill
              className="w-full h-full object-cover"
              sizes="(max-width: 768px) 33vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center pb-4 sm:pb-8">
              <p className="text-white text-xs sm:text-base md:text-xl tracking-[0.2em] sm:tracking-[0.3em] font-light">
                SWETER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garments;
