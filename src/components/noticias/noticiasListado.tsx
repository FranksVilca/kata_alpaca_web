"use client";

import { useTranslations } from "next-intl";
import NoticiaCardRight from "./NoticiaCardRight";
import NoticiaCardLeft from "./NoticiaCardLeft";
import { Aboreto, Raleway } from "next/font/google";

const aboreto = Aboreto({
    subsets: ["latin"],
    weight: ["400"],
});

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

interface Noticia {
    id: string;
    slug: string;
    anio: string;
    titulo: string;
    pais: string;
    resumen: string;
    imagenPrincipal: {
        url: string;
    };
    publishedAt: string;
}

interface NoticiasListadoProps {
    noticias: Noticia[];
    locale: string;
}

export default function NoticiasListado({ noticias, locale }: NoticiasListadoProps) {
    const t = useTranslations("Header");

    return (
        <div>
            {/* Hero Banner */}
            <section className="relative w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className={`text-white text-4xl md:text-6xl text-center ${aboreto.className}`}>
                        {t("news")}
                    </h1>
                </div>
            </section>

            {/* Grid de Noticias */}
            <section className="bg-white w-full">
                {noticias.length > 0 ? (
                    <div>
                        {noticias.map((noticia, index) =>
                            index % 2 === 0 ? (
                                <NoticiaCardRight key={noticia.id} noticia={noticia} locale={locale} />
                            ) : (
                                <NoticiaCardLeft key={noticia.id} noticia={noticia} locale={locale} />
                            )
                        )}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className={`text-gray-600 text-lg ${raleway.className}`}>
                            No hay noticias disponibles
                        </p>
                    </div>
                )}
            </section>
        </div>
    );
}

export type { Noticia };