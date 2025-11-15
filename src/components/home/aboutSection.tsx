import { useTranslations } from "next-intl";
import Image from "next/image";
import { Aboreto, Raleway } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const AboutSection: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <div className="py-8 sm:py-12">
      {/* Título y descripción */}
      <div className="text-center mb-6 sm:mb-8 py-10 sm:py-16 md:py-20 px-4">
        <h1 className={`text-[#BE5103] text-3xl sm:text-4xl md:text-7xl mb-3 sm:mb-4 ${aboreto.className}`}>
          {f("aboutFirst")}
        </h1>
        <p className={`text-black text-sm sm:text-base max-w-2xl mx-auto px-4 ${raleway.className}`}>
          {f("aboutText")}
        </p>
      </div>

      {/* Imágenes */}
      <div className={`flex flex-row gap-0 ${aboreto.className}`}>
        {/* Primera imagen con texto encima */}
        <div className="relative flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-150">
          <Image
            src="/home/2Image.webp"
            alt="Tela"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Texto encima */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-2 sm:px-4">
            <h2 className="text-white text-lg sm:text-xl md:text-3xl font-extralight">
              KATA ALPACA
            </h2>
          </div>
        </div>

        {/* Segunda imagen con texto encima */}
        <div className="relative flex-1 h-[300px] sm:h-[400px] md:h-[500px] lg:h-150">
          <Image
            src="/home/3Image.webp"
            alt="Chompa Azul"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Texto encima */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2 sm:px-4">
            <h2 className="text-white text-lg sm:text-xl md:text-3xl font-extralight">
              A L P A K I R A
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl underline mt-1 sm:mt-2 text-[#FFBC8C]">
              {f("aboutImg")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
