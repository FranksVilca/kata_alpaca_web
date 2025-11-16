import { useTranslations } from "next-intl";
import { Aboreto, Jura } from "next/font/google";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

const jura = Jura({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const Locate: React.FC = () => {
  const f = useTranslations("Contact");

  return (
    <div>
      <div className="flex flex-col md:flex-row px-4 sm:px-8 md:px-12 gap-8 md:gap-8 py-6 md:py-8 text-[#292929]">
        <div className="flex-1">
          <div className={`${aboreto.className}`}>
            <div className="text-base sm:text-lg md:text-xl font-semibold uppercase mb-4" >
              {f("mainOffice")} - Arequipa
            </div>
          </div>
          <div className="py-3 md:py-4 border-t border-b border-gray-300">
            <div className="text-sm md:text-base px-4 sm:px-0">
              <span className="font-semibold">{f("address")}</span> Av. Tarapacá
              1013-A Miraflores, Arequipa. Perú
            </div>
          </div>
          <div className="mt-6 md:mt-8 h-64 sm:h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.7721545966388!2d-71.51689842641433!3d-16.385565037786566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424bb0b42e9191%3A0x883c14a8f93ac227!2sAv.%20Tarapac%C3%A1%201013%2C%20Miraflores%2004004!5e0!3m2!1ses!2spe!4v1763059778645!5m2!1ses!2spe"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <div className={`${aboreto.className}`}>
            <div className="text-base sm:text-lg md:text-xl font-semibold uppercase mb-4" >
              {f("headquarters")} - Cuzco
            </div>
          </div>
          <div className="py-3 md:py-4 border-t border-b border-gray-300">
            <div className="text-sm md:text-base px-4 sm:px-0">
              <span className="font-semibold">{f("address")}</span> Calle El
              Triunfo 352 B, cercado, Cuzco. Perú
            </div>
          </div>
          <div className="mt-6 md:mt-8 h-64 sm:h-80 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3879.31080621505!2d-71.977174!3d-13.516508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916dd673429354f5%3A0x1c2fa3e4c6ce78db!2sTriunfo%20352%2C%20Cusco%2008002!5e0!3m2!1ses!2spe!4v1763059690559!5m2!1ses!2spe"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="flex flex-col items-center text-center w-full">
          <div className="text-base sm:text-lg md:text-xl font-semibold uppercase mb-4">
            {f("title")}
          </div>
          <div className="py-3 md:py-4 border-t border-b border-gray-300 w-3/4">
            <div className="text-sm md:text-base">
              <span className="font-semibold">Telefono:</span> +51 +54 264117
            </div>
          </div>
          <div className="py-3 md:py-4 border-gray-300">
            <div className="text-sm md:text-base">
              <span className="font-semibold">Email:</span>{" "}
              ventas@kataalpaca.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locate;
