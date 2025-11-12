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
    <div className="flex px-10 sm:px-6 md:px-8 md:py-8 bg-[#9D9C9C0D] text-[#868686] w-full border-t-2 border-[#00000040]">
      {/* Imagen */}
      <div className="pl-20">
        <Image
          src="/logo.webp"
          alt="Descripción del logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>
      {/* Contenido principal */}
      <div className="flex flex-wrap justify-end items-center gap-4 text-sm tracking-wide w-full pr-10 underline">
        {/* Enlaces */}
        {data.link.map((link, index) => (
          <div key={index} className="flex items-center">
            <Link
              href={link.href}
              className="hover:text-[#292929] transition-colors duration-300"
            >
              {link.text}
            </Link>
            {/* Añade separador solo si no es el último */}
            {index < data.link.length - 1 && (
              <span className="mx-3 text-[#c0c0c0]">|</span>
            )}
          </div>
        ))}

        {/* Separador central */}
        <span className="text-[#c0c0c0]">|</span>

        {/* Redes sociales */}
        <div className="flex items-center gap-1">
          <Link
            href="https://www.instagram.com/kataalpaca"
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://www.facebook.com/kataalpaca/"
            className="hover:text-[#d4af37] transition-colors duration-300"
          >
            <FaFacebook />
          </Link>
          <span className="text-[#868686] font-medium">/KataAlpaca</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
