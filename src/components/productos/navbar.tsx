"use client";

import { useTranslations } from "next-intl";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const f = useTranslations("Product");

  return (
    <nav className="w-full bg-white pt-25">
      <div className="max-w-full mx-auto flex items-center justify-center pt-10 pb-10 border-t border-b md:border-b-0 px-2 md:px-4">
        <div className="flex space-x-4 md:space-x-8 lg:space-x-30 text-[10px] md:text-sm lg:text-base">
          <button
            onClick={() => scrollToSection("sweter")}
            className="hover:text-[#BE5103] whitespace-nowrap"
          >
            SWEATERS
          </button>
          <button
            onClick={() => scrollToSection("cardigan")}
            className="hover:text-[#BE5103] whitespace-nowrap"
          >
            CARDIGANS
          </button>
          <button
            onClick={() => scrollToSection("ponchos")}
            className="hover:text-[#BE5103] whitespace-nowrap"
          >
            PONCHOS
          </button>
          <button
            onClick={() => scrollToSection("casacas")}
            className="hover:text-[#BE5103] whitespace-nowrap"
          >
            {f("jackets")}
          </button>
          <button
            onClick={() => scrollToSection("accesories")}
            className="hover:text-[#BE5103] whitespace-nowrap"
          >
            {f("accesories")}
          </button>
        </div>
      </div>
    </nav>
  );
}
