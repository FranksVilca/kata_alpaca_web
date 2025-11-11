import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/home/aboutSection";
import CommitmentOur from "@/components/home/commitmentOur";
import CommitmentSection from "@/components/home/commitmentSection";
import Garments from "@/components/home/garments";
import HeroSections from "@/components/home/heroSections";
import Notice from "@/components/home/notice";

export default function Home() {
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
