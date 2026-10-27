"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Briefcase, Landmark } from "lucide-react";
import { experience, crossCuttingNote } from "@/data/profile";

export default function Timeline() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="experiencia"
      className="bg-[#F5F5F0] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#161614]"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#5A5A40] uppercase dark:text-[#C68A3E]">
            Experiencia
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Trayectoria profesional
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex gap-3 rounded border border-[#5A5A40]/25 bg-[#5A5A40]/5 p-5 dark:border-[#C68A3E]/25 dark:bg-[#C68A3E]/5"
        >
          <Landmark
            className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#5A5A40] dark:text-[#C68A3E]"
            aria-hidden="true"
          />
          <div>
            <h3 className="font-display text-base text-[#1C1C1C] dark:text-[#ECECE3]">
              {crossCuttingNote.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-[#6A6A5E] dark:text-[#A2A292]">
              {crossCuttingNote.description}
            </p>
          </div>
        </motion.div>

        <ol className="space-y-3">
          {experience.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `experiencia-panel-${i}`;
            const buttonId = `experiencia-boton-${i}`;
            return (
              <motion.li
                key={`${item.company}-${item.period}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="overflow-hidden rounded border border-[#1C1C1C]/10 bg-white/40 dark:border-[#ECECE3]/10 dark:bg-white/[0.02]"
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-[#1C1C1C]/[0.02] dark:hover:bg-[#ECECE3]/[0.02]"
                  >
                    <span className="flex items-start gap-3">
                      <Briefcase
                        className="mt-1 h-4 w-4 flex-shrink-0 text-[#5A5A40] dark:text-[#C68A3E]"
                        aria-hidden="true"
                      />
                      <span>
                        <span className="font-display block text-base text-[#1C1C1C] sm:text-lg dark:text-[#ECECE3]">
                          {item.role}
                        </span>
                        <span className="mt-0.5 block font-mono text-xs text-[#6A6A5E] dark:text-[#A2A292]">
                          {item.company} · {item.period}
                        </span>
                      </span>
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 flex-shrink-0 text-[#6A6A5E] transition-transform duration-300 dark:text-[#A2A292] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                  className="px-5 pb-5"
                >
                  <ul className="space-y-2 pl-7">
                    {item.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="list-disc text-sm leading-relaxed text-[#3A3A32] marker:text-[#5A5A40] dark:text-[#D5D5C8] dark:marker:text-[#C68A3E]"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
