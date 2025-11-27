import Link from "next/link";
import Image from "next/image";
import { Aboreto, Raleway } from "next/font/google";
import type { Noticia } from "./noticiasListado";

const aboreto = Aboreto({
    subsets: ["latin"],
    weight: ["400"],
});

const raleway = Raleway({
    subsets: ["latin"],
    weight: ["300", "400", "500"],
});

interface NoticiaCardLeftProps {
    noticia: Noticia;
    locale: string;
}

export default function NoticiaCardLeft({ noticia, locale }: NoticiaCardLeftProps) {
    return (
        <article className="w-full h-full py-8 md:py-16">
            {/* Contenido */}
            <div className="flex flex-col flex-grow space-y-4">
                {/* Encabezado */}
                <div className={`${aboreto.className} py-4 px-6 md:pr-10 md:px-0 w-full md:w-fit md:ml-auto`}>
                    <p className="text-xl md:text-2xl text-black uppercase font-bold md:text-right">
                        {noticia.pais}
                    </p>
                    <p className="text-4xl md:text-7xl text-[#BE5103] font-bold leading-tight md:text-right">
                        {noticia.titulo}
                    </p>
                    <p className="flex text-[#BE5103] text-2xl md:text-3xl font-bold justify-end md:justify-start">
                        {noticia.anio}
                    </p>
                </div>

                {/* Contenedor Imagen + Resumen */}
                <div className="flex flex-col md:flex-row-reverse md:items-end gap-4 md:gap-8">
                    {/* Imagen */}
                    <div className="relative w-full md:w-800 h-64 md:h-100 overflow-hidden">
                        <Image
                            src={noticia.imagenPrincipal.url}
                            alt={noticia.titulo}
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                            fill
                        />
                    </div>

                    {/* Resumen */}
                    <div className={`flex flex-col space-y-3 ${raleway.className} border border-gray-200 py-5 px-5 md:py-7 md:px-6 w-full md:justify-end md:-my-10 md:mr-4 bg-white -ml-16 pl-22 md:ml-4`}>
                        <p className="text-sm md:text-base text-gray-700 line-clamp-4 md:line-clamp-3 flex-grow md:text-right">
                            {noticia.resumen}
                        </p>
                        <Link
                            href={`/${locale}/noticias/${noticia.slug}`}
                            className={`inline-block text-[#BA4D02] font-bold text-sm md:text-md hover:text-[#C85A3F] transition-colors ${aboreto.className} underline md:text-right w-fit md:ml-auto`}
                        >
                            VER MÁS
                        </Link>
                    </div>
                </div>
            </div>
        </article>
    );
}