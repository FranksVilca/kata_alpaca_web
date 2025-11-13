import Footer from "@/components/footer";
import Header from "@/components/header";
import BannerNosotros from "@/components/nosotros/banner";
import Mision from "@/components/nosotros/mision";
import NuestraEmpresa from "@/components/nosotros/nuestraEmpresa";
import NuestraFamilia from "@/components/nosotros/nuestraFamilia";
import NuestraHistoria from "@/components/nosotros/nuestraHistoria";
import NuestroCompromiso from "@/components/nosotros/nuestroCompromiso";
import NuestrosPilares from "@/components/nosotros/NuestrosPilares";
import QuienesSomos from "@/components/nosotros/quienesSomos";
import Values from "@/components/nosotros/values";
import Vission from "@/components/nosotros/vision";
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
      <NuestroCompromiso/>
      <Mision/>
      <Vission/>
      <Values/>
      
      
      <Footer />
    </div>
  );
}
