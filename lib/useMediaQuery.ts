import { useSyncExternalStore } from "react";

function subscribe(query: string) {
  return (callback: () => void) => {
    if (typeof window === "undefined") return () => {};
    const mql = window.matchMedia(query);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
  };
}

/**
 * Hook SSR-safe para media queries (ej. `(pointer: fine)`).
 * Usa `useSyncExternalStore` en vez de `useState` + `useEffect` para que el
 * valor se derive de forma pura y no dispare `react-hooks/set-state-in-effect`.
 */
export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    subscribe(query),
    () => window.matchMedia(query).matches,
    () => false,
  );
}
