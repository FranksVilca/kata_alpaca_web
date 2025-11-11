'use client'

import Image from "next/image";
import { Link, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations('Header');
  const pathname = usePathname();

  const Seccion = {
    link: [
      { href: "/", text: "INICIO" },
      { href: "/nosotros", text: "NOSOTROS" },
      { href: "/productos", text: "PRODUCTOS" },
      { href: "/proceso", text: "PROCESO" },
      { href: "/noticias", text: "NOTICIAS" },
      { href: "/contactos", text: "CONTACTOS" },
    ],
  };

  return (
    <div className="sticky top-0 z-50">
      {/* Navbar Móvil
      {open && (
        <div className="md:hidden flex flex-col bg-[#356c1f] fixed top-0 left-0 w-full h-full z-40">
          <button
            onClick={() => setOpen(false)}
            className="absolute m-2 p-2 z-50 hover:bg-gray-700 rounded-xl transition-colors duration-300"
          >
          </button>
          <div className="w-full md:w-1/2 p-2 pl-10 mb-6 mt-14">
            <Image
              src="/logo.webp"
              alt="Descripción del logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>

          {Seccion.link.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="px-8 py-3 text-xl text-white hover:bg-[#2C2E47] transition-all duration-300"
              onClick={() => setOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </div>
      )} */}

      {/*Navbar en pantalla normal */}
      <div className="hidden md:flex flex-col w-full bg-white">
        <div className="flex justify-center py-12">
          <Image
            src="/logo.webp"
            alt="Descripción del logo"
            width={200}
            height={100}
            className="object-contain"
          />
          <div>
            <Link href={pathname} locale="en">
              EN
            </Link>
            <Link href={pathname} locale="es">
              ES
            </Link>
          </div>
        </div>
        <div className="flex justify-center space-x-20 text-gray-400 uppercase tracking-wide w-full pb-10">
          {Seccion.link.map((link, index) => (
            <div key={index}>
              <h1> {t("Init")}</h1>
              <Link
                className="h-full flex items-center justify-center text-sm text-[#292929] hover:text-[#d4af37] transition-all duration-300"
                href={link.href}
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
