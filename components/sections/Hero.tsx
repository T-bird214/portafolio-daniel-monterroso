"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import {
  FileText,
  ArrowRight,
  MessageSquare,
  Briefcase,
  GitFork,
  Mail,
  Phone,
  MapPin,
  Sparkles,
} from "lucide-react";
import { contact, heroTitles, skills } from "@/data/profile";

// Selección curada (no hardcodeada en valores, solo en qué nombres destacar)
// de 3 competencias para la mini-tarjeta del Hero. Los porcentajes siempre
// se leen de `skills` en /data/profile.ts — nunca se repiten a mano.
const HERO_FEATURED_SKILLS = [
  "Ventas & Desarrollo Comercial",
  "Operaciones & Logística",
  "Tecnología, IA & Automatización",
];
const featuredSkills = HERO_FEATURED_SKILLS.map((name) =>
  skills.find((s) => s.name === name),
).filter((s): s is (typeof skills)[number] => Boolean(s));

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#F5F5F0] pt-28 pb-16 transition-colors duration-300 dark:bg-[#161614]"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-20 dark:opacity-20"
        aria-hidden="true"
      >
        <div className="absolute top-10 right-10 h-96 w-96 rounded-full bg-[#5A5A40]/5 blur-3xl dark:bg-[#C68A3E]/5" />
        <div className="absolute bottom-10 left-10 h-96 w-96 rounded-full bg-[#C68A3E]/3 blur-3xl dark:bg-[#C68A3E]/5" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1C1C1C_1px,transparent_1px),linear-gradient(to_bottom,#1C1C1C_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] bg-[size:6rem_6rem] dark:bg-[linear-gradient(to_right,#ECECE3_1px,transparent_1px),linear-gradient(to_bottom,#ECECE3_1px,transparent_1px)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col justify-center space-y-6 text-center lg:col-span-7 lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-center border border-[#5A5A40]/20 bg-[#5A5A40]/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-wider text-[#5A5A40] uppercase lg:self-start dark:bg-[#C68A3E]/15 dark:text-[#C68A3E]"
            >
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5A5A40] opacity-75 dark:bg-[#C68A3E]" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5A5A40] dark:bg-[#C68A3E]" />
              </span>
              <span>Disponible para Nuevos Retos Directivos / Gerenciales</span>
            </motion.div>

            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl leading-[1.1] font-normal tracking-tight text-[#1C1C1C] sm:text-5xl md:text-6xl dark:text-[#ECECE3]"
              >
                {contact.fullName}
              </motion.h1>

              <div
                className="flex h-10 items-center justify-center overflow-hidden sm:h-12 lg:justify-start"
                aria-live="polite"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="font-display flex items-center gap-2 text-lg font-medium text-[#5A5A40] italic sm:text-xl md:text-2xl dark:text-[#C68A3E]"
                  >
                    <Sparkles className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                    <span>{heroTitles[index]}</span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-2xl text-base leading-relaxed font-light text-[#6A6A5E] sm:text-lg lg:mx-0 dark:text-[#A2A292]"
            >
              Más de 10 años combinando ventas, operaciones y tecnología para generar resultados de
              negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs tracking-wider text-[#6A6A5E] uppercase lg:justify-start dark:text-[#A2A292]"
            >
              <div className="flex items-center gap-1.5">
                <MapPin
                  size={13}
                  className="text-[#5A5A40] dark:text-[#C68A3E]"
                  aria-hidden="true"
                />
                <span>{contact.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-[#C68A3E]" aria-hidden="true">
                  ●
                </span>
                <span>
                  {contact.currentRole} @ {contact.currentCompany}
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-3 pt-4 sm:flex-row lg:justify-start"
            >
              <a
                href="/cv/CV_Daniel_Monterroso.pdf"
                download
                className="group inline-flex w-full items-center justify-center gap-2 rounded bg-[#1C1C1C] px-6 py-3 text-xs font-semibold tracking-wider text-[#F5F5F0] uppercase transition-all hover:bg-[#5A5A40] sm:w-auto dark:bg-[#ECECE3] dark:text-[#161614] dark:hover:bg-[#C68A3E]"
              >
                <FileText size={14} aria-hidden="true" />
                <span>Descargar CV</span>
              </a>

              <a
                href="#contacto"
                className="group inline-flex w-full items-center justify-center gap-2 rounded border border-[#1C1C1C]/20 bg-transparent px-6 py-3 text-xs font-semibold tracking-wider text-[#1C1C1C] uppercase transition-all hover:bg-[#1C1C1C]/5 sm:w-auto dark:border-[#ECECE3]/20 dark:text-[#ECECE3] dark:hover:bg-[#ECECE3]/5"
              >
                <span>Hablemos de Negocios</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center justify-center gap-3 pt-6 lg:justify-start"
            >
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-[#1C1C1C]/10 bg-transparent p-3 text-[#6A6A5E] transition-all hover:border-[#1C1C1C]/30 hover:text-[#1C1C1C] dark:border-[#ECECE3]/10 dark:text-[#A2A292] dark:hover:border-[#ECECE3]/30 dark:hover:text-[#ECECE3]"
                title="LinkedIn"
                aria-label="LinkedIn de Daniel Monterroso"
              >
                <Briefcase size={16} />
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-[#1C1C1C]/10 bg-transparent p-3 text-[#6A6A5E] transition-all hover:border-[#1C1C1C]/30 hover:text-[#1C1C1C] dark:border-[#ECECE3]/10 dark:text-[#A2A292] dark:hover:border-[#ECECE3]/30 dark:hover:text-[#ECECE3]"
                title="GitHub"
                aria-label="GitHub de Daniel Monterroso"
              >
                <GitFork size={16} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="rounded border border-[#1C1C1C]/10 bg-transparent p-3 text-[#6A6A5E] transition-all hover:border-[#1C1C1C]/30 hover:text-[#1C1C1C] dark:border-[#ECECE3]/10 dark:text-[#A2A292] dark:hover:border-[#ECECE3]/30 dark:hover:text-[#ECECE3]"
                title="Enviar Correo"
                aria-label="Enviar correo a Daniel Monterroso"
              >
                <Mail size={16} />
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="rounded border border-[#1C1C1C]/10 bg-transparent p-3 text-[#6A6A5E] transition-all hover:border-[#1C1C1C]/30 hover:text-[#1C1C1C] dark:border-[#ECECE3]/10 dark:text-[#A2A292] dark:hover:border-[#ECECE3]/30 dark:hover:text-[#ECECE3]"
                title="WhatsApp Directo"
                aria-label="Escribir a Daniel por WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="rounded border border-[#1C1C1C]/10 bg-transparent p-3 text-[#6A6A5E] transition-all hover:border-[#1C1C1C]/30 hover:text-[#1C1C1C] dark:border-[#ECECE3]/10 dark:text-[#A2A292] dark:hover:border-[#ECECE3]/30 dark:hover:text-[#ECECE3]"
                title="Llamar Directo"
                aria-label="Llamar a Daniel Monterroso"
              >
                <Phone size={16} />
              </a>
            </motion.div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="group relative w-full max-w-sm overflow-hidden rounded border border-[#1C1C1C]/10 bg-[#F5F5F0] p-6 shadow-sm sm:max-w-md sm:p-8 dark:border-[#ECECE3]/10 dark:bg-[#1C1C1C]"
            >
              <div className="mb-6 flex items-center justify-between border-b border-[#1C1C1C]/10 pb-4 dark:border-[#ECECE3]/10">
                <div className="flex items-center gap-2 font-mono text-[9px] tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
                  <span>[N° 01] / PERFIL</span>
                </div>
                <div className="font-mono text-[9px] tracking-wider text-[#6A6A5E] dark:text-[#A2A292]">
                  GUATEMALA
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#5A5A40]/10 opacity-40 blur-lg transition-all duration-500 group-hover:opacity-60 dark:bg-[#C68A3E]/10" />
                  <div className="relative h-32 w-32 overflow-hidden rounded-full border border-[#1C1C1C]/15 dark:border-[#ECECE3]/15">
                    <Image
                      src="/images/daniel-monterroso.jpg"
                      alt={`Foto de perfil de ${contact.fullName}`}
                      fill
                      priority
                      sizes="128px"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute right-1 bottom-1 rounded border border-white bg-[#5A5A40] p-1.5 text-white shadow dark:border-[#1C1C1C] dark:bg-[#C68A3E]">
                    <Sparkles size={12} aria-hidden="true" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="font-display text-lg font-medium text-[#1C1C1C] dark:text-[#ECECE3]">
                    {contact.fullName}
                  </div>
                  <div className="font-mono text-[10px] font-medium tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
                    {contact.currentRole}
                  </div>
                  <div className="text-xs text-[#6A6A5E] dark:text-[#A2A292]">
                    {contact.currentCompany} · {contact.location}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#1C1C1C]/10 pt-6 dark:border-[#ECECE3]/10">
                {featuredSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-1 flex items-center justify-between font-mono text-[10px] tracking-widest text-[#6A6A5E] uppercase dark:text-[#A2A292]">
                      <span>{skill.name}</span>
                      <span className="font-bold text-[#1C1C1C] dark:text-[#ECECE3]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[2px] w-full overflow-hidden bg-[#1C1C1C]/10 dark:bg-[#ECECE3]/10">
                      <div
                        className="h-full bg-[#5A5A40] dark:bg-[#C68A3E]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between font-mono text-[9px] text-[#6A6A5E] uppercase dark:text-[#A2A292]">
                <span>{contact.fullName}</span>
                <span>Guatemala</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
