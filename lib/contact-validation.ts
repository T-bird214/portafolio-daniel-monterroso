/**
 * Validación del formulario de contacto.
 *
 * Regla de negocio explícita del proyecto: NUNCA se debe perder un lead
 * potencial por un correo mal escrito. Por eso aquí solo se valida lo
 * estrictamente necesario para evitar spam/ataques (campos vacíos, tamaños
 * absurdos, honeypot, envío demasiado rápido) — nunca el formato exacto del
 * correo electrónico.
 */

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  /** Campo honeypot: debe llegar vacío. Si un bot lo rellena, se descarta. */
  website?: string;
  /** Marca de tiempo (ms) de cuándo se montó el formulario en el cliente. */
  formLoadedAt?: number;
}

export interface ValidationResult {
  valid: boolean;
  error?: string;
  isBot?: boolean;
}

const MAX_NAME_LENGTH = 120;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_EMAIL_LENGTH = 200;
const MIN_SUBMIT_TIME_MS = 1500; // envíos más rápidos que esto son casi siempre bots

export function validateContactPayload(payload: ContactPayload): ValidationResult {
  // Honeypot: un humano nunca llena este campo (está oculto visualmente).
  if (payload.website && payload.website.trim().length > 0) {
    return { valid: false, isBot: true, error: "honeypot" };
  }

  // Envío sospechosamente rápido -> probable bot. Se descarta en silencio.
  if (
    typeof payload.formLoadedAt === "number" &&
    Date.now() - payload.formLoadedAt < MIN_SUBMIT_TIME_MS
  ) {
    return { valid: false, isBot: true, error: "too_fast" };
  }

  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!name) {
    return { valid: false, error: "El nombre es requerido." };
  }
  if (name.length > MAX_NAME_LENGTH) {
    return { valid: false, error: "El nombre es demasiado largo." };
  }

  // Solo verificamos que el correo no esté vacío y no sea absurdamente largo.
  // Deliberadamente NO se exige un formato estricto (regex de RFC 5322):
  // preferimos recibir "danielgmail.com" mal escrito antes que perder el lead.
  if (!email) {
    return { valid: false, error: "El correo es requerido." };
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    return { valid: false, error: "El correo es demasiado largo." };
  }

  if (!message) {
    return { valid: false, error: "El mensaje es requerido." };
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return { valid: false, error: "El mensaje es demasiado largo." };
  }

  return { valid: true };
}
