"use client";

import { motion } from "motion/react";
import { tools } from "@/data/profile";

const categoryLabels: Record<keyof typeof tools, string> = {
  crm: "CRM",
  erpHelpdesk: "ERP / Help Desk",
  productivity: "Productividad",
  communication: "Comunicación",
  ai: "Inteligencia Artificial",
  techDev: "Tecnología / Desarrollo",
};

export default function Tools() {
  const categories = Object.keys(tools) as Array<keyof typeof tools>;

  return (
    <section className="bg-[#EFEFE7] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#1A1A18]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#5A5A40] uppercase dark:text-[#C68A3E]">
            Herramientas
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Stack y herramientas de trabajo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded border border-[#1C1C1C]/10 bg-white/40 p-5 dark:border-[#ECECE3]/10 dark:bg-white/[0.02]"
            >
              <h3 className="mb-3 font-mono text-[10px] tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
                {categoryLabels[category]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools[category].map((tool) => (
                  <span
                    key={tool}
                    className="rounded border border-[#1C1C1C]/10 bg-[#1C1C1C]/5 px-2.5 py-1 text-xs text-[#3A3A32] dark:border-[#ECECE3]/10 dark:bg-[#ECECE3]/5 dark:text-[#D5D5C8]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
