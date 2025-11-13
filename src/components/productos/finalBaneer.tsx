import { useTranslations } from "next-intl";
import Image from "next/image";

const FinalBanner: React.FC = () => {
  const f = useTranslations("Product");

  return (
    <div className="hidden md:flex relative w-full h-[600px] items-center justify-center text-center mb-60">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/productos/reservaAuquenidos.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="z-10 border px-18 bg-[#D9D9D9D4] border-[#00000040] py-20 w-3/4 mx-70">
        <span className="text-xl text-black border-[#BE5103] mb-4 drop-shadow-md uppercase">
          {f("endText1")}
        </span>
        <span className="text-xl text-[#BE5103]"> KNOW HOW </span>
        <span className="text-xl text-black mb-4 drop-shadow-md uppercase">
          {f("endText2")}
        </span>
      </div>
    </div>
  );
};
export default FinalBanner;
