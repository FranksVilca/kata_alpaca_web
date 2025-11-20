// src/components/noticias/noticiasListado.tsx
"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
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
            <section className="relative w-full h-[300px] md:h-[500px]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className={`text-white text-4xl md:text-6xl text-center ${aboreto.className}`}>
                        {t("news")}
                    </h1>
                </div>
            </section>

            {/* Grid de Noticias */}
            <section className="py-16 md:py-24 px-4 md:px-20 bg-white">
                {noticias.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                        {noticias.map((noticia) => (
                            <NoticiaCard
                                key={noticia.id}
                                noticia={noticia}
                                locale={locale}
                            />
                        ))}
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

// Componente de tarjeta
function NoticiaCard({ noticia, locale }: { noticia: Noticia; locale: string }) {
    return (
        <article className="group flex flex-col h-full">
            {/* Imagen */}
            <div className="relative h-64 md:h-72 overflow-hidden rounded-lg mb-4 flex-shrink-0">
                <Image
                    src={noticia.imagenPrincipal.url}
                    alt={noticia.titulo}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Año overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <span className={`text-white text-2xl md:text-3xl font-bold ${aboreto.className}`}>
                        {noticia.anio}
                    </span>
                </div>
            </div>

            {/* Contenido */}
            <div className="flex flex-col flex-grow space-y-2">
                <p className={`text-xs md:text-sm text-[#BE5103] font-bold uppercase ${raleway.className}`}>
                    {noticia.pais}
                </p>

                <h2 className={`text-xl md:text-2xl text-[#C85A3F] ${aboreto.className}`}>
                    {noticia.titulo}
                </h2>

                <p className={`text-sm md:text-base text-gray-700 line-clamp-3 flex-grow ${raleway.className}`}>
                    {noticia.resumen}
                </p>

                <Link
                    href={`/${locale}/noticias/${noticia.slug}`}
                    className={`inline-block text-[#FF8112] font-bold text-sm mt-4 hover:text-[#C85A3F] transition-colors ${aboreto.className}`}
                >
                    VER MÁS →
                </Link>
            </div>
        </article>
    );
}