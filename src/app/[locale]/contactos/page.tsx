import FormContactos from "@/components/contactanos/formContactos";
import HeroSection from "@/components/contactanos/herosections";
import Locate from "@/components/contactanos/locate";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useTranslations } from "next-intl";

export default function Home() {
  const f = useTranslations("Contact");

  return (
    <div>
      <Header />
      <HeroSection />
      <div className="py-6 sm:py-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#BE5103] px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 text-center uppercase">
        {f("text")}
      </div>
      <Locate />
      <FormContactos />
      <Footer />
    </div>
  );
}
