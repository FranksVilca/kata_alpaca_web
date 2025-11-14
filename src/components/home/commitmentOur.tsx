import { useTranslations } from "next-intl";
import Image from "next/image";

const CommitmentOur: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center mt-10 md:mt-20">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/5Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="z-10 text-[#FFF2F2] px-4 sm:px-6 md:px-8">
        <div className="text-xl sm:text-2xl md:text-3xl font-extralight mb-3 sm:mb-4 drop-shadow-md underline p-3 bg-none bg-white/41 sm:bg-none">
          {f("comOur")}
          <br></br> {f("comPro")}
        </div>
      </div>
    </div>
  );
};
export default CommitmentOur;
