"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1 m-2 p-2 hover:bg-gray-700 rounded-xl transition-colors duration-300"
      >
      </button>
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
        </div>
        <div className="flex justify-center space-x-20 text-gray-400 uppercase tracking-wide w-full">
          {Seccion.link.map((link, index) => (
            <div key={index}>
              <Link
                href={link.href}
                className="h-full flex items-center justify-center text-sm text-[#292929] hover:text-[#d4af37] transition-all duration-300"
              >
                {link.text}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
