import Footer from "@/components/footer";
import Header from "@/components/header";
import BannerNosotros from "@/components/nosotros/banner";
import NuestraHistoria from "@/components/nosotros/nuestraHistoria";
import QuienesSomos from "@/components/nosotros/quienesSomos";
export default function Home() {
  return (
    <div>
      <Header />
      <BannerNosotros/>
      <QuienesSomos/>
      <NuestraHistoria/>
      
      <Footer />
    </div>
  );
}
