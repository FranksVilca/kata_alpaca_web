import { useTranslations } from "next-intl";
import Image from "next/image";

const HeroSections: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/1Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="z-10 text-white px-4 sm:px-6 md:px-8">
        <div className="text-base sm:text-lg md:text-2xl mb-3 sm:mb-4 drop-shadow-md">
          {f("first")}
          <span className="text-[#DD9D6F]"> ALPACA</span>
        </div>
        <p className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
          {f("second")}
        </p>
      </div>
    </section>
  );
};

export default HeroSections;
