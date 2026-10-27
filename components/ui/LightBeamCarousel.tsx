"use client";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Pause,
  Play,
  Orbit,
  Bot,
  ChartNoAxesCombined,
  Layers3,
  Landmark,
  GraduationCap,
} from "lucide-react";
const nodes = [
  {
    name: "EvoNest",
    label: "Fundador · Consultoría B2B",
    detail: "Estructura para crecer.",
    description:
      "Conecto presencia digital, procesos comerciales y automatización para que las empresas puedan operar con claridad.",
    tech: "evonest.company",
    color: "#E5A93C",
    icon: Orbit,
  },
  {
    name: "Agentes IA & n8n",
    label: "Automatización aplicada",
    detail: "Inteligencia que ejecuta.",
    description:
      "Claude, Gemini y GPT en producción: asistentes y flujos que apoyan la gestión operativa y comercial.",
    tech: "Claude / Gemini / GPT / n8n",
    color: "#38BDF8",
    icon: Bot,
  },
  {
    name: "HubSpot & Pipeline",
    label: "Revenue Operations",
    detail: "Cada oportunidad, visible.",
    description:
      "Seguimiento comercial con CRM y experiencia en cierres de hasta USD 300k y contratos de Q200k+ en Ultra-Clean GT.",
    tech: "CRM / Venta consultiva / B2B",
    color: "#22C55E",
    icon: ChartNoAxesCombined,
  },
  {
    name: "Vercel & Supabase",
    label: "Next.js Full-Stack",
    detail: "De la idea al producto.",
    description:
      "Desarrollo web, PostgreSQL y SEO técnico. Objetivo de carga: menos de un segundo, sujeto a medición por proyecto.",
    tech: "Next.js / PostgreSQL / GitHub",
    color: "#38BDF8",
    icon: Layers3,
  },
  {
    name: "Guatecompras B2G",
    label: "Compras públicas",
    detail: "Negocios con el sector público.",
    description:
      "Búsqueda de concursos, preparación de ofertas y seguimiento de licitaciones, cotizaciones y contratos abiertos.",
    tech: "Licitaciones / Compras públicas",
    color: "#A855F7",
    icon: Landmark,
  },
  {
    name: "AVE · UVG",
    label: "Formación universitaria · En curso",
    detail: "Aprender para liderar mejor.",
    description:
      "Licenciatura en Administración de Empresas en la Universidad del Valle de Guatemala, Programa AVE.",
    tech: "Administración / Estrategia / Gestión",
    color: "#E5A93C",
    icon: GraduationCap,
  },
];
export default function LightBeamCarousel() {
  const [active, setActive] = useState(0),
    [paused, setPaused] = useState(false),
    [hovered, setHovered] = useState(false),
    [keyboardFocus, setKeyboardFocus] = useState(false);
  const reduced = useReducedMotion();
  const carouselRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const visible = useInView(carouselRef, { amount: 0.1 });
  const animating = !paused && !hovered && !keyboardFocus && !reduced && visible;
  useEffect(() => {
    if (!animating) return;
    const id = setInterval(() => setActive((i) => (i + 1) % nodes.length), 5000);
    return () => clearInterval(id);
  }, [animating]);
  useEffect(() => {
    const tabs = tabsRef.current;
    const tab = tabs?.children[active] as HTMLElement | undefined;
    if (!tabs || !tab) return;
    // Scroll only the tab strip; never move the page during autoplay.
    tabs.scrollTo({
      left: tab.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - tab.clientWidth) / 2,
      behavior: reduced ? "instant" : "smooth",
    });
  }, [active, reduced]);
  const node = nodes[active];
  const Icon = node.icon;
  function select(i: number) {
    setActive((i + nodes.length) % nodes.length);
    setPaused(true);
  }
  return (
    <section id="ecosistema" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / ECOSISTEMA</p>
          <h2>
            Una visión.
            <br />
            <span className="muted">Múltiples conexiones.</span>
          </h2>
        </div>
        <p>
          La experiencia comercial se encuentra
          <br className="desktop-break" /> con la tecnología que la potencia.
        </p>
      </div>
      <div
        className="beam-shell depth-card"
        ref={carouselRef}
        data-animating={animating}
        style={
          {
            "--node-color": node.color,
            "--node-color-light": (
              {
                "#E5A93C": "#855307",
                "#38BDF8": "#08739f",
                "#22C55E": "#167735",
                "#A855F7": "#8037bd",
              } as Record<string, string>
            )[node.color],
          } as CSSProperties
        }
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") setHovered(true);
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") setHovered(false);
        }}
        onFocusCapture={(e) => {
          if (e.target.matches(":focus-visible")) setKeyboardFocus(true);
        }}
        onBlurCapture={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setKeyboardFocus(false);
        }}
        role="region"
        aria-roledescription="carrusel"
        aria-label="Ecosistema profesional"
      >
        <div ref={tabsRef} className="beam-tabs" role="group" aria-label="Seleccionar conexión">
          {nodes.map((n, i) => (
            <button
              key={n.name}
              className={i === active ? "active" : ""}
              aria-pressed={i === active}
              onClick={() => select(i)}
            >
              <span>0{i + 1}</span>
              {n.name}
            </button>
          ))}
        </div>
        <div className="beam-body">
          <div
            className="optical-scene"
            aria-hidden="true"
            onPointerDown={(e) => {
              if (e.pointerType !== "touch") return;
              touchStart.current = { x: e.clientX, y: e.clientY };
              e.currentTarget.setPointerCapture(e.pointerId);
            }}
            onPointerCancel={() => {
              touchStart.current = null;
            }}
            onPointerUp={(e) => {
              const start = touchStart.current;
              touchStart.current = null;
              if (!start) return;
              const dx = e.clientX - start.x;
              const dy = e.clientY - start.y;
              if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.3) {
                select(active + (dx < 0 ? 1 : -1));
              }
            }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="optical-conduit">
              <span key={active} className="laser" />
            </div>
            <div key={node.name} className="hologram">
              <div className="shockwave" />
              <div className="holo-ring" />
              <div className="holo-core">
                <Icon size={58} strokeWidth={1} />
              </div>
            </div>
            <span className="optical-label">NODO 0{active + 1} / CONECTADO</span>
          </div>
          <div className="beam-copy" aria-live={paused ? "polite" : "off"}>
            <AnimatePresence mode="wait">
              <motion.div
                key={node.name}
                initial={false}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.25 }}
              >
                <p className="eyebrow node-label">{node.label}</p>
                <h3>{node.detail}</h3>
                <p className="body-copy">{node.description}</p>
                <p className="tech-caption">{node.tech}</p>
                {active === 0 ? (
                  <a
                    href="https://evonest.company/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-link"
                  >
                    Explorar EvoNest <ArrowUpRight size={16} />
                  </a>
                ) : null}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="beam-controls">
          <span className="mono">
            0{active + 1} <span className="muted">/ 06</span>
          </span>
          <div>
            <button
              className="icon-button"
              aria-label="Conexión anterior"
              onClick={() => select(active - 1)}
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="icon-button"
              hidden={!!reduced}
              aria-label={paused ? "Reproducir carrusel" : "Pausar carrusel"}
              onClick={() => {
                setPaused((p) => !p);
                setHovered(false);
                setKeyboardFocus(false);
              }}
            >
              {paused ? <Play size={16} /> : <Pause size={16} />}
            </button>
            <button
              className="icon-button"
              aria-label="Conexión siguiente"
              onClick={() => select(active + 1)}
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
