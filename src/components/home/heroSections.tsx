"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Aboreto } from "next/font/google";
import { motion } from 'framer-motion';

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroSections: React.FC = () => {
  const f = useTranslations("Home");

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8 md:mb-16"
      >
        <Image
          src="/home/1Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
        <motion.div
          className="absolute inset-0 bg-black/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        ></motion.div>
      </motion.div>
      <div className={`z-10 text-white px-4 sm:px-6 md:px-8 ${aboreto.className}`}>
        <motion.div
          className="text-base sm:text-lg md:text-5xl mb-3 sm:mb-4 drop-shadow-md"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          {f("first")}
          <motion.span
            className="text-[#DD9D6F]"
            animate={{
              textShadow: [
                "0 0 10px rgba(221, 157, 111, 0.5), 0 0 20px rgba(221, 157, 111, 0.3)",
                "0 0 20px rgba(221, 157, 111, 0.8), 0 0 30px rgba(221, 157, 111, 0.5), 0 0 40px rgba(221, 157, 111, 0.3)",
                "0 0 10px rgba(221, 157, 111, 0.5), 0 0 20px rgba(221, 157, 111, 0.3)"
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          > ALPACA</motion.span>
        </motion.div>
        <motion.p
          className="text-base sm:text-lg md:text-5xl drop-shadow-md"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          {f("second")}
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSections;