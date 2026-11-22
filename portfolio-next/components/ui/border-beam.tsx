import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * BorderBeam (Magic UI, MIT) adaptado a solo CSS: el original animaba
 * offset-distance con motion (JavaScript por cuadro). Aquí la animación es un
 * @keyframes de CSS (`border-beam` en globals.css). Se oculta con
 * prefers-reduced-motion.
 */
interface BorderBeamProps {
  size?: number;
  duration?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
  borderWidth?: number;
}

export function BorderBeam({
  className,
  size = 50,
  duration = 6,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  borderWidth = 1,
}: BorderBeamProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border-(length:--border-beam-width) border-transparent mask-[linear-gradient(transparent,transparent),linear-gradient(#000,#000)] mask-intersect [mask-clip:padding-box,border-box] motion-reduce:hidden"
      style={{ "--border-beam-width": `${borderWidth}px` } as CSSProperties}
    >
      <div
        className={cn(
          "border-beam-dot absolute aspect-square bg-linear-to-l from-(--color-from) via-(--color-to) to-transparent",
          className,
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            animationDuration: `${duration}s`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
          } as CSSProperties
        }
      />
    </div>
  );
}
