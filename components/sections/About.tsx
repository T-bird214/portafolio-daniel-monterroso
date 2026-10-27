"use client";

import { motion } from "motion/react";
import { Target, Layers, Rocket } from "lucide-react";
import { contact } from "@/data/profile";

// Los "pilares" son un recurso editorial (cómo se agrupa el texto), no datos
// cuantitativos — por eso viven aquí y no en /data/profile.ts, a diferencia
// de cifras o logros que sí deben ser 100% trazables a la fuente de verdad.
const pillars = [
  {
    icon: Target,
    title: "Resultados de negocio",
    description:
      "Ventas, cierres comerciales y cumplimiento de objetivos como hilo conductor de cada rol.",
  },
  {
    icon: Layers,
    title: "Operación & liderazgo",
    description:
      "Coordinación de equipos, procesos y logística en industrias con alta exigencia operativa.",
  },
  {
    icon: Rocket,
    title: "Tecnología aplicada",
    description:
      "IA y automatización como herramienta diaria para resolver problemas reales de negocio.",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
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
            Sobre mí
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Ventas, operaciones y tecnología en una misma trayectoria
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center text-base leading-relaxed text-[#3A3A32] sm:text-lg dark:text-[#D5D5C8]"
        >
          {contact.fullName} es un profesional guatemalteco con más de 10 años de experiencia
          combinando ventas y desarrollo comercial, servicio al cliente, operaciones, administración
          y liderazgo, desarrollada en industrias diversas: telecomunicaciones, retail, tecnología,
          transporte, seguridad y educación superior. Complementa esta trayectoria con formación
          activa en tecnología, inteligencia artificial, automatización y desarrollo web — uniendo
          experiencia comercial, administrativa y tecnológica para resolver problemas reales de
          negocio.
        </motion.p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-on-hover rounded border border-[#1C1C1C]/10 bg-white/40 p-6 transition-shadow dark:border-[#ECECE3]/10 dark:bg-white/[0.02]"
            >
              <pillar.icon
                className="h-5 w-5 text-[#5A5A40] dark:text-[#C68A3E]"
                aria-hidden="true"
              />
              <h3 className="font-display mt-4 text-lg text-[#1C1C1C] dark:text-[#ECECE3]">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6A6A5E] dark:text-[#A2A292]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
