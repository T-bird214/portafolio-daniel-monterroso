import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Aparición al hacer scroll solo con CSS (animation-timeline: view()).
 * Sin JavaScript: el contenido siempre es visible si el navegador no lo soporta
 * o si el usuario pide movimiento reducido.
 */
export function Reveal({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("reveal", className)} {...props} />;
}
