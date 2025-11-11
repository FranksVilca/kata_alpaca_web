import Footer from "@/components/footer";
import Header from "@/components/header";
import AboutSection from "@/components/home/aboutSection";
import CommitmentSection from "@/components/home/commitmentSection";
import HeroSections from "@/components/home/heroSections";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSections/>
      <AboutSection />
      <CommitmentSection />
      <Footer />
    </div>
  );
}
