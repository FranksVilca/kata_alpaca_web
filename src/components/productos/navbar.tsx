"use client";

import { useTranslations } from "next-intl";

export default function Navbar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  const f = useTranslations("Product");
  
  return (
    <nav className=" w-full bg-white pt-25">
      <div className="max-w-full mx-auto flex items-center justify-center pt-10 pb-10 border-t">
        <div className="flex space-x-30">
          <button onClick={() => scrollToSection("sweter")} className="hover:text-[#BE5103]">
            SWEATERS
          </button>
          <button onClick={() => scrollToSection("cardigan")} className="hover:text-[#BE5103]">
            CARDIGANS
          </button>
          <button onClick={() => scrollToSection("ponchos")} className="hover:text-[#BE5103]">
            PONCHOS
          </button>
          <button onClick={() => scrollToSection("casacas")} className="hover:text-[#BE5103]">
            {f("jackets")}
          </button>
          <button onClick={() => scrollToSection("accesories")} className="hover:text-[#BE5103]">
            {f("accesories")}
          </button>
        </div>
      </div>
    </nav>
  );
}
