import { useTranslations } from "next-intl";
import Image from "next/image";

const CommitmentOur: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <div className="relative w-full h-[600px] flex items-center justify-center text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/5Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="z-10 text-white px-4">
        <div className="text-3xl md:text-3xl font-extralight mb-4 drop-shadow-md underline">
          {f("comOur")}<br></br> {f("comPro")}
        </div>
      </div>
    </div>
  );
};
export default CommitmentOur;
