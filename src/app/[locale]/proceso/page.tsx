import Footer from "@/components/footer";
import Header from "@/components/header";
import DelDisenoALaPrenda from "@/components/procesos/DisBanner";
import ProcesosBanner from "@/components/procesos/ProcesosBanner";
import Yarn from "@/components/procesos/heroHilados";
import ConfeccionBanner from "@/components/procesos/confeccionBanner";
import EquipoQuote from "@/components/procesos/equipoQuote";
import CloseBanner from "@/components/procesos/closeBanner";
import Programming from "@/components/procesos/Programming";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <ProcesosBanner />
      <DelDisenoALaPrenda />
      <Programming />
      <Yarn />
      <ConfeccionBanner />
      <EquipoQuote />
      <CloseBanner />

      <Footer />
    </div>
  );
}
