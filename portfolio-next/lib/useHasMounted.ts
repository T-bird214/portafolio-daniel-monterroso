import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

/**
 * Indica si el componente ya se hidrató en el cliente.
 *
 * Reemplaza el patrón clásico `useState(false) + useEffect(() => setTrue())`
 * (necesario para evitar mismatches de hidratación con next-themes) por
 * `useSyncExternalStore`, que no dispara la regla de lint
 * `react-hooks/set-state-in-effect` porque no llama a ningún setState desde
 * un efecto — el valor se deriva de forma pura en cada render.
 */
export function useHasMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
