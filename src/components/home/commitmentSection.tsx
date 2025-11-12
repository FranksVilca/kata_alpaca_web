import { useTranslations } from "next-intl";
import Image from "next/image";

const CommitmentSection: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <div>
      <div className="relative py-16 sm:py-20 md:py-30">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10 h-full md:h-[700px] w-full">
          <Image
            src="/home/4Image.webp"
            alt="Alpacas en los Andes"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-6xl text-[#BE5103] text-center pt-3 sm:pt-4 md:pt-5 px-4">
          {f("comSectTitle")}
        </h2>
        {/* Tarjetas */}
        <div className="z-10 flex flex-col-reverse md:flex-row px-4 sm:px-6 md:px-10 text-center gap-4 sm:gap-6 md:gap-4 max-w-6xl mx-auto py-8 sm:py-12 md:py-50">
          <div className="flex-1 border p-4 sm:p-5 md:p-6 bg-[#FFFDFDF2] border-[#00000040] w-3/4 sm:w-full mx-auto">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-base sm:text-lg md:text-xl">
              {f("comSectTitleCal")}
            </h3>
            <p className="text-xs sm:text-sm md:text-base">
              {f("comSectTextCal")}
            </p>
          </div>
          <div className="flex-1 border p-4 sm:p-5 md:p-6 bg-[#FFFDFDF2] border-[#00000040] w-3/4 sm:w-full mx-auto">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-base sm:text-lg md:text-xl">
              {f("comSectTitleSos")}
            </h3>
            <p className="text-xs sm:text-sm md:text-base">
              {f("comSectTextSos")}
            </p>
          </div>
          <div className="flex-1 border p-4 sm:p-5 md:p-6 bg-[#FFFDFDF2] border-[#00000040] w-3/4 sm:w-full mx-auto">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-base sm:text-lg md:text-xl">
              {f("comSectTitleAte")}
            </h3>
            <p className="text-xs sm:text-sm md:text-base">
              {f("comSectTextCal")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
