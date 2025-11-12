import Footer from "@/components/footer";
import Header from "@/components/header";
import BannerNosotros from "@/components/nosotros/banner";
import NuestraEmpresa from "@/components/nosotros/nuestraEmpresa";
import NuestraFamilia from "@/components/nosotros/nuestraFamilia";
import NuestraHistoria from "@/components/nosotros/nuestraHistoria";
import NuestrosPilares from "@/components/nosotros/NuestrosPilares";
import QuienesSomos from "@/components/nosotros/quienesSomos";
export default function Home() {
  return (
    <div>
      <Header />
      <BannerNosotros/>
      <QuienesSomos/>
      <NuestraHistoria/>
      <NuestraEmpresa/>
      <NuestrosPilares/>
      <NuestraFamilia/>
      
      
      <Footer />
    </div>
  );
}
