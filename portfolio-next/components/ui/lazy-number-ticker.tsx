"use client";

import { useEffect, useState, type ComponentProps } from "react";
import type { NumberTicker } from "@/components/ui/number-ticker";

type Props = ComponentProps<typeof NumberTicker>;

/**
 * Carga NumberTicker (Magic UI) en un chunk aparte. Mientras tanto, y con
 * prefers-reduced-motion, muestra el valor final: la cifra siempre es correcta.
 */
export function LazyNumberTicker(props: Props) {
  const [Ticker, setTicker] = useState<typeof NumberTicker | null>(null);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let alive = true;
    import("@/components/ui/number-ticker").then((m) => {
      if (alive) setTicker(() => m.NumberTicker);
    });
    return () => {
      alive = false;
    };
  }, []);
  if (Ticker) return <Ticker {...props} />;
  return (
    <span className={props.className} style={{ display: "inline-block" }}>
      {new Intl.NumberFormat("en-US").format(props.value)}
    </span>
  );
}
