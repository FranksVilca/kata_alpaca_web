import { useTranslations } from "next-intl";
import Image from "next/image";

const CommitmentSection: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <div>
      <div className="relative py-30">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10 h-[700px] w-full">
          <Image
            src="/home/4Image.webp"
            alt="Alpacas en los Andes"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <h2 className="text-6xl text-[#BE5103] text-center pt-5">{f("comSectTitle")}</h2>
        {/* Tarjetas */}
        <div className="z-10 flex flex-col md:flex-row px-4 md:px-10 text-center gap-4 max-w-6xl mx-auto py-50">
          <div className="flex-1 border p-6 bg-[#FFFDFDF2] border-[#00000040]">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-xl">{f("comSectTitleCal")}</h3>
            <p>
              {f("comSectTextCal")}
            </p>
          </div>
          <div className="flex-1 border p-6 bg-[#FFFDFDF2] border-[#00000040] ">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-xl">{f("comSectTitleSos")}</h3>
            <p>
              {f("comSectTextSos")}
            </p>
          </div>
          <div className="flex-1 border p-6 bg-[#FFFDFDF2] border-[#00000040]">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-xl">
              {f("comSectTitleAte")}
            </h3>
            <p>
              {f("comSectTextCal")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
