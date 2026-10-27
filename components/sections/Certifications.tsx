"use client";

import { motion } from "motion/react";
import { GraduationCap, Award, Building2, Languages as LanguagesIcon } from "lucide-react";
import { education, certifications, internalTraining, languages } from "@/data/profile";

export default function Certifications() {
  return (
    <section className="bg-[#EFEFE7] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#1A1A18]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#5A5A40] uppercase dark:text-[#C68A3E]">
            Formación
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Educación y certificaciones
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
              <GraduationCap size={14} aria-hidden="true" /> Educación
            </h3>
            <ul className="space-y-4">
              {education.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-[#5A5A40]/30 pl-4 dark:border-[#C68A3E]/30"
                >
                  <p className="text-sm font-medium text-[#1C1C1C] dark:text-[#ECECE3]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#6A6A5E] dark:text-[#A2A292]">
                    {item.institution}
                    {item.period ? ` · ${item.period}` : ""}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
              <Building2 size={14} aria-hidden="true" /> Capacitación interna
            </h3>
            <ul className="space-y-4">
              {internalTraining.map((item) => (
                <li
                  key={item.company}
                  className="border-l-2 border-[#5A5A40]/30 pl-4 dark:border-[#C68A3E]/30"
                >
                  <p className="text-sm font-medium text-[#1C1C1C] dark:text-[#ECECE3]">
                    {item.company}
                  </p>
                  <p className="text-xs text-[#6A6A5E] dark:text-[#A2A292]">{item.topics}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
              <Award size={14} aria-hidden="true" /> Certificaciones
            </h3>
            <ul className="space-y-4">
              {certifications.map((item) => (
                <li
                  key={item.title}
                  className="border-l-2 border-[#5A5A40]/30 pl-4 dark:border-[#C68A3E]/30"
                >
                  <p className="text-sm font-medium text-[#1C1C1C] dark:text-[#ECECE3]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#6A6A5E] dark:text-[#A2A292]">
                    {item.institution}
                    {item.period ? ` · ${item.period}` : ""}
                  </p>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 mb-4 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
              <LanguagesIcon size={14} aria-hidden="true" /> Idiomas
            </h3>
            <ul className="space-y-3">
              {languages.map((lang) => (
                <li key={lang.name}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-[#3A3A32] dark:text-[#D5D5C8]">
                      {lang.name}
                      {lang.level ? ` · ${lang.level}` : ""}
                    </span>
                    <span className="font-mono text-[#6A6A5E] dark:text-[#A2A292]">
                      {lang.pct}%
                    </span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-[#1C1C1C]/10 dark:bg-[#ECECE3]/10">
                    <div
                      className="h-full rounded-full bg-[#5A5A40] dark:bg-[#C68A3E]"
                      style={{ width: `${lang.pct}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
