import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * NumberTicker (Magic UI, MIT) adaptado a solo CSS: cuenta de 0 al valor con una
 * propiedad registrada (@property --num) y counter(). Sin JavaScript. Con
 * prefers-reduced-motion, o si el navegador no anima la propiedad, muestra el
 * valor final. El texto accesible va aparte (este elemento es decorativo).
 */
export function NumberTicker({
  value,
  className,
  delay = 0,
}: {
  value: number;
  className?: string;
  delay?: number;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("number-ticker inline-block tabular-nums", className)}
      style={{ "--num-to": value, animationDelay: `${delay}s` } as CSSProperties}
    />
  );
}
