"use client";

import { motion } from "motion/react";
import {
  ShoppingBag,
  Cpu,
  Radio,
  GraduationCap,
  Truck,
  ShieldCheck,
  Factory,
  type LucideIcon,
} from "lucide-react";
import { sectors } from "@/data/profile";

// Mapeo puramente visual (ícono por sector) — el listado de sectores en sí
// viene de /data/profile.ts, esto solo decide cómo se dibuja cada uno.
const sectorIcons: Record<string, LucideIcon> = {
  Retail: ShoppingBag,
  Tecnología: Cpu,
  Telecomunicaciones: Radio,
  "Educación Superior": GraduationCap,
  "Transporte y Logística": Truck,
  Seguridad: ShieldCheck,
  Industria: Factory,
};

export default function Sectors() {
  return (
    <section
      id="sectores"
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
            Sectores
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Industrias donde he trabajado
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {sectors.map((sector, i) => {
            const Icon = sectorIcons[sector] ?? Factory;
            return (
              <motion.div
                key={sector}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 rounded border border-[#1C1C1C]/10 bg-white/40 p-5 text-center dark:border-[#ECECE3]/10 dark:bg-white/[0.02]"
              >
                <Icon className="h-6 w-6 text-[#5A5A40] dark:text-[#C68A3E]" aria-hidden="true" />
                <span className="text-xs font-medium text-[#3A3A32] dark:text-[#D5D5C8]">
                  {sector}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
