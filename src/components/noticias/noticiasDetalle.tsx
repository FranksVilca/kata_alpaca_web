// src/components/noticias/noticiasDetalle.tsx
"use client";

import Image from "next/image";
import { Aboreto, Raleway } from "next/font/google";
import Link from "next/link";

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
    parrafo1: string;
    parrafo2: string;
    imagenPrincipal: {
        url: string;
    };
    imagen2: {
        url: string;
    };
    imagen3: {
        url: string;
    };
    publishedAt: string;
}

interface NoticiasDetalleProps {
    noticia: Noticia;
    locale: string;
}

export default function NoticiasDetalle({ noticia, locale }: NoticiasDetalleProps) {
    // Alternancia de layouts
    const isLayout1 = noticia.id.charCodeAt(0) % 2 === 0;

    return (
        <article className="w-full">
            {isLayout1 ? (
                <Layout1 noticia={noticia} locale={locale} />
            ) : (
                <Layout2 noticia={noticia} locale={locale} />
            )}
        </article>
    );
}

// LAYOUT 1: Imagen izquierda, texto derecha
function Layout1({ noticia, locale }: NoticiasDetalleProps) {
    return (
        <div className="min-h-screen flex flex-col md:flex-row">
            {/* Columna Izquierda */}
            <div className="w-full md:w-1/2 relative h-96 md:h-screen flex flex-col justify-between p-6 md:p-12 bg-gray-100">
                <div className="flex justify-start">
                    <span className={`text-6xl md:text-8xl font-bold text-[#C85A3F] opacity-20 ${aboreto.className}`}>
                        {noticia.anio}
                    </span>
                </div>

                <div className="relative h-96 md:h-[600px] rounded-lg overflow-hidden my-8">
                    <Image
                        src={noticia.imagenPrincipal.url}
                        alt={noticia.titulo}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Columna Derecha */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-8 bg-white">
                <p className={`text-sm md:text-base text-[#BE5103] font-bold uppercase tracking-wider ${raleway.className}`}>
                    {noticia.pais}
                </p>

                <h1 className={`text-4xl md:text-5xl text-[#C85A3F] leading-tight ${aboreto.className}`}>
                    {noticia.titulo}
                </h1>

                <p className={`text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                    {noticia.parrafo1}
                </p>

                <p className={`text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                    {noticia.parrafo2}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="relative h-64 md:h-80">
                        <Image
                            src={noticia.imagen2.url}
                            alt="Imagen 2"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative h-64 md:h-80">
                        <Image
                            src={noticia.imagen3.url}
                            alt="Imagen 3"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                <Link
                    href={`/${locale}/noticias`}
                    className={`inline-block text-[#FF8112] font-bold mt-8 hover:text-[#C85A3F] transition ${aboreto.className}`}
                >
                    ← VOLVER
                </Link>
            </div>
        </div>
    );
}

// LAYOUT 2: Imagen arriba, contenido abajo
function Layout2({ noticia, locale }: NoticiasDetalleProps) {
    return (
        <div className="w-full">
            <div className="relative w-full h-96 md:h-[500px]">
                <Image
                    src={noticia.imagenPrincipal.url}
                    alt={noticia.titulo}
                    fill
                    className="object-cover"
                />
            </div>

            <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 md:py-20">
                <div className="mb-8 space-y-2">
                    <div className={`flex gap-4 text-sm md:text-base text-[#BE5103] font-bold uppercase ${raleway.className}`}>
                        <span>{noticia.pais}</span>
                        <span>•</span>
                        <span>{noticia.anio}</span>
                    </div>

                    <h1 className={`text-4xl md:text-5xl text-[#C85A3F] leading-tight ${aboreto.className}`}>
                        {noticia.titulo}
                    </h1>
                </div>

                <div className="space-y-6 mb-12">
                    <p className={`text-base md:text-lg text-gray-800 leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                        {noticia.parrafo1}
                    </p>
                    <p className={`text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                        {noticia.parrafo2}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div className="relative h-64 md:h-80">
                        <Image
                            src={noticia.imagen2.url}
                            alt="Imagen 2"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                    <div className="relative h-64 md:h-80">
                        <Image
                            src={noticia.imagen3.url}
                            alt="Imagen 3"
                            fill
                            className="object-cover rounded-lg"
                        />
                    </div>
                </div>

                <Link
                    href={`/${locale}/noticias`}
                    className={`inline-block text-[#FF8112] font-bold hover:text-[#C85A3F] transition ${aboreto.className}`}
                >
                    ← VOLVER
                </Link>
            </section>
        </div>
    );
}