import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <div className="py-12">
      {/* Título y descripción */}
      <div className="text-center mb-8 py-20">
        <h1 className="text-[#BE5103] text-4xl md:text-6xl font-extralight mb-4">
          QUIENES SOMOS
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          En Kata Alpaca transformamos fibras nobles en moda sostenible. Nuestra
          historia de tres décadas refleja el compromiso con la cultura peruana,
          la excelencia en cada prenda y el respeto por nuestra comunidad.
        </p>
      </div>

      {/* Imágenes */}
      <div className="flex flex-col md:flex-row">
        {/* Primera imagen con texto encima */}
        <div className="relative flex-1 h-150">
          <Image
            src="/home/2Image.webp"
            alt="Tela"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Texto encima */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <h2 className="text-white text-3xl font-extralight">
              KATA ALPACA
            </h2>
          </div>
        </div>

        {/* Segunda imagen con texto encima */}
        <div className="relative flex-1 h-64 md:h-150">
          <Image
            src="/home/3Image.webp"
            alt="Chompa Azul"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/70"></div>
          {/* Texto encima */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-white text-3xl font-extralight ">
              ALPAKIRA
            </h2>
            <p className="text-lg md:text-2xl underline mt-2 text-[#FFBC8C]">
              NUESTRA MARCA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
