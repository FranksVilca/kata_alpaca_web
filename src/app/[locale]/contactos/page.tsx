import HeroSection from "@/components/contactanos/herosections";
import Locate from "@/components/contactanos/locate";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="py-8 text-2xl text-[#BE5103] px-60 text-center uppercase">Somos expertos en la creación de prendas de punto, ofreciendo ropa y accesorios con la más alta calidad.</div>
      <Locate />
      <Footer />
    </div>
  );
}
