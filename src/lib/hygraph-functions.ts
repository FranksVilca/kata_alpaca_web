// lib/hygraph-functions.ts
const HYGRAPH_URL =
  process.env.HYGRAPH_URL ||
  "https://us-west-2.cdn.hygraph.com/content/cmi5gi52y05zj07w3cimib12h/master";
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

import {
  GET_NOTICIAS_LISTA_LOCALIZED,
  GET_NOTICIAS_LISTA_ASSETS,
  GET_NOTICIAS_SLUGS,
  GET_NOTICIA_DETALLE_LOCALIZED,
  GET_NOTICIA_DETALLE_ASSETS,
} from "./hygraph-queries";

async function hygraphRequest(
  query: string,
  variables: Record<string, any> = {}
) {
  try {
    const response = await fetch(HYGRAPH_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
    });

    const text = await response.text();

    let data;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("❌ JSON Parse Error:", text);
      return null;
    }

    const { data: graphqlData, errors } = data;

    if (errors) {
      console.error("GraphQL errors:", errors);
      return null;
    }

    return graphqlData;
  } catch (error) {
    console.error("Hygraph fetch error:", error);
    return null;
  }
}

// Obtener lista de noticias (combina localizadas + assets)
export async function getNoticias(locale: string) {
  if (!locale) {
    console.error("❌ getNoticias: Locale is undefined");
    return [];
  }

  const normalizedLocale = locale.toLowerCase();
  console.log("✅ getNoticias: Fetching for locale:", normalizedLocale);

  // Query 1: Campos localizados
  const localizedData = await hygraphRequest(GET_NOTICIAS_LISTA_LOCALIZED, {
    locale: normalizedLocale,
  });

  // Query 2: Assets (siempre en inglés)
  const assetsData = await hygraphRequest(GET_NOTICIAS_LISTA_ASSETS);

  if (!localizedData?.noticias || !assetsData?.noticias) {
    console.error("❌ getNoticias: No data returned from Hygraph");
    return [];
  }

  console.log(
    `✅ getNoticias: Found ${localizedData.noticias.length} localized noticias`
  );

  // Combinar: campos localizados + assets
  const noticias = localizedData.noticias.map((noticia: any) => {
    const assets = assetsData.noticias.find((a: any) => a.id === noticia.id);
    return {
      ...noticia,
      ...assets, // Sobrescribir con assets (imágenes, año, país, etc.)
    };
  });

  console.log(
    `✅ getNoticias: Combined ${noticias.length} noticias with assets`
  );
  return noticias;
}

// Obtener slugs
export async function getNoticiaSlugs(locale: string) {
  if (!locale) {
    console.error("❌ getNoticiaSlugs: Locale is undefined");
    return [];
  }

  const normalizedLocale = locale.toLowerCase();
  console.log("✅ getNoticiaSlugs: Fetching for locale:", normalizedLocale);

  const data = await hygraphRequest(GET_NOTICIAS_SLUGS, {
    locale: normalizedLocale,
  });

  if (!data?.noticias) {
    console.error("❌ getNoticiaSlugs: No slugs found");
    return [];
  }

  console.log(`✅ getNoticiaSlugs: Found ${data.noticias.length} slugs`);
  return data.noticias || [];
}

// Obtener noticia específica
export async function getNoticia(slug: string, locale: string) {
  if (!locale || !slug) {
    console.error("❌ getNoticia: Missing locale or slug", { slug, locale });
    return null;
  }

  const normalizedLocale = locale.toLowerCase();
  console.log("✅ getNoticia: Fetching", { slug, locale: normalizedLocale });

  // Query 1: Campos localizados
  const localizedData = await hygraphRequest(GET_NOTICIA_DETALLE_LOCALIZED, {
    slug,
    locale: normalizedLocale,
  });

  if (!localizedData?.noticia) {
    console.error("❌ getNoticia: Localized data not found", slug);
    return null;
  }

  console.log("✅ getNoticia: Localized data loaded");

  // Query 2: Assets (sin locale)
  const assetsData = await hygraphRequest(GET_NOTICIA_DETALLE_ASSETS, {
    slug,
  });

  if (!assetsData?.noticia) {
    console.error("❌ getNoticia: Assets data not found", slug);
    return null;
  }

  console.log("✅ getNoticia: Assets data loaded");

  // Combinar
  const result = {
    ...localizedData.noticia,
    ...assetsData.noticia,
  };

  console.log("✅ getNoticia: Combined successfully");
  return result;
}
