"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Monta efectos decorativos solo cuando el navegador está libre y, opcionalmente,
 * solo si se cumple una media query (p. ej. pantallas de 640 px o más).
 * Nunca los monta con prefers-reduced-motion. Mantiene el primer render ligero.
 */
export function WhenIdle({ children, media }: { children: ReactNode; media?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (media && !window.matchMedia(media).matches) return;
    const w = window as Window & {
      requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setReady(true), { timeout: 2500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, [media]);
  return ready ? <>{children}</> : null;
}
