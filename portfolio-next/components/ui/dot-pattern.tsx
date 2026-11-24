import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * DotPattern (Magic UI, MIT) adaptado a solo CSS: el original medía el contenedor
 * con JavaScript y dibujaba cada punto como un <circle>. Aquí es un único
 * radial-gradient repetido: mismo resultado visual, cero JavaScript y un solo nodo.
 */
interface DotPatternProps {
  width?: number;
  height?: number;
  cr?: number;
  className?: string;
}

export function DotPattern({ width = 16, height = 16, cr = 1, className }: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className,
      )}
      style={
        {
          backgroundImage: `radial-gradient(circle at ${cr}px ${cr}px, currentColor ${cr}px, transparent ${cr + 0.5}px)`,
          backgroundSize: `${width}px ${height}px`,
        } as CSSProperties
      }
    />
  );
}
