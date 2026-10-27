/** Best effort per instance. Use a shared limiter for distributed traffic. */
const WINDOW_MS = 60_000;
const MAX_KEYS = 10_000;
const requestLog = new Map<string, { count: number; expires: number }>();
export function isRateLimited(identifier: string): boolean {
  const now = Date.now();
  if (requestLog.size >= MAX_KEYS) {
    for (const [key, entry] of requestLog) {
      if (entry.expires <= now) requestLog.delete(key);
    }
    if (requestLog.size >= MAX_KEYS && !requestLog.has(identifier)) return true;
  }
  const entry = requestLog.get(identifier);
  if (!entry || entry.expires <= now) {
    requestLog.set(identifier, { count: 1, expires: now + WINDOW_MS });
    return false;
  }
  if (entry.count >= 5) return true;
  entry.count++;
  return false;
}
