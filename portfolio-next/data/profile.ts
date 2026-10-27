// ============================================================================
// FUENTE ÚNICA DE VERDAD — Daniel Monterroso
// ----------------------------------------------------------------------------
// Todo el contenido de este archivo proviene literalmente de la Sección 9
// (Anexo de Datos) de PROMPT_PORTFOLIO_DANIEL_MONTERROSO.md.
// No se agrega, infiere ni completa ningún dato aquí.
// Si un campo no existe en la fuente, se deja como `null` y el componente
// que lo consume debe omitirlo en la UI en vez de inventar un valor.
// ============================================================================

export const contact = {
  fullName: "Daniel Monterroso",
  currentRole: "Gerente de Operaciones",
  currentCompany: "Ultra-Clean GT",
  phone: "+502 3312-8499",
  whatsapp: "50233128499",
  email: "monterroso221b@gmail.com",
  location: "Ciudad de Guatemala, Guatemala",
  linkedin: "https://linkedin.com/in/daniel-monterroso-gt",
  github: "https://github.com/T-bird214",
};

export const heroTitles = [
  "Ventas & Desarrollo Comercial",
  "Operaciones & Administración",
  "Liderazgo de Equipos",
  "Tecnología & IA aplicada al negocio",
];

export const valueProps = [
  "Más de 10 años en ventas B2B, B2C y venta consultiva, con cierres de hasta USD 300,000.",
  "Liderazgo comprobado: supervisión de equipos de hasta 15 personas y capacitación a 50+ colaboradores.",
  "Experiencia real en compras públicas y licitaciones (Guatecompras).",
  "Manejo funcional de CRM, ERP, Help Desk y suite de productividad completa.",
  "Adopción activa de IA (ChatGPT, Claude, Gemini) como herramienta diaria de productividad.",
  "Aprendizaje continuo: desarrollo web, automatización y cloud en formación activa.",
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

// Orden: más reciente primero (10 puestos, tal como aparecen en la Sección 9.3)
export const experience: ExperienceItem[] = [
  {
    role: "Gerente de Operaciones",
    company: "Ultra-Clean GT",
    period: "Nov 2025 – Actualidad",
    bullets: [
      "Coordino equipos de trabajo multidisciplinarios, supervisando avance de proyectos, cumplimiento de objetivos, plazos y estándares de calidad.",
      "Lidero el desarrollo comercial y administrativo de la operación, integrando procesos de ventas, atención al cliente y gestión de CRM.",
      "Diseño e implemento la landing page corporativa utilizando Vercel, Supabase, GitHub y HubSpot.",
      "Desarrollo e integro agentes de inteligencia artificial (ChatGPT, Claude, Gemini) para automatizar tareas operativas y comerciales.",
      "Participo en el cierre de contratos comerciales superiores a Q200,000.",
    ],
  },
  {
    role: "Asistente de Transporte, Área de Rectoría",
    company: "Universidad Panamericana",
    period: "Ene 2023 – Oct 2025",
    bullets: [
      "Coordiné la logística y operación de transporte institucional, garantizando cumplimiento de rutas y horarios.",
      "Administré recursos, mantenimiento de flota y programación de unidades para autoridades y personal universitario.",
      "Desarrollé procesos de organización y control que mejoraron la eficiencia operativa del área.",
    ],
  },
  {
    role: "Operador de Servicio al Cliente",
    company: "Tigo Guatemala",
    period: "May 2022 – Ago 2023",
    bullets: [
      "Atención directa a clientes de telecomunicaciones, resolviendo consultas, incidencias y solicitudes de soporte técnico.",
      "Manejo de herramientas de CRM y Help Desk para dar seguimiento a casos, cumpliendo KPIs de satisfacción y tiempo de resolución.",
      "Recibí capacitación interna en servicios de telecomunicaciones y procesos de atención al cliente.",
    ],
  },
  {
    role: "Operador de Servicio al Cliente — Cuenta Amazon.es",
    company: "Alorica Guatemala",
    period: "Ago 2020 – Ene 2021",
    bullets: [
      "Brindé soporte al cliente internacional en español para la plataforma Amazon.es.",
      "Gestioné consultas, pedidos, cambios y reclamos siguiendo estándares de calidad de marca global.",
      "Manejé múltiples canales de atención (llamadas, chat, correo) en un entorno de alto volumen.",
    ],
  },
  {
    role: "Encargado de Transporte",
    company: "Transportes Montesa",
    period: "Ene 2018 – Dic 2019",
    bullets: [
      "Responsable de la planificación y coordinación de rutas y operaciones logísticas.",
      "Administré personal, unidades de transporte y mantenimiento preventivo de flota.",
      "Gestioné compras y relación con proveedores vinculados a la operación de transporte.",
    ],
  },
  {
    role: "Promotor de Marca",
    company: "Samsung",
    period: "Jun 2016 – Jun 2017",
    bullets: [
      "Representé la marca en punto de venta, impulsando ventas de smartphones, tablets y línea blanca.",
      "Capacité a más de 50 vendedores en el lanzamiento de nuevos productos, recorriendo tiendas en distintas regiones de Guatemala.",
      "Ejecuté estrategias de merchandising, exhibición POP y auditorías de cumplimiento de estándares de marca.",
    ],
  },
  {
    role: "Promotor de Marca",
    company: "Endless",
    period: "Feb 2016 – Abr 2016",
    bullets: [
      "Impulsé la venta directa y promoción de productos de consumo en punto de venta.",
      "Apoyé actividades de exhibición y negociación con encargados de tienda.",
    ],
  },
  {
    role: "Monitoreo de Alarmas",
    company: "Prevent Security Systems",
    period: "Nov 2014 – Jul 2015",
    bullets: [
      "Supervisé sistemas de monitoreo de alarmas y seguridad, atendiendo alertas y coordinando respuesta oportuna.",
      "Brindé atención al cliente relacionada con la venta y activación de servicios de seguridad.",
    ],
  },
  {
    role: "Operador Telefónico, Atención al Cliente TEC.",
    company: "DIGITEX",
    period: "Ago 2013 – Oct 2013",
    bullets: [
      "Atención telefónica a clientes de servicios de telecomunicaciones, resolviendo consultas y soporte técnico de primer nivel.",
    ],
  },
  {
    role: "Encargado de Transporte y Bodega",
    company: "Sulfatos de Guatemala, S.A.",
    period: "2012",
    bullets: [
      "Administré inventarios, bodega y coordinación de compras.",
      "Gestioné rutas de transporte y relación con proveedores.",
    ],
  },
];

// Nota transversal (no es un puesto): se muestra como card destacada en el timeline
export const crossCuttingNote = {
  title: "Compras Públicas y Licitaciones (Guatecompras)",
  description:
    "A lo largo de su trayectoria comercial, Daniel ha participado en procesos de compras públicas a través de Guatecompras: búsqueda y seguimiento de concursos, compra directa, cotizaciones y contratos abiertos, publicación de ofertas, y gestión de reuniones para presentar productos y proyectos ante instituciones y entidades de gobierno.",
};

export const skills = [
  { name: "Ventas & Desarrollo Comercial", domain: "Ejecución comercial" },
  { name: "Servicio al Cliente / CX", domain: "Gestión de relaciones" },
  { name: "Administración & Liderazgo", domain: "Gestión ejecutiva" },
  { name: "Operaciones & Logística", domain: "Gestión operativa" },
  { name: "Licitaciones / Guatecompras", domain: "Gestión de procesos" },
  { name: "Tecnología, IA & Automatización", domain: "Aplicación al negocio" },
];

export const sectors = [
  "Retail",
  "Tecnología",
  "Telecomunicaciones",
  "Educación Superior",
  "Transporte y Logística",
  "Seguridad",
  "Industria",
];

export const tools = {
  crm: ["HubSpot", "Zoho CRM", "Pipedrive"],
  erpHelpdesk: ["AS400", "Zendesk"],
  productivity: [
    "Excel",
    "Word",
    "PowerPoint",
    "Outlook",
    "Power BI",
    "Microsoft 365",
    "Google Workspace",
  ],
  communication: ["Teams", "Slack", "Zoom", "Google Meet"],
  ai: ["ChatGPT", "Claude", "Gemini", "Copilot", "Perplexity", "NotebookLM", "n8n"],
  techDev: ["Git", "GitHub", "Python", "PostgreSQL", "Supabase", "Vercel", "AWS (básico)", "Linux"],
};

// Nota: la lista extendida de "18 logros" que existía en la versión anterior
// del proyecto se eliminó — contenía cifras y hechos no verificados en la
// Sección 9 de la fuente de verdad (ver AUDITORIA_PROYECTO.md, hallazgo 4.1).
// Solo se conservan los 6 logros headline, que sí están respaldados 1:1
// por la Sección 9.7.
export const achievementsHighlight = [
  { value: "USD 300,000", label: "Venta individual más alta registrada" },
  { value: "Q200,000+", label: "Contratos comerciales cerrados en Ultra-Clean GT" },
  { value: "50+", label: "Personas capacitadas en lanzamientos de producto" },
  { value: "15", label: "Personas supervisadas en un mismo equipo" },
  { value: "10+ años", label: "De trayectoria combinando ventas, operaciones y tecnología" },
  { value: "Guatemala", label: "Cobertura nacional en capacitación de tiendas" },
];

export const education = [
  {
    title: "Administración de Empresas",
    institution: "Universidad del Valle de Guatemala (AVE-UVG)",
    period: "En curso",
  },
  {
    title: "Bachillerato en Ciencias y Letras",
    institution: "Colegio Ciudad Vieja",
    period: "2011 – 2012",
  },
];

export const certifications = [
  {
    title: "Desarrollo con IA · Marketing Digital · Hacking Ético",
    institution: "BIG School",
    period: "2026" as string | null,
  },
  {
    title: "Computer Hardware Basics",
    institution: "Cisco Networking Academy",
    period: "2024" as string | null,
  },
  {
    title: "Excel Avanzado & Tablas Dinámicas · Power BI",
    institution: "Cámara de Industria de Guatemala",
    period: null as string | null,
  },
  {
    title: "Formación complementaria online",
    institution: "Platzi · MoureDev",
    period: null as string | null,
  },
];

export const internalTraining = [
  { company: "Samsung", topics: "Marketing · Procesos comerciales · Capacitación de producto" },
  { company: "Tigo", topics: "Telecomunicaciones · Help Desk · Atención al cliente" },
];

export const languages = [
  { name: "Español", level: "Nativo" as string | null },
  { name: "Inglés · lectura", level: null as string | null },
  { name: "Inglés · escritura", level: null as string | null },
  { name: "Inglés · conversación", level: null as string | null },
];

export const targetRoles = [
  "Ejecutivo Comercial",
  "Account Executive",
  "Business Development",
  "Customer Success",
  "Supervisor / Coordinador",
  "Gerente Comercial",
  "Gerente Administrativo",
  "Gerente de Operaciones",
  "Administración",
  "Compras",
  "Licitaciones",
  "Logística",
  "Preventa",
  "Consultoría",
  "Desarrollo de Negocios",
];

export const seo = {
  title: "Daniel Monterroso — Ventas, Operaciones & Tecnología",
  description:
    "Más de 10 años combinando ventas, operaciones y tecnología para generar resultados de negocio. Portafolio profesional de Daniel Monterroso, Gerente de Operaciones en Guatemala.",
};
