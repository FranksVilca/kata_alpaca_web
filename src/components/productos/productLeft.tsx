import Image from "next/image";
import { Aboreto, Raleway } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

interface SectionProps {
  id: string;
  title: string;
  text: string;
  firstImage: string;
  secondImage: string;
}

export default function ProductLeft({
  id,
  title,
  text,
  firstImage,
  secondImage,
}: SectionProps) {
  return (
    <div id={id} className="bg-white">
      <div className="flex flex-col md:flex-row px-4 md:px-10">
        {/* Contenedor de Imágenes */}
        <div className="flex-1 flex items-center justify-center min-h-[50vh] md:min-h-[85vh] py-6 md:py-0 order-1">
          <div className="relative">
            {/* Imagen de la Modelo*/}
            <div className="relative w-56 h-72 md:w-[384px] md:h-[461px] overflow-hidden">
              <Image
                src={firstImage}
                alt="Modelo"
                fill
                className="object-cover"
              />
            </div>

            {/* Imagen de la Tela*/}
            <div className="absolute top-4/6 -translate-y-1/2 right-0 translate-x-3/4 w-24 h-32 md:w-[154px] md:h-[211px] overflow-hidden z-10 transition-transform duration-300 ease-out hover:scale-120">
              <Image
                src={secondImage}
                alt="producto"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Contenedor de texto */}
        <div className="flex-1 flex flex-col items-center justify-center py-6 md:py-0 order-2">
          <h2 className={`text-3xl md:text-6xl text-[#BE5103] mb-4 md:mb-16 text-center md:pr-12 ${aboreto.className}`}>
            {title}
          </h2>
          <p className={`text-sm text-[#000] md:text-lg max-w-md mx-2 text-center md:text-left px-10 md:px-0 ${raleway.className}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}
