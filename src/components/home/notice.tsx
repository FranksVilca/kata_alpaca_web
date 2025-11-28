"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Aboreto } from "next/font/google";
import { motion } from 'framer-motion';

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const Notice: React.FC = () => {
  const f = useTranslations("Header");

  return (
    <div className="overflow-hidden">
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] flex items-center justify-center text-center overflow-hidden">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ scale: 1.05, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/home/9Image.webp"
            alt="Alpacas en los Andes"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        <motion.div
          className={`z-10 text-white px-4 sm:px-14 md:px-18 bg-black/70 md:py-6 sm:py-4 ${aboreto.className}`}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl font-extralight mb-3 sm:mb-4 drop-shadow-md underline"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {f("news")}
          </motion.div>
          <motion.div
            className="text-base sm:text-lg md:text-xl text-[#FFBC8C87]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            KATA ALPACA
          </motion.div>
        </motion.div>
      </div>
      <div className="bg-white h-20 sm:h-40 md:h-50"></div>
    </div>
  );
};
export default Notice;