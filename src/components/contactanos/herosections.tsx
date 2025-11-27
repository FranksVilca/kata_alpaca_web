"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import { Aboreto } from "next/font/google";
import { motion } from 'framer-motion';

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSection: React.FC = () => {
  const f = useTranslations("Contact");

  return (
    <div className="bg-white">
      <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px]">
        <motion.div
          className="absolute inset-0 z-10"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/contactanos/firstImage.webp"
            alt="Alpacas en los Andes"
            fill
            className="w-full h-full object-cover object-center sm:object-cover"
            priority
          />
        </motion.div>
        <div className={`relative z-10 px-4 sm:px-6 md:px-20 pt-8 sm:pt-16 md:pt-24 ${aboreto.className}`}>
          <motion.div
            className="text-lg sm:text-base md:text-4xl mb-3 sm:mb-4 drop-shadow-md text-[#BE5103] pb-6"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {f("title")}
          </motion.div>
          <motion.div
            className="font-sans flex gap-2 text-xs sm:text-base text-[#000]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <FaMapMarkerAlt size={20} /> AV. TARAPACÁ 1013-A MIRAFLORES, AREQUIPA
          </motion.div>
          <motion.div
            className="py-2 font-sans flex gap-2 text-xs sm:text-base text-[#000]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <IoPersonCircleOutline size={20} /> VENTAS@KATAALPACA.COM
          </motion.div>
          <motion.div
            className="font-sans flex gap-2 text-xs sm:text-base text-[#000]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <TbWorld size={20} /> WWW.KATAALPACA.COM
          </motion.div>
          <motion.div
            className="pt-2 font-sans flex gap-2 text-xs sm:text-base text-[#000]"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <FaPhoneAlt size={18} /> +51 +54 264117
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;