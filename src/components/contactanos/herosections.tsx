import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";

const HeroSection: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contactanos/firstImage.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div className="z-10 px-4 sm:px-6 md:px-20 md:pt-30">
        <div className="text-base sm:text-lg md:text-3xl mb-3 sm:mb-4 drop-shadow-md text-[#BE5103] pb-6">
          CONTACTANOS
        </div>
        <div className="font-sans flex gap-2">
          <FaMapMarkerAlt size={20}/> AV. TARAPACÁ 1013-A MIRAFLORES, AREQUIPA
        </div>
        <div className="py-2 font-sans flex gap-2">
          <IoPersonCircleOutline size={20}/> VENTAS@KATAALPACA.COM
        </div>
        <div className="font-sans flex gap-2">
          <TbWorld size={20}/> WWW.KATAALPACA.COM
        </div>
        <div className="pt-2 font-sans flex gap-2">
          <FaPhoneAlt size={18}/> +51 +54 264117
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
