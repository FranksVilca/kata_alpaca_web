import { useTranslations } from "next-intl";
import Image from "next/image";

const Notice: React.FC = () => {
  const f = useTranslations("Header");

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center text-center mb-60">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/9Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="z-10 text-white px-4">
        <div className="text-3xl md:text-3xl font-extralight mb-4 drop-shadow-md underline">
          {f("news")}
        </div>
        <div className="text-xl text-[#FFBC8C87]">KATA ALPACA</div>
      </div>
    </div>
  );
};
export default Notice;
