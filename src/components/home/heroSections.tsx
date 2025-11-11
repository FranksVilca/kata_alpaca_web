import Image from "next/image";

const HeroSections: React.FC = () => {
  return (
    <section className="relative w-full h-[600px] flex items-center justify-center text-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/home/1Image.webp"
          alt="Alpacas en los Andes"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="z-10 text-white px-4">
        <div className="text-3xl md:text-5xl font-light mb-4 drop-shadow-md">
          LA SUAVIDAD DE LA <span className="text-[#DD9D6F]">ALPACA</span>
        </div>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto drop-shadow-md">
          EXCELENCIA DE NUESTRA HISTORIA
        </p>
      </div>
    </section>
  );
};

export default HeroSections;
