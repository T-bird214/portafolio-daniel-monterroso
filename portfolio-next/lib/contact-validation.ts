export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  website?: string;
  formLoadedAt?: number;
}
export interface ValidationResult {
  valid: boolean;
  error?: string;
  isBot?: boolean;
}
export function validateContactPayload(payload: unknown): ValidationResult {
  if (!payload || typeof payload !== "object" || Array.isArray(payload))
    return { valid: false, error: "Solicitud inválida." };
  const p = payload as Record<string, unknown>;
  for (const [field, max] of [
    ["name", 120],
    ["email", 200],
    ["message", 5000],
  ] as const) {
    if (typeof p[field] !== "string" || !p[field].trim() || p[field].length > max)
      return {
        valid: false,
        error: `Revisa el campo ${field === "name" ? "nombre" : field === "email" ? "correo" : "mensaje"}.`,
      };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((p.email as string).trim()))
    return { valid: false, error: "Ingresa un correo electrónico válido." };
  for (const [field, max] of [
    ["company", 200],
    ["phone", 50],
    ["website", 200],
  ] as const) {
    if (p[field] !== undefined && (typeof p[field] !== "string" || p[field].length > max))
      return { valid: false, error: "Campos opcionales inválidos." };
  }
  if (
    p.formLoadedAt !== undefined &&
    p.formLoadedAt !== null &&
    (typeof p.formLoadedAt !== "number" || !Number.isFinite(p.formLoadedAt))
  )
    return { valid: false, error: "Solicitud inválida." };
  if (typeof p.website === "string" && p.website.trim()) return { valid: false, isBot: true };
  return { valid: true };
}
