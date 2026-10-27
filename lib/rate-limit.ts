/**
 * Rate limiting mínimo en memoria, por IP.
 *
 * Limitación conocida: en funciones serverless de Vercel cada instancia
 * "fría" tiene su propia memoria, así que este límite es "best effort" y NO
 * es una protección robusta contra un ataque distribuido. Es suficiente
 * para frenar el abuso casual de un formulario público de bajo tráfico.
 *
 * Si el formulario empieza a recibir spam real, el siguiente paso
 * recomendado es Upstash Redis (@upstash/ratelimit), que sí es consistente
 * entre invocaciones — se documenta como mejora futura en el README.
 */

const WINDOW_MS = 60_000; // 1 minuto
const MAX_REQUESTS_PER_WINDOW = 5;

const requestLog = new Map<string, number[]>();

export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  const timestamps = (requestLog.get(identifier) ?? []).filter((ts) => now - ts < WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    requestLog.set(identifier, timestamps);
    return true;
  }

  timestamps.push(now);
  requestLog.set(identifier, timestamps);
  return false;
}
