// lib/hygraph-queries.ts

// Query para listar noticias - CAMPOS LOCALIZADOS
export const GET_NOTICIAS_LISTA_LOCALIZED = `
  query GetNoticias($locale: Locale!) {
    noticias(
      first: 20
      locales: [$locale]
      orderBy: publishedAt_DESC
    ) {
      id
      slug
      titulo
      resumen
    }
  }
`;

// Query para listar noticias - CAMPOS NO LOCALIZADOS (siempre en EN)
export const GET_NOTICIAS_LISTA_ASSETS = `
  query GetNoticiasAssets {
    noticias(first: 20, orderBy: publishedAt_DESC) {
      id
      slug
      anio
      pais
      imagenPrincipal {
        url
      }
      publishedAt
    }
  }
`;

// Query para slugs
export const GET_NOTICIAS_SLUGS = `
  query GetNoticiaSlugs($locale: Locale!) {
    noticias(locales: [$locale]) {
      slug
    }
  }
`;

// Query para detalle - CAMPOS LOCALIZADOS
export const GET_NOTICIA_DETALLE_LOCALIZED = `
  query GetNoticia($slug: String!, $locale: Locale!) {
    noticia(where: { slug: $slug }, locales: [$locale]) {
      id
      slug
      titulo
      resumen
      parrafo1
      parrafo2
    }
  }
`;

// Query para detalle - CAMPOS NO LOCALIZADOS
export const GET_NOTICIA_DETALLE_ASSETS = `
  query GetNoticia($slug: String!) {
    noticia(where: { slug: $slug }) {
      id
      slug
      anio
      pais
      imagenPrincipal {
        url
      }
      imagen2 {
        url
      }
      imagen3 {
        url
      }
      publishedAt
    }
  }
`;
