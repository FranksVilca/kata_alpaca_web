import Data from "@/components/book/data";
import FormBook from "@/components/book/formBook";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Data />
      <FormBook />
      <Footer />
    </div>
  );
}
