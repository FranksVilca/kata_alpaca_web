"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Aboreto } from "next/font/google";
import { motion } from 'framer-motion';

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const FinalBanner: React.FC = () => {
  const f = useTranslations("Product");

  return (
    <div className="hidden md:flex relative w-full h-[600px] items-center justify-center text-center">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <Image
          src="/productos/reservaAuquenidos.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
      </motion.div>
      <motion.div
        className={`z-10 border px-18 bg-[#D9D9D9D4] border-[#00000040] py-20 w-3/4 mx-70 ${aboreto.className}`}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.span
          className="text-xl text-[#743102] mb-4 drop-shadow-md uppercase font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {f("endText1")}
        </motion.span>
        <motion.span
          className="text-xl text-[#BE5103] font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        > KNOW HOW </motion.span>
        <motion.span
          className="text-xl text-[#743102] mb-4 drop-shadow-md uppercase font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          {f("endText2")}
        </motion.span>
      </motion.div>
    </div>
  );
};
export default FinalBanner;