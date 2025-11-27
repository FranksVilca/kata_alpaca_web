// src/app/[locale]/noticias/[slug]/page.tsx
import Footer from "@/components/footer";
import Header from "@/components/header";
import NoticiasDetalle from "@/components/noticias/noticiasDetalle";
import { getNoticia, getNoticiaSlugs } from "@/lib/hygraph-functions";
import { routing } from "@/i18n/routing";

type Params = {
    locale: string;
    slug: string;
};

type NoticiaSlug = {
    slug: string;
};

export async function generateStaticParams() {
    // ✅ Generar para TODOS los locales
    const locales = routing.locales; // ['en', 'es']
    const allParams = [];

    console.log('✅ generateStaticParams: Starting with locales:', locales);

    for (const locale of locales) {
        console.log(`✅ generateStaticParams: Processing locale: ${locale}`);

        try {
            const slugs = await getNoticiaSlugs(locale);
            console.log(`✅ generateStaticParams: Found ${slugs.length} slugs for ${locale}`);

            const params = slugs.map((noticia: NoticiaSlug) => ({
                locale,
                slug: noticia.slug,
            }));

            allParams.push(...params);
            console.log(`✅ generateStaticParams: Added ${params.length} params for ${locale}`);
        } catch (error) {
            console.error(`❌ generateStaticParams error for ${locale}:`, error);
        }
    }

    console.log('✅ generateStaticParams: Total params generated:', allParams.length);
    console.log('✅ generateStaticParams: All params:', allParams);

    return allParams;
}

export const revalidate = 86400;

export async function generateMetadata({
    params
}: {
    params: Promise<Params>
}) {
    const { slug, locale } = await params;

    console.log(`✅ generateMetadata: Processing ${locale}/${slug}`);

    if (!slug || !locale) {
        return { title: "Noticia no encontrada" };
    }

    const noticia = await getNoticia(slug, locale);

    if (!noticia) {
        return { title: "Noticia no encontrada" };
    }

    return {
        title: noticia.titulo,
        description: noticia.resumen,
    };
}

export default async function NoticiasDetailPage({
    params
}: {
    params: Promise<Params>
}) {
    const { slug, locale } = await params;

    console.log(`✅ NoticiasDetailPage: Rendering ${locale}/${slug}`);

    if (!slug || !locale) {
        return (
            <div>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-2xl text-gray-600">Error: parámetros inválidos</p>
                </div>
                <Footer />
            </div>
        );
    }

    const noticia = await getNoticia(slug, locale);

    if (!noticia) {
        return (
            <div>
                <Header />
                <div className="min-h-screen flex items-center justify-center">
                    <p className="text-2xl text-gray-600">Noticia no encontrada</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <NoticiasDetalle noticia={noticia} locale={locale} />
            <Footer />
        </div>
    );
}