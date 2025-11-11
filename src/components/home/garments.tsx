import Image from "next/image";

const Garments: React.FC = () => {
  return (
    <div className="py-40">
      <div className="text-6xl text-center text-[#BE5103] tracking-[0.3em] mb-8">
        PRENDAS
      </div>
      <div className="flex justify-center items-center w-full px-4">
        {/* Cardigan - Left */}
        <div className="relative flex-1 h-120 overflow-visible group">
          <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-120 group-hover:z-20">
            <Image
              src="/home/6Image.webp"
              alt="Cardigan"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center pb-8">
              <p className="text-white text-xl tracking-[0.3em] font-light">
                CARDIGAN
              </p>
            </div>
          </div>
        </div>

        {/* Poncho - Center (elevated) */}
        <div className="relative flex-1 h-160 overflow-visible group z-10">
          <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-120 group-hover:z-20">
            <Image
              src="/home/7Image.webp"
              alt="Poncho Calado Cocos"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center pb-8">
              <p className="text-white text-xl tracking-[0.3em] text-center font-light leading-tight">
                PONCHO<br />CALADO COCOS
              </p>
            </div>
          </div>
        </div>

        {/* Sweter - Right */}
        <div className="relative flex-1 h-120 overflow-visible group">
          <div className="relative w-full h-full overflow-hidden transition-transform duration-500 group-hover:scale-120 group-hover:z-20">
            <Image
              src="/home/8Image.webp"
              alt="Sweter"
              fill
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center pb-8">
              <p className="text-white text-xl tracking-[0.3em] font-light">
                SWETER
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Garments;