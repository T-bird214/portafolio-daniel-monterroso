"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function CustomCursor() {
  // Solo se activa en dispositivos con puntero fino (mouse/trackpad) y
  // cuando el usuario NO ha pedido movimiento reducido en su sistema.
  // Ambos valores se derivan de forma pura (useSyncExternalStore por debajo),
  // sin necesidad de sincronizarlos a mano con setState + useEffect.
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const prefersReducedMotion = useReducedMotion();
  const enabled = isFinePointer && !prefersReducedMotion;

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 300 });

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 12);
      cursorY.set(e.clientY - 12);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [enabled, cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[999] h-6 w-6 rounded-full bg-[#5A5A40]/20 mix-blend-multiply dark:bg-[#C68A3E]/25 dark:mix-blend-screen"
      style={{ x: springX, y: springY }}
    />
  );
}
