import Image from "next/image";

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
    <div id={id}>
      <div className="flex flex-row px-10">
        <div className="flex-1 flex items-center justify-center min-h-screen">
          <div className="relative">
            {/* Imagen de la Modelo*/}
            <div className="relative w-80 h-96 overflow-hidden">
              <Image
                src={firstImage}
                alt="Modelo"
                fill
                className="object-cover"
              />
            </div>

            {/* Imagen de la Tela*/}
            <div className="absolute top-4/6 -translate-y-1/2 right-0 translate-x-3/4 w-36 h-44 overflow-hidden z-10 transition-transform duration-300 ease-out hover:scale-120">
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
        <div className="flex-1 flex flex-col items-center justify-center">
          <h2 className="text-6xl text-[#BE5103] mb-25 text-center pr-12">{title}</h2>
          <p className="text-xl max-w-md mx-2 text-foreground">{text}</p>
        </div>
      </div>
    </div>
  );
}
