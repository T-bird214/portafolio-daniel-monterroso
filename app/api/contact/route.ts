import { NextResponse } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/contact-validation";
import { processContactLead } from "@/lib/lead-service";
import { isRateLimited } from "@/lib/rate-limit";

export async function POST(request: Request) {
  // IP del visitante para rate limiting (Vercel la expone en este header).
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { ok: false, message: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }

  const validation = validateContactPayload(payload);

  if (!validation.valid) {
    // Si detectamos un bot (honeypot / envío demasiado rápido), respondemos
    // con éxito falso a propósito: no le damos información al bot sobre
    // por qué falló, y evitamos que reintente con otra estrategia.
    if (validation.isBot) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: false, message: validation.error }, { status: 400 });
  }

  const result = await processContactLead(payload);

  if (!result.emailSent) {
    console.error("Fallo al procesar lead de contacto:", result.errors);
    return NextResponse.json(
      {
        ok: false,
        message:
          "No se pudo enviar tu mensaje en este momento. Por favor intenta por WhatsApp o escribe directamente al correo.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
