"use client"
import Image from "next/image";
import { motion } from 'framer-motion';

const HeroSections: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <div className="flex w-full h-[300px] md:h-[500px] overflow-hidden">
        <motion.div
          className="flex-1 relative overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src="/productos/banner1.webp"
            alt="Primera imagen del banner"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 33vw, 33vw"
          />
        </motion.div>
        <motion.div
          className="flex-1 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/productos/banner2.webp"
            alt="Segunda imagen del banner"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 33vw, 33vw"
          />
        </motion.div>
        <motion.div
          className="flex-1 relative overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Image
            src="/productos/banner3.webp"
            alt="Tercera imagen del banner"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 33vw, 33vw"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSections;