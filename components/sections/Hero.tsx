"use client";
import Image from "next/image";
import portrait from "@/public/images/daniel-monterroso.jpg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
const titles = [
  "Gerente de Operaciones",
  "Fundador de EvoNest",
  "Estratega Comercial B2B",
  "Tecnología aplicada al negocio",
];
export default function Hero() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % titles.length), 3800);
    return () => clearInterval(timer);
  }, [reduced]);
  return (
    <section id="inicio" className="hero wrap">
      <div className="hero-topline">
        <span className="eyebrow">
          <i className="status-dot" /> GUATEMALA · VISIÓN GLOBAL
        </span>
        <span className="folio">PORTAFOLIO EJECUTIVO / 2026</span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="role-rotation">
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reduced ? 0 : -8 }}
                transition={{ duration: reduced ? 0 : 0.25 }}
              >
                {titles[index]}
              </motion.p>
            </AnimatePresence>
          </div>
          <h1>
            Daniel
            <br />
            <span>Monterroso</span>
            <span className="name-dot">.</span>
          </h1>
          <p className="hero-description">
            Conecto <strong>estrategia, personas y tecnología</strong> para transformar operaciones
            en resultados de negocio.
          </p>
          <div className="hero-ctas">
            <a className="button primary" href="#contacto">
              Conversemos <ArrowUpRight size={18} />
            </a>
            <a className="button secondary" href="/cv/CV_Daniel_Monterroso.pdf" download>
              Descargar CV <Download size={17} />
            </a>
          </div>
          <p className="education-badge">
            🎓 Lic. Administración de Empresas · UVG
            <br />
            <span>Programa AVE · EN CURSO</span>
          </p>
        </div>
        <div className="portrait-composition">
          <div className="portrait-frame">
            <Image
              src={portrait}
              alt="Retrato de Daniel Monterroso"
              fill
              priority
              quality={90}
              sizes="(max-width: 700px) calc(100vw - 52px), (max-width: 1000px) 40vw, 420px"
              className="portrait"
            />
            <div className="portrait-shade" />
            <span className="portrait-corner">DM / GT</span>
            <div className="portrait-caption">
              <span>ESTRATEGIA CON EJECUCIÓN.</span>
              <p>
                De la visión
                <br />
                al siguiente nivel.
              </p>
            </div>
          </div>
          <a
            className="founder-card depth-card"
            href="https://evonest.company/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="founder-mark">E↗</span>
            <span>
              <small>CONSTRUYENDO EL FUTURO</small>
              <strong>EvoNest</strong>
              <span>Fundador · Consultoría B2B</span>
            </span>
            <ArrowUpRight size={20} />
          </a>
        </div>
      </div>
      <div className="hero-bottom">
        <div>
          <strong>10+ años</strong>
          <span>Ventas, operaciones y liderazgo</span>
        </div>
        <div>
          <strong>USD 300k</strong>
          <span>Mayor venta individual registrada</span>
        </div>
        <div>
          <strong>Q200k+</strong>
          <span>Contratos en Ultra-Clean GT</span>
        </div>
        <a href="#ecosistema" className="explore" aria-label="Explorar ecosistema">
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
}
