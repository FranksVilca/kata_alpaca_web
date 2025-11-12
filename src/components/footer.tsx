import Link from "next/link";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const h = useTranslations("Header");
  const f = useTranslations("Footer");

  const data = {
    link: [
      { href: "/libro_reclamaciones", text: f("book") },
      { href: "/contactos", text: h("contact") },
    ],
  };

  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 bg-[#9D9C9C0D] text-[#868686] w-full border-t-2 border-[#00000040]">
      {/* Imagen - Centrada en mobile, izquierda en desktop */}
      <div className="flex justify-center md:justify-start md:pl-20 mb-6 md:mb-0">
        <Image
          src="/logo.webp"
          alt="Descripción del logo"
          width={150}
          height={75}
          className="object-contain md:w-[200px] md:h-[100px]"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-end items-center gap-3 md:gap-4 text-xs sm:text-sm tracking-wide w-full md:pr-10">
        {/* Enlaces - Verticales en mobile con separador */}
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
          {data.link.map((link, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">
              <Link
                href={link.href}
                className="hover:text-[#292929] transition-colors duration-300 underline"
              >
                {link.text}
              </Link>
              {/* Separador vertical en mobile, horizontal en desktop */}
              {index < data.link.length - 1 && (
                <span className="my-2 md:my-0 md:mx-3 text-[#c0c0c0]">
                  <span className="block md:hidden">|</span>
                  <span className="hidden md:inline">|</span>
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Separador central - Solo visible en desktop */}
        <span className="hidden md:inline text-[#c0c0c0]">|</span>

        {/* Redes sociales */}
        <div className="flex items-center gap-1 mt-3 md:mt-0">
          <Link
            href="https://www.instagram.com/kataalpaca"
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            <FaInstagram className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <Link
            href="https://www.facebook.com/kataalpaca/"
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            <FaFacebook className="w-4 h-4 md:w-5 md:h-5" />
          </Link>
          <span className="text-[#868686] font-medium text-xs sm:text-sm">/KataAlpaca</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
