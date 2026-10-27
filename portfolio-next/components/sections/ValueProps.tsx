"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { valueProps } from "@/data/profile";

export default function ValueProps() {
  return (
    <section
      id="propuesta"
      className="bg-[#EFEFE7] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#1A1A18]"
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
            Propuesta de valor
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Qué aporto a un equipo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {valueProps.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex gap-3 rounded border border-[#1C1C1C]/10 bg-white/50 p-5 dark:border-[#ECECE3]/10 dark:bg-white/[0.02]"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#5A5A40] dark:text-[#C68A3E]"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-[#3A3A32] dark:text-[#D5D5C8]">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
