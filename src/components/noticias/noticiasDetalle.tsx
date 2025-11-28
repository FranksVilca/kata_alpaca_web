// src/components/noticias/noticiasDetalle.tsx
"use client";

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
    parrafo1: string;
    parrafo2: string;
    parrafo3: string;
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
            <Layout2 noticia={noticia} locale={locale} />
        </article>
    );
}

function Layout2({ noticia, locale }: NoticiasDetalleProps) {
    return (
        <div className="w-full">
            <div className="mb-8 space-y-2 flex justify-center">
                <div className={`${aboreto.className} py-4 px-6 md:px-0 w-full md:w-fit text-center`}>
                    <p className="text-xl md:text-2xl text-black uppercase text-right">
                        {noticia.pais}
                    </p>
                    <p className="text-4xl md:text-7xl text-[#BE5103] leading-tight text-start md:text-center">
                        {noticia.titulo}
                    </p>
                    <p className="text-[#BE5103] text-2xl md:text-3xl text-left">
                        {noticia.anio}
                    </p>
                </div>
            </div>

            {/* LAYOUT MOBILE */}
            <div className="block md:hidden px-4 space-y-4 mb-12">
                {/* Imagen principal */}
                <div className="relative w-full h-52 overflow-hidden rounded">
                    <Image
                        src={noticia.imagenPrincipal.url}
                        alt={noticia.titulo}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Párrafo 1 */}
                <p className={`text-xs text-justify leading-relaxed ${raleway.className}`}>
                    {noticia.parrafo1}
                </p>

                {/* Imagen 3 (segunda imagen en mobile) */}
                <div className="relative w-full h-52 overflow-hidden rounded">
                    <Image
                        src={noticia.imagen3.url}
                        alt="Imagen 3"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Grid: Párrafo 2 + Imagen 2 */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="flex items-start">
                        <p className={`text-xs text-justify leading-relaxed ${raleway.className}`}>
                            {noticia.parrafo2}
                        </p>
                    </div>

                    <div className="relative h-52">
                        <Image
                            src={noticia.imagen2.url}
                            alt="Imagen 2"
                            fill
                            className="object-cover rounded"
                        />
                    </div>
                </div>
            </div>

            {/* LAYOUT DESKTOP - SIN CAMBIOS */}
            <div className="hidden md:block">
                <div className="px-20">
                    <div className="flex justify-center relative h-60 md:h-130 overflow-hidden">
                        <Image
                            src={noticia.imagenPrincipal.url}
                            alt={noticia.titulo}
                            fill
                            className="object-contain group-hover:scale-100 transition-transform duration-500"
                        />
                    </div>
                </div>

                <div className="space-y-6 mb-12 max-w-4xl mx-auto px-4 md:px-8 py-6 md:py-12">
                    <p className={`text-base md:text-lg text-justify leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                        {noticia.parrafo1}
                    </p>
                </div>

                <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 px-12">
                    <div className="flex items-end pl-40 pr-30 text-start">
                        <p className={`text-base md:text-lg text-justify leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                            {noticia.parrafo2}
                        </p>
                    </div>

                    <div className="relative h-64 md:h-80">
                        <Image
                            src={noticia.imagen2.url}
                            alt="Imagen 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="relative w-4/6 h-64 md:h-80 pt-8 mb-20">
                    <Image
                        src={noticia.imagen3.url}
                        alt="Imagen 3"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex items-end pl-40 pr-30 text-start">
                    <p className={`text-base md:text-lg text-justify leading-relaxed whitespace-pre-wrap ${raleway.className}`}>
                        {noticia.parrafo3}
                    </p>
                </div>
            </div>
        </div>
    );
}