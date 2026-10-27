import { Resend } from "resend";
import type { ContactPayload } from "./contact-validation";

/**
 * Capa de servicio para leads del formulario de contacto.
 *
 * Hoy solo envía un correo con Resend. Se estructura como un pipeline de
 * pasos independientes para que, más adelante, se puedan agregar sin
 * rediseñar nada:
 *   - Guardar el lead en Supabase (tabla `leads`)
 *   - Registrar/crear el contacto en HubSpot
 *   - Disparar un webhook de n8n para automatizaciones
 *
 * Cada paso futuro se activa solo si su variable de entorno correspondiente
 * existe (ver `.env.example`). Si no está configurada, simplemente se omite
 * — el envío de correo nunca depende de que las demás integraciones existan.
 */

interface LeadResult {
  emailSent: boolean;
  errors: string[];
}

export async function processContactLead(payload: ContactPayload): Promise<LeadResult> {
  const errors: string[] = [];
  let emailSent = false;

  emailSent = await sendLeadEmail(payload, errors);

  // --- Punto de extensión: Supabase -----------------------------------
  // if (process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
  //   await saveLeadToSupabase(payload);
  // }

  // --- Punto de extensión: HubSpot ------------------------------------
  // if (process.env.HUBSPOT_ACCESS_TOKEN) {
  //   await upsertHubspotContact(payload);
  // }

  // --- Punto de extensión: n8n -----------------------------------------
  // if (process.env.N8N_WEBHOOK_URL) {
  //   await fetch(process.env.N8N_WEBHOOK_URL, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(payload),
  //   });
  // }

  return { emailSent, errors };
}

async function sendLeadEmail(payload: ContactPayload, errors: string[]): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    errors.push("RESEND_API_KEY o CONTACT_TO_EMAIL no están configuradas.");
    return false;
  }

  const resend = new Resend(apiKey);

  const { name, email, company, phone, message } = payload;

  const { error } = await resend.emails.send({
    from: `Portafolio Daniel Monterroso <${fromEmail}>`,
    to: [toEmail],
    replyTo: email || undefined,
    subject: `Nuevo contacto desde el portafolio — ${name}`,
    text: [
      `Nombre: ${name}`,
      `Correo: ${email}`,
      company ? `Empresa: ${company}` : null,
      phone ? `Teléfono: ${phone}` : null,
      "",
      "Mensaje:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <div style="font-family: sans-serif; font-size: 14px; color: #1C1C1C;">
        <h2 style="margin-bottom: 16px;">Nuevo contacto desde el portafolio</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Empresa:</strong> ${escapeHtml(company)}</p>` : ""}
        ${phone ? `<p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>` : ""}
        <p style="margin-top: 16px;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `,
  });

  if (error) {
    errors.push(error.message ?? "Error desconocido al enviar el correo con Resend.");
    return false;
  }

  return true;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
