import { NextResponse } from "next/server";
import { validateContactPayload, type ContactPayload } from "@/lib/contact-validation";
import { processContactLead } from "@/lib/lead-service";
import { isRateLimited } from "@/lib/rate-limit";
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.toLowerCase().startsWith("application/json"))
    return NextResponse.json({ ok: false, message: "Se requiere JSON." }, { status: 415 });
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip))
    return NextResponse.json(
      { ok: false, message: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  let payload: unknown;
  try {
    const raw = await request.text();
    if (new TextEncoder().encode(raw).length > 24000)
      return NextResponse.json(
        { ok: false, message: "Mensaje demasiado grande." },
        { status: 413 },
      );
    payload = JSON.parse(raw);
  } catch {
    return NextResponse.json({ ok: false, message: "Solicitud inválida." }, { status: 400 });
  }
  const validation = validateContactPayload(payload);
  if (!validation.valid) {
    if (validation.isBot) return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, message: validation.error }, { status: 400 });
  }
  const p = payload as ContactPayload;
  try {
    const result = await processContactLead({
      ...p,
      name: p.name.trim(),
      email: p.email.trim(),
      message: p.message.trim(),
    });
    if (result.emailSent) return NextResponse.json({ ok: true });
  } catch {
    console.error("No se pudo procesar el formulario de contacto.");
  }
  return NextResponse.json(
    { ok: false, message: "No se pudo enviar. Escríbeme por WhatsApp o por correo." },
    { status: 502 },
  );
}
