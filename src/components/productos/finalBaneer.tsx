import { useTranslations } from "next-intl";
import Image from "next/image";
import { Aboreto } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const FinalBanner: React.FC = () => {
  const f = useTranslations("Product");

  return (
    <div className="hidden md:flex relative w-full h-[600px] items-center justify-center text-center mb-40 mt-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/productos/reservaAuquenidos.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div
        className={`z-10 border px-18 bg-[#D9D9D9D4] border-[#00000040] py-20 w-3/4 mx-70 ${aboreto.className}`}
      >
        <span className="text-xl text-[#743102] mb-4 drop-shadow-md uppercase font-bold">
          {f("endText1")}
        </span>
        <span className="text-xl text-[#BE5103] font-bold"> KNOW HOW </span>
        <span className="text-xl text-[#743102] mb-4 drop-shadow-md uppercase font-bold">
          {f("endText2")}
        </span>
      </div>
    </div>
  );
};
export default FinalBanner;
