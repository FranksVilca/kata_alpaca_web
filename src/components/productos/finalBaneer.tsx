import { useTranslations } from "next-intl";
import Image from "next/image";

const FinalBanner: React.FC = () => {
  const f = useTranslations("Product");

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center mb-20 sm:mb-40 md:mb-60">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/productos/reservaAuquenidos.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="z-10 border px-4 sm:px-14 md:px-18 bg-[#D9D9D9D4] border-[#00000040] md:py-20 sm:py-40 w-3/4 mx-70">
        <span className="text-base sm:text-lg md:text-xl text-black border-[#BE5103] mb-3 sm:mb-4 drop-shadow-md uppercase">
          {f("endText1")}
        </span>
        <span className="text-base sm:text-lg md:text-xl text-[#BE5103]"> KNOW HOW </span>
        <span className="text-base sm:text-lg md:text-xl text-black mb-3 sm:mb-4 drop-shadow-md uppercase">
          {f("endText2")}
        </span>
      </div>
    </div>
  );
};
export default FinalBanner;
