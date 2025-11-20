// src/app/[locale]/noticias/page.tsx
import Footer from "@/components/footer";
import Header from "@/components/header";
import NoticiasListado from "@/components/noticias/noticiasListado";
import { getNoticias } from "@/lib/hygraph-functions";

export const revalidate = 86400; // 24 horas

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

  return (
    <div>
      <Header />
      <NoticiasListado noticias={noticias} locale={locale} />
      <Footer />
    </div>
  );
}