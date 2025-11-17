import Footer from "@/components/footer";
import Header from "@/components/header";
import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server'; 

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' }
  ];
}
export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>  // Promise aquí también
}) {
  const { locale } = await params; 
  setRequestLocale(locale);

  return (
    <div>
      <Header />
      
      <Footer />
    </div>
  );
}
