"use client";

import React, { useState, useEffect } from "react";

interface BeamNode {
  id: string;
  name: string;
  badge: string;
  category: string;
  metric: string;
  tagline: string;
  desc: string;
  color: string;
  glow: string;
  icon: string;
}

const nodes: BeamNode[] = [
  {
    id: "evonest",
    name: "EvoNest",
    badge: "evonest.company",
    category: "Fundador · Consultoría B2B",
    metric: "✦ 100% Trazabilidad de Leads",
    tagline: "Web + HubSpot CRM + WhatsApp API en un solo sistema",
    desc: "Arquitectura digital propia en Guatemala que conecta sitios web de alta conversión, HubSpot CRM, recordatorios por WhatsApp API y pruebas automatizadas de calidad.",
    color: "#E5A93C",
    glow: "rgba(229, 169, 60, 0.35)",
    icon: "⚡"
  },
  {
    id: "ai-agents",
    name: "Agentes IA & n8n",
    badge: "Claude · Gemini · GPT",
    category: "Automatización en Producción",
    metric: "✦ Operación & Ventas 24/7",
    tagline: "Agentes autónomos integrados en Ultra-Clean GT y EvoNest",
    desc: "Despliegue práctico de agentes con Claude, Gemini, ChatGPT y flujos en n8n que clasifican prospectos, asisten en propuestas comerciales y automatizan tareas operativas.",
    color: "#38BDF8",
    glow: "rgba(56, 189, 248, 0.35)",
    icon: "🤖"
  },
  {
    id: "hubspot-crm",
    name: "HubSpot & Pipeline",
    badge: "Revenue Operations",
    category: "Desarrollo Comercial B2B",
    metric: "✦ USD 300k / Q200k+ Cierres",
    tagline: "Control total de embudo, cotizaciones y cierres consultivos",
    desc: "Estructuración de pipelines comerciales en HubSpot, Zoho CRM y Pipedrive, respaldada por más de 10 años cerrando negocios B2B y B2C en múltiples industrias.",
    color: "#F97316",
    glow: "rgba(249, 115, 22, 0.35)",
    icon: "📈"
  },
  {
    id: "cloud-stack",
    name: "Vercel & Supabase",
    badge: "Next.js Full-Stack",
    category: "Ingeniería Web con IA",
    metric: "✦ < 1s Carga & SEO Técnico",
    tagline: "Desarrollo moderno asistido por IA (CLI + MCP + Pull Requests)",
    desc: "Construcción y despliegue continuo de plataformas corporativas con Next.js, React, Tailwind CSS, PostgreSQL en Supabase y despliegues automatizados en Vercel.",
    color: "#10B981",
    glow: "rgba(16, 185, 129, 0.35)",
    icon: "🚀"
  },
  {
    id: "guatecompras",
    name: "Guatecompras B2G",
    badge: "Compras Públicas",
    category: "Licitaciones del Estado",
    metric: "✦ Concursos & Contratos Abiertos",
    tagline: "Seguimiento de eventos, compra directa y ofertas institucionales",
    desc: "Experiencia comprobada participando en licitaciones públicas a través de Guatecompras: armado de pliegos, cotizaciones y presentación de proyectos ante entidades gubernamentales.",
    color: "#A855F7",
    glow: "rgba(168, 85, 247, 0.35)",
    icon: "🏛️"
  },
  {
    id: "uvg-ave",
    name: "AVE · UVG",
    badge: "Admón. de Empresas",
    category: "Formación Universitaria Activa",
    metric: "✦ Liderazgo de 15 a 50+ Personas",
    tagline: "Licenciatura en Administración de Empresas — Univ. del Valle de Guatemala",
    desc: "Respaldo académico ejecutivo en administración, presupuestos, control de inventarios, logística de flotas y dirección estratégica de equipos.",
    color: "#22C55E",
    glow: "rgba(34, 197, 94, 0.35)",
    icon: "🎓"
  }
];

export default function LightBeamCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % nodes.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeNode = nodes[activeIndex];

  return (
    <section id="ecosistema-luz" className="relative overflow-hidden py-16 sm:py-24">
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px] transition-all duration-700"
        style={{ background: activeNode.glow }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E5A93C]/35 bg-[#E5A93C]/10 px-3.5 py-1 font-mono text-[10px] font-semibold tracking-[0.2em] text-[#9A6B1F] uppercase dark:text-[#E5A93C]">
            ⚡ Motor Interactivo · Pulso de Luz & Materialización de Logos
          </span>
          <h2 className="font-display mt-3 text-3xl font-semibold sm:text-4xl">
            Carrusel de Materialización por Haz de Luz
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs text-[#4B5563] sm:text-sm dark:text-[#94A3B8]">
            Observa cómo el pulso óptico viaja por el conducto y <strong>materializa cada emblema e impacto de negocio</strong>. Funciona de forma autónoma en teléfono celular o al tocar cualquier nodo.
          </p>
        </div>

        <div className="depth-card rounded-2xl border border-[#121417]/15 p-5 sm:p-8 dark:border-white/15">
          {/* Conducto del Haz de Luz */}
          <div className="mb-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#121417]/15 bg-[#121417]/5 px-3 py-1 font-mono text-[10px] font-bold uppercase dark:border-white/15 dark:bg-white/5">
              <span className="h-2.5 w-2.5 rounded-full animate-ping" style={{ backgroundColor: activeNode.color }} />
              <span>Emisor Óptico IA</span>
            </div>

            <div className="relative h-2 flex-1 overflow-hidden rounded-full bg-[#121417]/10 dark:bg-white/10">
              <div
                className="h-full w-1/2 rounded-full transition-all duration-500 animate-beam-sweep"
                style={{
                  background: `linear-gradient(90deg, transparent, ${activeNode.color}, #ffffff)`,
                  boxShadow: `0 0 18px ${activeNode.color}`
                }}
              />
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev - 1 + nodes.length) % nodes.length)}
                className="rounded-lg border border-[#121417]/15 px-2.5 py-1.5 font-mono text-xs hover:bg-[#121417]/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="rounded-lg border border-[#121417]/15 px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase hover:bg-[#121417]/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                {isPlaying ? "Pausar" : "Reanudar"}
              </button>
              <button
                type="button"
                onClick={() => setActiveIndex((prev) => (prev + 1) % nodes.length)}
                className="rounded-lg border border-[#121417]/15 px-2.5 py-1.5 font-mono text-xs hover:bg-[#121417]/5 dark:border-white/15 dark:hover:bg-white/10"
              >
                ▶
              </button>
            </div>
          </div>

          {/* Cámara Holográfica Central */}
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="flex flex-col items-center justify-center lg:col-span-4">
              <div className="relative flex h-40 w-40 items-center justify-center sm:h-44 sm:w-44">
                <span className="animate-pulse-ring absolute inset-2 rounded-full border-2" style={{ borderColor: activeNode.color }} />
                <div className="animate-shockwave pointer-events-none absolute inset-4 rounded-full" style={{ backgroundColor: activeNode.glow }} />
                <div
                  className="animate-float-3d relative z-10 flex h-32 w-32 flex-col items-center justify-center rounded-2xl border-2 bg-white/95 p-3 shadow-2xl dark:bg-[#0D121F]/95"
                  style={{ borderColor: activeNode.color, boxShadow: `0 0 40px -5px ${activeNode.glow}` }}
                >
                  <span className="text-4xl animate-logo-reveal">{activeNode.icon}</span>
                  <span className="mt-1 font-mono text-[9px] font-bold tracking-widest uppercase" style={{ color: activeNode.color }}>
                    {activeNode.badge}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-3 text-center lg:col-span-8 lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span
                  className="rounded-md px-2.5 py-1 font-mono text-[10px] font-bold tracking-wider uppercase"
                  style={{ color: activeNode.color, backgroundColor: activeNode.glow }}
                >
                  {activeNode.category}
                </span>
                <span className="rounded-md border border-[#121417]/15 bg-[#121417]/5 px-2.5 py-1 font-mono text-xs font-bold dark:border-white/15 dark:bg-white/5">
                  {activeNode.metric}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">{activeNode.name}</h3>
              <p className="font-mono text-xs font-bold tracking-wide uppercase sm:text-sm" style={{ color: activeNode.color }}>
                {activeNode.tagline}
              </p>
              <p className="text-sm leading-relaxed text-[#4B5563] sm:text-base dark:text-[#CBD5E1]">
                {activeNode.desc}
              </p>
            </div>
          </div>

          {/* Botonera de Nodos */}
          <div className="mt-8 grid grid-cols-2 gap-2.5 border-t border-[#121417]/10 pt-6 sm:grid-cols-3 lg:grid-cols-6 dark:border-white/10">
            {nodes.map((node, idx) => {
              const selected = idx === activeIndex;
              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    selected
                      ? "bg-[#121417] text-white dark:bg-white/10 shadow-lg"
                      : "border-[#121417]/10 bg-[#121417]/[0.03] text-[#4B5563] hover:border-[#121417]/30 dark:border-white/10 dark:bg-white/[0.02] dark:text-[#94A3B8]"
                  }`}
                  style={selected ? { borderColor: node.color, boxShadow: `0 0 20px -6px ${node.glow}` } : {}}
                >
                  <div className="flex items-center justify-between">
                    <span className="h-2 w-2 rounded-full" style={{ backgroundColor: node.color }} />
                    <span className="font-mono text-[9px] opacity-60">0{idx + 1}</span>
                  </div>
                  <p className="mt-1.5 truncate text-xs font-bold">{node.name}</p>
                  <p className="truncate font-mono text-[10px] opacity-75">{node.badge}</p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
