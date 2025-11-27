import Footer from "@/components/footer";
import Header from "@/components/header";
import NoticiasListado from "@/components/noticias/noticiasListado";
import { getNoticias } from "@/lib/hygraph-functions";
import { Aboreto } from "next/font/google";
import { getTranslations } from "next-intl/server";

const aboreto = Aboreto({
  subsets: ["latin"],
  weight: ["400"],
});

export const revalidate = 86400;

type Params = {
  locale: string;
};

export default async function NoticiasPage({
  params
}: {
  params: Promise<Params>
}) {
  const { locale } = await params;
  const noticias = await getNoticias(locale);
  const f = await getTranslations("Notice");

  return (
    <div className="bg-white">
      <Header />
      <div className={`${aboreto.className}`}>
        <div
          className="mx-8 border-b-1 border-[#000] py-6 sm:py-8 text-sm sm:text-lg md:text-3xl lg:text-6xl text-[#BE5103] text-center uppercase"
        >
          {f("title")}
        </div>
      </div>
      <NoticiasListado noticias={noticias} locale={locale} />
      <Footer />
    </div>
  );
}