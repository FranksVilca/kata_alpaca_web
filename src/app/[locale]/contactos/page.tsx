import FormContactos from "@/components/contactanos/formContactos";
import HeroSection from "@/components/contactanos/herosections";
import Locate from "@/components/contactanos/locate";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useTranslations } from "next-intl";
import { Aboreto } from "next/font/google";
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';   // ⬅️ Cambia esto


const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' }
  ];
}

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>  // Promise aquí también
}) {
  const { locale } = await params; 
  setRequestLocale(locale);

  const f = await getTranslations("Contact");

  return (
    <div>
      <Header />
      <HeroSection />
      <div className={`${aboreto.className}`}>
        <div
          className="font-semibold py-6 sm:py-8 text-sm sm:text-lg md:text-xl lg:text-2xl text-[#BE5103] px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 text-center uppercase"
        >
          {f("text")}
        </div>
      </div>
      <Locate />
      <FormContactos />
      <Footer />
    </div>
  );
}
