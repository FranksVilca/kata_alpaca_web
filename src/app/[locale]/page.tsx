import { setRequestLocale } from 'next-intl/server';
import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/home/aboutSection";
import CommitmentOur from "@/components/home/commitmentOur";
import CommitmentSection from "@/components/home/commitmentSection";
import Garments from "@/components/home/garments";
import HeroSections from "@/components/home/heroSections";
import Notice from "@/components/home/notice";

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
  
  // CRÍTICO: Establecer el locale para renderizado estático
  setRequestLocale(locale);
  
  return (
    <div>
      <Header />
      <HeroSections/>
      <AboutSection />
      <CommitmentSection />
      <CommitmentOur />
      <Garments/>
      <Notice />
      <Footer />
    </div>
  );
}