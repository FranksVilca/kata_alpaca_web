// src/app/api/revalidate/route.ts
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const secret = request.nextUrl.searchParams.get("secret");

    // Validar secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      console.error("❌ Invalid secret provided");
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    console.log("✅ Webhook received from Hygraph");

    // Revalidar la ruta de noticias
    revalidatePath("/[locale]/noticias", "layout");
    revalidatePath("/[locale]/noticias/[slug]", "page");

    console.log("✅ Cache revalidated for noticias");

    return NextResponse.json(
      {
        revalidated: true,
        now: Date.now(),
        message: "Noticias actualizadas exitosamente",
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Revalidation error:", err);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: err instanceof Error ? err.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
