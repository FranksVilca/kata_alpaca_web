import { useTranslations } from "next-intl";
import Image from "next/image";
import { Aboreto } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const Notice: React.FC = () => {
  const f = useTranslations("Header");

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center mb-20 sm:mb-40 md:mb-60">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/9Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className={`z-10 text-white px-4 sm:px-14 md:px-18 bg-black/70 md:py-6 sm:py-4 ${aboreto.className}`}>
        <div className="text-xl sm:text-2xl md:text-3xl font-extralight mb-3 sm:mb-4 drop-shadow-md underline" >
          {f("news")}
        </div>
        <div className="text-base sm:text-lg md:text-xl text-[#FFBC8C87]">KATA ALPACA</div>
      </div>
    </div>
  );
};
export default Notice;
