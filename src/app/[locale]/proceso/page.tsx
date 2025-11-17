import Footer from "@/components/footer";
import Header from "@/components/header";
import DelDisenoALaPrenda from "@/components/procesos/DisBanner";
import Programmin from "@/components/procesos/programming";
import ProcesosBanner from "@/components/procesos/ProcesosBanner";
import Yarn from "@/components/procesos/heroHilados";
import ConfeccionBanner from "@/components/procesos/confeccionBanner";
import EquipoQuote from "@/components/procesos/equipoQuote";
import CloseBanner from "@/components/procesos/closeBanner";
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'; 

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

  return (
    <div>
      <Header />
      <ProcesosBanner />
      <DelDisenoALaPrenda />
      <Programmin />
      <Yarn />
      <ConfeccionBanner />
      <EquipoQuote/>
      <CloseBanner/>

      <Footer />
    </div>
  );
}
