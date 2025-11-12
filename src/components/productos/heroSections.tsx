import Image from "next/image";

const HeroSections: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full h-[300px] md:h-[500px]">
        <div className="flex-1 relative">
          <Image
            src="/productos/banner1.webp"
            alt="Primera imagen del banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/productos/banner2.webp"
            alt="Segunda imagen del banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex-1 relative">
          <Image
            src="/productos/banner3.webp"
            alt="Tercera imagen del banner"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSections;
