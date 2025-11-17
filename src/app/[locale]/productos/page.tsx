import Footer from "@/components/footer";
import Header from "@/components/header";
import FinalBanner from "@/components/productos/finalBaneer";
import HeroSections from "@/components/productos/heroSections";
import Navbar from "@/components/productos/navbar";
import ProductLeft from "@/components/productos/productLeft";
import ProductRight from "@/components/productos/productRight";
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'; 

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' }
  ];
}

export default async function ProductosPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  
  setRequestLocale(locale);
  
  const f = await getTranslations("Product");

  return (
    <div>
      <Header />
      <HeroSections />
      <Navbar />
      <ProductLeft
        id="sweter"
        title="SWETER"
        text={f("sweatersText")}
        firstImage="/productos/sweterModelo.webp"
        secondImage="/productos/sweterTela.webp"
      />
      <ProductRight
        id="cardigan"
        title="CARDIGAN"
        text={f("cardigansText")}
        firstImage="/productos/cardiganModelo.webp"
        secondImage="/productos/cardiganTela.webp"
      />
      <ProductLeft
        id="ponchos"
        title="PONCHOS"
        text={f("ponchosText")}
        firstImage="/productos/ponchosModelo.webp"
        secondImage="/productos/ponchosTela.webp"
      />
      <ProductRight
        id="casacas"
        title={f("jackets")}
        text={f("jacketsText")}
        firstImage="/productos/casacasModelo.webp"
        secondImage="/productos/casacasTela.webp"
      />
      <ProductLeft
        id="accesories"
        title={f("accesories")}
        text={f("accesoriesText")}
        firstImage="/productos/accesoriosModelo.webp"
        secondImage="/productos/accesoriosTela.webp"
      />
      <div className="pb-40 sm:pb-0"></div>
      <FinalBanner />
      <Footer />
    </div>
  );
}