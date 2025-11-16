"use client";

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Seccion = {
    link: [
      { href: "/", text: t("init") },
      { href: "/nosotros", text: t("aboutUs") },
      { href: "/productos", text: t("products") },
      { href: "/proceso", text: t("process") },
      { href: "/noticias", text: t("news") },
      { href: "/contactos", text: t("contact") },
    ],
  };

  return (
    <div className="relative">
      {/* Selector de idioma - visible en todas las pantallas */}
      <div className="flex w-full justify-end px-6 md:pr-50 pt-6 md:pt-10 text-[#292929] space-x-2 text-sm sm:text-normal">
        <Link 
          href={pathname} 
          locale="es" 
          className="hover:text-[#d4af37] transition-all duration-300"
        >
          ES 
        </Link>
        <p> // </p>
        <Link 
          href={pathname} 
          locale="en" 
          className="hover:text-[#d4af37] transition-all duration-300"
        >
          EN
        </Link>
      </div>

      {/* Logo - visible en todas las pantallas */}
      <div className="flex justify-center py-6 md:pb-12">
        <Image
          src="/logo.webp"
          alt="Descripción del logo"
          width={200}
          height={100}
          className="object-contain"
        />
      </div>

      {/* Botón hamburguesa - solo visible en mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden absolute top-6 left-6 z-50 flex flex-col space-y-1.5 p-2"
        aria-label="Menu"
      >
        <span 
          className={`block w-6 h-0.5 bg-[#292929] transition-transform duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span 
          className={`block w-6 h-0.5 bg-[#292929] transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span 
          className={`block w-6 h-0.5 bg-[#292929] transition-transform duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Menú Desktop - oculto en mobile */}
      <div className="hidden md:flex justify-center space-x-8 lg:space-x-20 text-gray-400 uppercase tracking-wide w-full pb-10 ">
        {Seccion.link.map((link, index) => (
          <Link
            key={index}
            className="h-full flex items-center justify-center text-sm text-[#292929] hover:text-[#d4af37] transition-all duration-300"
            href={link.href}
          >
            {link.text}
          </Link>
        ))}
      </div>

      {/* Menú Mobile - solo visible cuando isMenuOpen es true */}
      <div 
        className={`md:hidden fixed top-0 left-0 h-screen w-64 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col pt-24 px-6 space-y-6">
          {Seccion.link.map((link, index) => (
            <Link
              key={index}
              className="text-base text-[#292929] hover:text-[#d4af37] transition-all duration-300 uppercase tracking-wide py-2 border-b border-gray-100"
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay - cierra el menú al hacer click fuera */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Línea divisoria solo en mobile */}
      <div className="md:hidden border-b border-gray-200"></div>
    </div>
  );
}