// ============================================================================
// Contenido del rediseño 2026 (casos, certificaciones, stack y CV).
// Reglas: sin cifras inventadas, sin datos privados de clientes (personas,
// precios, teléfonos) y sin información interna de infraestructura (IPs,
// hostnames, ids, credenciales o rutas de servidor).
// ============================================================================

export const headline =
  "Fundador de EvoNest | Operaciones, CRM y automatización (HubSpot · n8n · IA) | 10+ años en operaciones y ventas B2B";

export const headlineParts = {
  role: "Fundador de EvoNest",
  focus: "Operaciones, CRM y automatización",
  stack: "HubSpot · n8n · IA",
  track: "10+ años en operaciones y ventas B2B",
};

export const summary =
  "Llevo más de 10 años haciendo que las operaciones funcionen: flotas, logística, compras públicas y ventas a empresas, con cierres de hasta USD 300,000. Hoy uno esa experiencia con tecnología. En EvoNest diseño y opero sistemas completos para pymes: sitio web, CRM en HubSpot, automatizaciones en n8n y asistentes con IA que cotizan y dan seguimiento. Me gusta lo práctico: procesos claros, datos limpios y resultados que se pueden medir. Busco sumar a un equipo en roles de operaciones, CRM o RevOps, remoto o en Guatemala.";

export const cvFiles = {
  es: "/cv/CV_Daniel_Monterroso_2026.pdf",
  en: "/cv/CV_Daniel_Monterroso_2026_EN.pdf",
};

// Cifras respaldadas por data/profile.ts (achievementsHighlight) y el CV.
export const heroStats = [
  { value: 10, prefix: "", suffix: "+", label: "años en operaciones y ventas" },
  { value: 300, prefix: "USD ", suffix: "K", label: "cierre individual más alto" },
  { value: 50, prefix: "", suffix: "+", label: "vendedores capacitados" },
  { value: 15, prefix: "", suffix: "", label: "personas supervisadas" },
];

export const pillars = [
  {
    title: "Operaciones",
    text: "Flotas, logística, bodega, compras y equipos. Procesos que se cumplen sin depender de memoria.",
  },
  {
    title: "CRM y RevOps",
    text: "Pipelines en HubSpot con etapas claras, datos limpios y seguimiento que no se olvida.",
  },
  {
    title: "Automatización e IA",
    text: "Flujos en n8n y asistentes que cotizan y avisan, siempre con una persona aprobando.",
  },
];

export const stack = [
  "HubSpot",
  "n8n",
  "Next.js",
  "Supabase",
  "Vercel",
  "PostgreSQL",
  "Podman",
  "Oracle Cloud",
  "Telegram Bot API",
  "WhatsApp",
  "Claude",
  "Gemini",
  "ChatGPT",
  "GitHub",
  "Linux",
  "Python",
];

export interface CaseStudy {
  id: string;
  index: string;
  title: string;
  context: string;
  problem: string;
  built: string[];
  stack: string[];
  result: string;
  link?: { href: string; label: string };
}

export const pipelineStages = [
  "Lead nuevo",
  "Contactado",
  "Diagnóstico agendado",
  "Diagnóstico realizado",
  "Propuesta enviada",
  "Negociación",
  "Ganado",
  "Perdido",
];

export const cases: CaseStudy[] = [
  {
    id: "crm-evonest",
    index: "01",
    title: "CRM de EvoNest con HubSpot y n8n",
    context: "EvoNest · ventas propias",
    problem:
      "Los prospectos llegaban por varios canales y el seguimiento dependía de acordarse. Sin un proceso único, una propuesta podía quedarse sin respuesta.",
    built: [
      "Pipeline de 8 etapas en HubSpot, desde Lead nuevo hasta Ganado o Perdido.",
      "Flujo en n8n que crea el lead nuevo de forma automática cada 10 minutos.",
      "Resumen diario del pipeline y recordatorios de seguimiento de propuestas.",
      "CRM por voz desde Telegram: dicto el cambio y el sistema pide confirmación antes de escribir.",
    ],
    stack: ["HubSpot", "n8n", "Telegram", "IA"],
    result:
      "Cada lead entra al mismo proceso y ninguna propuesta queda sin seguimiento. El CRM se puede actualizar desde el celular, por voz y con confirmación.",
  },
  {
    id: "politas-cake",
    index: "02",
    title: "Cotizador de Polita's Cake",
    context: "Repostería · cliente de EvoNest",
    problem:
      "Cada pedido se cotizaba a mano por WhatsApp, sobre todo en la temporada alta de fin de año.",
    built: [
      "Cotizador a medida (EvoCotiza): el pedido se arma desde el catálogo de productos.",
      "Calcula el total y genera la cotización con la marca del negocio, lista para enviar por WhatsApp.",
      "Hecho para usarse desde tablet en el día a día del negocio.",
    ],
    stack: ["Next.js", "Vercel", "WhatsApp"],
    result:
      "Cotizaciones consistentes y listas para enviar en el canal que el negocio ya usa, sin recalcular precios a mano.",
    link: {
      href: "https://evonest.company/casos/politas-cake",
      label: "Ver caso público en evonest.company",
    },
  },
  {
    id: "ultra-clean-bot",
    index: "03",
    title: "Bot cotizador de Ultra-Clean",
    context: "Servicios de limpieza · operación diaria",
    problem:
      "Armar cotizaciones tomaba tiempo, la numeración se llevaba a mano y los negocios no siempre quedaban en el CRM.",
    built: [
      "Bot en Telegram que arma la cotización y genera el PDF.",
      "Numeración automática de cada cotización.",
      "El negocio se crea en HubSpot en el mismo paso.",
      "Regla fija: nada sale hacia un cliente sin aprobación de una persona.",
    ],
    stack: ["Telegram", "n8n", "HubSpot", "IA"],
    result:
      "Cotizaciones con formato y numeración uniformes, registradas en el CRM desde el inicio y con control humano antes de cada envío.",
  },
  {
    id: "servidor-propio",
    index: "04",
    title: "Servidor propio en Oracle Cloud",
    context: "Infraestructura de EvoNest",
    problem:
      "Las automatizaciones y el asistente de IA necesitaban un lugar estable, privado y barato donde correr todo el día.",
    built: [
      "Contenedores con Podman rootless administrados con Quadlet.",
      "PostgreSQL, n8n y asistente de IA en el mismo servidor.",
      "Sin puertos públicos: el acceso es solo por canal privado.",
      "Respaldo diario cifrado a almacenamiento externo y chequeo de salud cada 5 minutos.",
    ],
    stack: ["Oracle Cloud", "Podman", "PostgreSQL", "n8n"],
    result:
      "Una base propia y privada para las automatizaciones: las caídas se detectan pronto y siempre hay un respaldo reciente.",
  },
];

export type CertificationStatus = "en-curso" | "obtenida";

export interface Certification {
  title: string;
  issuer: "HubSpot Academy" | "Google Skillshop";
  status: CertificationStatus;
  /** Para "en-curso": fecha meta. Para "obtenida": fecha de emisión. */
  date: string;
  /** Enlace de verificación; solo se muestra cuando status es "obtenida". */
  url?: string;
}

// Para marcar una como obtenida: status: "obtenida", date: "mes año", url: "https://…"
export const certificationsRoadmap: Certification[] = [
  {
    title: "HubSpot Sales Hub Software",
    issuer: "HubSpot Academy",
    status: "en-curso",
    date: "dic 2026",
  },
  { title: "Inbound", issuer: "HubSpot Academy", status: "en-curso", date: "dic 2026" },
  { title: "Revenue Operations", issuer: "HubSpot Academy", status: "en-curso", date: "dic 2026" },
  {
    title: "HubSpot Marketing Hub Software",
    issuer: "HubSpot Academy",
    status: "en-curso",
    date: "dic 2026",
  },
  { title: "HubSpot Reporting", issuer: "HubSpot Academy", status: "en-curso", date: "dic 2026" },
  { title: "Google Analytics", issuer: "Google Skillshop", status: "en-curso", date: "dic 2026" },
  { title: "Google Ads Search", issuer: "Google Skillshop", status: "en-curso", date: "dic 2026" },
];
