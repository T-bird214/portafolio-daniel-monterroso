"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useHasMounted } from "@/lib/useHasMounted";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Send } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Sobre mí", href: "#sobre-mi" },
  { name: "Propuesta", href: "#propuesta" },
  { name: "Experiencia", href: "#experiencia" },
  { name: "Habilidades", href: "#habilidades" },
  { name: "Sectores", href: "#sectores" },
  { name: "Logros", href: "#logros" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mounted = useHasMounted();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (!element) return;
    setIsOpen(false);
    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
  };

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-[#1C1C1C]/10 bg-[#F5F5F0]/90 py-3 shadow-sm backdrop-blur-md dark:border-[#ECECE3]/10 dark:bg-[#161614]/90"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a
            href="#inicio"
            onClick={(e) => handleScrollTo(e, "#inicio")}
            className="group flex cursor-pointer flex-col"
          >
            <span className="font-display text-lg font-medium tracking-widest text-[#1C1C1C] uppercase transition-colors dark:text-[#ECECE3]">
              Daniel Monterroso
            </span>
            <span className="mt-0.5 font-mono text-[9px] font-medium tracking-widest text-[#5A5A40] uppercase dark:text-[#C68A3E]">
              Gerencia &amp; Operaciones
            </span>
          </a>

          <nav className="hidden items-center space-x-1 lg:flex" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium tracking-wider text-[#6A6A5E] uppercase transition-colors duration-200 hover:text-[#1C1C1C] dark:text-[#A2A292] dark:hover:text-[#ECECE3]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="hidden items-center space-x-4 sm:flex">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="rounded-md bg-[#1C1C1C]/5 p-2 text-[#6A6A5E] transition-colors hover:text-[#1C1C1C] dark:bg-[#ECECE3]/5 dark:text-[#A2A292] dark:hover:text-[#ECECE3]"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <a
              href="#contacto"
              onClick={(e) => handleScrollTo(e, "#contacto")}
              className="inline-flex items-center gap-1.5 rounded bg-[#1C1C1C] px-4 py-2 text-xs font-semibold tracking-wider text-[#F5F5F0] uppercase transition-all duration-300 hover:bg-[#5A5A40] dark:bg-[#ECECE3] dark:text-[#161614] dark:hover:bg-[#C68A3E]"
            >
              <Send size={12} aria-hidden="true" />
              <span>Contactar</span>
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="rounded-md bg-[#1C1C1C]/5 p-2 text-[#6A6A5E] transition-colors hover:text-[#1C1C1C] dark:bg-[#ECECE3]/5 dark:text-[#A2A292] dark:hover:text-[#ECECE3]"
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-[#6A6A5E] transition-colors hover:bg-[#1C1C1C]/5 dark:text-[#A2A292] dark:hover:bg-[#ECECE3]/5"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-[#1C1C1C]/10 bg-[#F5F5F0] lg:hidden dark:border-[#ECECE3]/10 dark:bg-[#161614]"
          >
            <nav className="space-y-1 px-4 pt-2 pb-6" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block rounded px-3 py-2 text-sm font-medium tracking-wider text-[#6A6A5E] uppercase transition-all hover:bg-[#1C1C1C]/5 hover:text-[#1C1C1C] dark:text-[#A2A292] dark:hover:bg-[#ECECE3]/5 dark:hover:text-[#ECECE3]"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col gap-2 px-3 pt-4">
                <a
                  href="#contacto"
                  onClick={(e) => handleScrollTo(e, "#contacto")}
                  className="w-full rounded bg-[#1C1C1C] px-4 py-2.5 text-center text-xs font-semibold tracking-wider text-[#F5F5F0] uppercase transition-all hover:bg-[#5A5A40] dark:bg-[#ECECE3] dark:text-[#161614] dark:hover:bg-[#C68A3E]"
                >
                  Contactar Daniel
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
