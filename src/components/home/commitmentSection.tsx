import Image from "next/image";

const CommitmentSection: React.FC = () => {
  return (
    <div>
      <div className="relative py-30">
        {/* Imagen de fondo */}
        <div className="absolute inset-0 -z-10 h-[700px] w-full">
          <Image
            src="/home/4Image.webp"
            alt="Alpacas en los Andes"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <h2 className="text-6xl text-[#BE5103] text-center pt-5">COMPROMISO</h2>
        {/* Tarjetas */}
        <div className="z-10 flex flex-col md:flex-row px-4 md:px-10 text-center gap-4 max-w-6xl mx-auto py-50">
          <div className="flex-1 border p-6 bg-[#FFFDFDF2] border-[#00000040]">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-xl">
              CALIDAD
            </h3>
            <p>
              Cada prenda pasa por un estricto control para garantizar que
              supere las expectativas de nuestros clientes.
            </p>
          </div>
          <div className="flex-1 border p-6 bg-[#FFFDFDF2] border-[#00000040] ">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-xl">
              SOSTENIBILIDAD
            </h3>
            <p>
              Priorizamos materiales reciclables y promovemos procesos
              responsables con el medio ambiente.
            </p>
          </div>
          <div className="flex-1 border p-6 bg-[#FFFDFDF2] border-[#00000040]">
            <h3 className="text-[#BE5103] pb-2 pt-2 text-xl">
              ATENCIÓN PERSONALIZADA
            </h3>
            <p>
              Trabajamos de la mano con nuestros clientes en el desarrollo de
              sus colecciones, cuidando cada detalle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommitmentSection;
