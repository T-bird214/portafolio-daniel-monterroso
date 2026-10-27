"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { achievementsHighlight } from "@/data/profile";

// Nota: la versión anterior de este componente incluía un desplegable
// "Bitácora Completa de Logros Laborales" con 18 logros adicionales.
// Se eliminó a solicitud explícita de Daniel (ver AUDITORIA_PROYECTO.md,
// hallazgo 4.1): esa lista contenía cifras no verificadas contra la fuente
// de verdad. Solo se muestran los 6 logros que sí están respaldados 1:1.

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value);

  const numericMatch = value.match(/[\d,]+/);
  const numericValue = numericMatch ? parseInt(numericMatch[0].replace(/,/g, ""), 10) : null;

  useEffect(() => {
    // `display` ya se inicializó como `value` en el useState de arriba, así
    // que si todavía no está en vista (o no hay número que animar) no hace
    // falta volver a llamar setDisplay aquí.
    if (!isInView || numericValue === null) {
      return;
    }

    const duration = 900;
    const start = performance.now();
    const prefix = value.slice(0, value.indexOf(numericMatch![0]));
    const suffix = value.slice(value.indexOf(numericMatch![0]) + numericMatch![0].length);

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.round(numericValue * progress);
      setDisplay(`${prefix}${current.toLocaleString("en-US")}${suffix}`);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return <span ref={ref}>{display}</span>;
}

export default function Achievements() {
  return (
    <section
      id="logros"
      className="bg-[#F5F5F0] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#161614]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#5A5A40] uppercase dark:text-[#C68A3E]">
            Logros
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Resultados que respaldan la trayectoria
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {achievementsHighlight.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded border border-[#1C1C1C]/10 bg-white/40 p-5 text-center sm:p-6 dark:border-[#ECECE3]/10 dark:bg-white/[0.02]"
            >
              <div className="font-display text-2xl text-[#5A5A40] sm:text-3xl dark:text-[#C68A3E]">
                <Counter value={item.value} />
              </div>
              <p className="mt-2 text-xs leading-snug text-[#6A6A5E] dark:text-[#A2A292]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
