import Footer from "@/components/footer";
import Header from "@/components/header";
import BannerNosotros from "@/components/nosotros/banner";
import CarruselEquipo from "@/components/nosotros/CarruselEquipo";
import KataParaElMundo from "@/components/nosotros/kataMundo";
import Mision from "@/components/nosotros/mision";
import NuestraEmpresa from "@/components/nosotros/nuestraEmpresa";
import NuestraFamilia from "@/components/nosotros/nuestraFamilia";
import NuestraHistoria from "@/components/nosotros/nuestraHistoria";
import NuestroCompromiso from "@/components/nosotros/nuestroCompromiso";
import NuestroEquipo from "@/components/nosotros/NuestroEquipo";
import NuestrosPilares from "@/components/nosotros/NuestrosPilares";
import QuienesSomos from "@/components/nosotros/quienesSomos";
import Values from "@/components/nosotros/values";
import Vission from "@/components/nosotros/vision";
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
      <BannerNosotros/>
      <QuienesSomos/>
      <NuestraHistoria/>
      <NuestraEmpresa/>
      <NuestrosPilares/>
      <NuestraFamilia/>
      <NuestroCompromiso/>
      <Mision/>
      <Vission/>
      <Values/>
      <KataParaElMundo/>
      <NuestroEquipo/>
      <CarruselEquipo/>
      
      
      <Footer />
    </div>
  );
}
