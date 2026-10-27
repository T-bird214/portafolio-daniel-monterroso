"use client";

import { motion } from "motion/react";
import { skills } from "@/data/profile";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="bg-[#EFEFE7] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#1A1A18]"
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
            Competencias
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Dónde aporto más valor
          </h2>
        </motion.div>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <div className="mb-1.5 flex items-baseline justify-between">
                <span className="text-sm font-medium text-[#1C1C1C] dark:text-[#ECECE3]">
                  {skill.name}
                </span>
                <span className="font-mono text-xs text-[#6A6A5E] dark:text-[#A2A292]">
                  {skill.level}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#1C1C1C]/10 dark:bg-[#ECECE3]/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-[#5A5A40] dark:bg-[#C68A3E]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
