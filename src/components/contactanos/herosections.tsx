import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { Aboreto, Raleway } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection: React.FC = () => {
  const f = useTranslations("Contact");

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/contactanos/firstImage.webp"
          alt="Alpacas en los Andes"
          fill
          className="w-full h-full object-cover object-center sm:object-cover"
          priority
        />
      </div>
      <div className={`relative z-10 px-4 sm:px-6 md:px-20 pt-8 sm:pt-16 md:pt-24 ${aboreto.className}`}>
        <div className="text-lg sm:text-base md:text-4xl mb-3 sm:mb-4 drop-shadow-md text-[#BE5103] pb-6">
          {f("title")}
        </div>
        <div className="font-sans flex gap-2 text-xs sm:text-base">
          <FaMapMarkerAlt size={20}/> AV. TARAPACÁ 1013-A MIRAFLORES, AREQUIPA
        </div>
        <div className="py-2 font-sans flex gap-2 text-xs sm:text-base">
          <IoPersonCircleOutline size={20}/> VENTAS@KATAALPACA.COM
        </div>
        <div className="font-sans flex gap-2 text-xs sm:text-base">
          <TbWorld size={20}/> WWW.KATAALPACA.COM
        </div>
        <div className="pt-2 font-sans flex gap-2 text-xs sm:text-base">
          <FaPhoneAlt size={18}/> +51 +54 264117
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
