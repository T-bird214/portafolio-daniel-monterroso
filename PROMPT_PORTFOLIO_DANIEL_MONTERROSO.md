# PROMPT MAESTRO — Portfolio Profesional Daniel Monterroso
> Versión 2.0 · Perfeccionado a partir del CV Maestro (fuente única de verdad)
> Este documento está listo para pegarse completo en Claude Code, Cursor, o cualquier agente de desarrollo y ejecutar el build sin pasos adicionales de investigación de datos.

---

## 0. DIFERENCIA CLAVE VS. VERSIÓN ANTERIOR DEL PROMPT

La versión anterior de este brief pedía "extraer información del CV Maestro" pero no la incluía, obligando a la IA que la ejecutara a adivinar datos. Eso viola la regla más importante del propio brief: **no inventar información**.

Esta versión corrige eso: la **Sección 9 (Anexo de Datos)** contiene el 100% de los datos reales del CV Maestro ya estructurados en TypeScript, listos para copiar directamente a `/data/profile.ts`. El agente que ejecute este prompt **no debe inferir, completar ni inventar ningún dato** — solo usar lo que está en la Sección 9. Si un dato no aparece ahí, se omite en la UI.

---

## 1. ROL

Actúa como un equipo fusionado de:
- **Staff Frontend Engineer** (Next.js 15 / React / TypeScript)
- **Senior Product Designer** (dirección de arte, sistemas de diseño)
- **UX Writer**
- **Recruiter técnico** senior especializado en perfiles comerciales-tecnológicos híbridos

Tu objetivo no es una landing page genérica. Es un **portafolio profesional premium, listo para producción**, que funcione como la tarjeta de presentación digital de Daniel Monterroso frente a reclutadores, gerentes de contratación y clientes potenciales.

---

## 2. CONTEXTO Y POSICIONAMIENTO

Daniel es un profesional guatemalteco con **más de 10 años de experiencia** combinando **ventas y desarrollo comercial, servicio al cliente / Customer Success, operaciones y logística, administración, liderazgo, licitaciones públicas (Guatecompras) y capacitación**, complementado con formación activa y aplicada en **tecnología, inteligencia artificial y automatización**.

**Mensaje central que la página debe transmitir:**
> "Esta persona entiende de negocios, sabe vender y liderar equipos, y además domina tecnología e IA como ventaja competitiva."

Reglas de posicionamiento:
- La tecnología **nunca** debe presentarse como el eje central del perfil — es un diferenciador, no la identidad.
- El hero, el "sobre mí" y la propuesta de valor deben abrir con **ventas / liderazgo / operaciones**, no con "developer" ni "programador".
- Todo dato mostrado debe existir literalmente en la Sección 9. Prohibido usar lorem ipsum, placeholders, TODOs o cifras aproximadas no confirmadas.

---

## 3. OBJETIVO DE EXPERIENCIA

La página debe sentirse: moderna, elegante, premium, muy rápida, minimalista, con micro-detalles de calidad (glow sutil, scroll reveal, transiciones suaves). Inspiración de dirección de arte (no copiar): **Apple, Stripe, Linear, Raycast, Vercel, Notion**.

---

## 4. STACK OBLIGATORIO

- React + Next.js 15 (App Router, Server Components donde aplique)
- TypeScript estricto
- TailwindCSS
- Framer Motion (animaciones, scroll reveal)
- Lucide Icons
- Responsive completo (mobile-first)
- SEO Ready (metadata API de Next.js, OpenGraph, Twitter Cards)
- Dark Mode / Light Mode (`next-themes`, con `prefers-color-scheme` como default)
- ESLint + Prettier configurados
- Accesible (WCAG 2.1 AA): contraste, focus visible, `aria-*`, navegación por teclado
- Vercel Ready / GitHub Ready

---

## 5. ESTRUCTURA DE CARPETAS

```
/app
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
  opengraph-image.tsx
/components
  /ui            (botones, badges, cards genéricos)
  /sections      (Hero, About, ValueProps, Timeline, Skills, Sectors, Tools, Achievements, Certifications, Contact)
  /layout        (Navbar, Footer, ThemeToggle, CustomCursor)
/lib
  utils.ts
  constants.ts
/data
  profile.ts     (← todo el contenido real vive aquí, ver Sección 9)
/hooks
  useScrollReveal.ts
  useActiveSection.ts
/types
  index.ts
/public
  /images        (foto de perfil, favicon, og-image)
  cv/CV_Daniel_Monterroso_Maestro.pdf   (el PDF ya generado, para el botón "Descargar CV")
/styles
  globals.css
README.md
package.json
LICENSE
.env.example
.gitignore
vercel.json
```

**Principio de arquitectura:** ninguna sección de `/components/sections` debe tener texto ni cifras hardcodeadas — todo se importa desde `/data/profile.ts`. Esto permite actualizar el portafolio completo editando un solo archivo, igual que el CV Maestro es la fuente única de verdad para los CVs.

---

## 6. CONTENIDO POR SECCIÓN (con datos reales ya resueltos)

### 6.1 Hero
- Foto de perfil (la misma del CV Maestro, `/public/images/daniel-monterroso.jpg`).
- Nombre: **Daniel Monterroso**.
- Cargo principal: **Gerente de Operaciones** (rol actual en Ultra-Clean GT).
- Subtítulo dinámico (texto rotativo con Framer Motion, ciclando entre estas 4 frases — no inventar otras):
  - "Ventas & Desarrollo Comercial"
  - "Operaciones & Administración"
  - "Liderazgo de Equipos"
  - "Tecnología & IA aplicada al negocio"
- Botones de acción: **Descargar CV** (enlaza al PDF en `/public/cv/`), **Contactar** (scroll a sección contacto), **LinkedIn**, **GitHub**, **Enviar Email**, **WhatsApp**.
- Micro-copy de apoyo: "Más de 10 años combinando ventas, operaciones y tecnología para generar resultados de negocio."

### 6.2 Sobre mí
Basado literalmente en el resumen del CV Maestro: trayectoria de más de una década en ventas, servicio al cliente, operaciones, administración y liderazgo, desarrollada en industrias diversas (telecomunicaciones, retail, tecnología, transporte, seguridad, educación superior, limpieza industrial). Formación activa en tecnología, IA, automatización y desarrollo web. Diferenciador: unir experiencia comercial, administrativa y tecnológica para resolver problemas reales de negocio.

### 6.3 Propuesta de valor (cards animadas)
Usar exactamente los 6 puntos de la Sección 9.2 — no agregar ni quitar.

### 6.4 Línea de tiempo profesional
Timeline interactivo (scroll-linked, con Framer Motion) usando exactamente los 11 puestos de la Sección 9.3, en orden cronológico descendente (más reciente primero). Cada nodo muestra: cargo, empresa, fechas, 2-3 bullets de logros/responsabilidades (ya redactados en la Sección 9.3, no resumir de más ni inventar).

### 6.5 Competencias (barras animadas)
Usar exactamente los niveles definidos en la Sección 9.4 (mismos valores que el CV Maestro, para mantener consistencia entre ambos documentos). Animar el llenado de la barra al entrar en viewport.

### 6.6 Sectores donde ha trabajado
Cards con ícono (Lucide) para cada sector real de la Sección 9.5: Retail, Tecnología, Telecomunicaciones, Educación Superior, Transporte/Logística, Seguridad, Industria.

### 6.7 Herramientas y tecnología
Agrupar por categoría exactamente como en la Sección 9.6 (CRM, ERP/Help Desk, Productividad, Comunicación, IA, Tecnología/Desarrollo). Usar ícono genérico de Lucide o wordmark simple por herramienta — no usar logos con derechos de marca sin licencia; preferir texto + ícono neutro.

### 6.8 Logros
Cards animadas (contador incremental al entrar en viewport donde aplique) con los 6 logros headline de la Sección 9.7, y opcionalmente enlazar a la lista completa de 18 logros del CV Maestro en un acordeón "Ver todos los logros".

### 6.9 Certificaciones y formación
Timeline elegante (más simple que el profesional) con los ítems de la Sección 9.8.

### 6.10 Contacto
- Formulario funcional (nombre, correo, mensaje) — usar Route Handler de Next.js (`/app/api/contact/route.ts`) con envío por Resend o similar (dejar configurable vía `.env.example`, sin inventar una API key).
- Botón directo de WhatsApp con el número real (Sección 9.1).
- Correo, teléfono, LinkedIn y GitHub reales (Sección 9.1).
- Mapa: marcador simple de Ciudad de Guatemala (no requiere API key de pago — usar un mapa estático o embed de OpenStreetMap).

---

## 7. PALETA DE COLORES (idéntica al CV Maestro, para coherencia de marca personal)

```
--navy:        #132844   (fondo oscuro primario / texto sobre claro)
--navy-2:      #1B3660   (superficies secundarias en dark mode)
--navy-3:      #0E1E33   (fondo más profundo, hero dark mode)
--accent:      #1E9E6C   (verde — color de marca principal, CTAs, acentos, glow de cursor)
--accent-dark: #157A54   (hover states, texto sobre fondos claros)
--gold:        #C68A3E   (acento secundario para logros/certificaciones, uso moderado)
--bg-light:    #F4F6F8   (fondo modo claro)
--card-light:  #FFFFFF
--text:        #212832
--text-soft:   #535E6C
--border:      #E3E7EC
```

Dark mode: fondo `--navy-3`/`--navy`, tarjetas en `--navy-2` con borde `rgba(255,255,255,0.08)`, texto `#EAF0F6`, acentos en `--accent`. Mantener mucho espacio en blanco/negro (whitespace generoso) en ambos modos.

---

## 8. ANIMACIONES Y DETALLES

- Framer Motion para scroll reveal (`whileInView`), stagger en grids de cards.
- Cursor personalizado con glow en `--accent` (solo desktop, `pointer: fine`; desactivar en touch).
- Glow sutil en hover de botones y cards (box-shadow con `--accent` a baja opacidad).
- Texto rotativo en el subtítulo del hero (interval ~2.5s, transición fade+slide).
- Barras de competencia y contadores de logros animados al entrar en viewport.
- Respetar `prefers-reduced-motion`: desactivar animaciones no esenciales si el usuario lo indica.
- Nada debe distraer del contenido — animaciones cortas (200-500ms), sin loops infinitos llamativos.

---

## 9. ANEXO DE DATOS — FUENTE ÚNICA DE VERDAD

> Copiar tal cual a `/data/profile.ts`. Estos son los datos reales y completos extraídos del CV Maestro. No agregar, no inferir, no completar vacíos.

### 9.1 Datos de contacto
```ts
export const contact = {
  fullName: "Daniel Monterroso",
  currentRole: "Gerente de Operaciones",
  phone: "+502 3312-8499",
  whatsapp: "50233128499",
  email: "monterroso221b@gmail.com",
  location: "Ciudad de Guatemala, Guatemala",
  linkedin: "https://linkedin.com/in/danielmonterroso-gt",
  github: "https://github.com/T-bird214",
};
```

### 9.2 Propuesta de valor
```ts
export const valueProps = [
  "Más de 10 años en ventas B2B, B2C y venta consultiva, con cierres de hasta USD 300,000.",
  "Liderazgo comprobado: supervisión de equipos de hasta 15 personas y capacitación a 50+ colaboradores.",
  "Experiencia real en compras públicas y licitaciones (Guatecompras).",
  "Manejo funcional de CRM, ERP, Help Desk y suite de productividad completa.",
  "Adopción activa de IA (ChatGPT, Claude, Gemini) como herramienta diaria de productividad.",
  "Aprendizaje continuo: desarrollo web, automatización y cloud en formación activa.",
];
```

### 9.3 Timeline profesional (orden: más reciente primero)
```ts
export const experience = [
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

// Nota transversal (no es un puesto, mostrar como bloque aparte en el timeline o como card destacada)
export const crossCuttingNote = {
  title: "Compras Públicas y Licitaciones (Guatecompras)",
  description:
    "A lo largo de su trayectoria comercial, Daniel ha participado en procesos de compras públicas a través de Guatecompras: búsqueda y seguimiento de concursos, compra directa, cotizaciones y contratos abiertos, publicación de ofertas, y gestión de reuniones para presentar productos y proyectos ante instituciones y entidades de gobierno.",
};
```

### 9.4 Competencias (mismos niveles que el CV Maestro)
```ts
export const skills = [
  { name: "Ventas & Desarrollo Comercial", level: 92 },
  { name: "Servicio al Cliente / CX", level: 92 },
  { name: "Administración & Liderazgo", level: 85 },
  { name: "Operaciones & Logística", level: 85 },
  { name: "Licitaciones / Guatecompras", level: 70 },
  { name: "Tecnología, IA & Automatización", level: 68 },
  { name: "Desarrollo Web (Vercel / Supabase)", level: 55 },
];
```

### 9.5 Sectores
```ts
export const sectors = [
  "Retail",
  "Tecnología",
  "Telecomunicaciones",
  "Educación Superior",
  "Transporte y Logística",
  "Seguridad",
  "Industria",
];
```

### 9.6 Herramientas (agrupadas)
```ts
export const tools = {
  crm: ["HubSpot", "Zoho CRM", "Pipedrive"],
  erpHelpdesk: ["AS400", "Zendesk"],
  productivity: ["Excel", "Word", "PowerPoint", "Outlook", "Power BI", "Microsoft 365", "Google Workspace"],
  communication: ["Teams", "Slack", "Zoom", "Google Meet"],
  ai: ["ChatGPT", "Claude", "Gemini", "Copilot", "Perplexity", "NotebookLM", "n8n"],
  techDev: ["Git", "GitHub", "Python", "PostgreSQL", "Supabase", "Vercel", "AWS (básico)", "Linux"],
};
```

### 9.7 Logros headline (para cards de la sección Logros)
```ts
export const achievementsHighlight = [
  { value: "USD 300,000", label: "Venta individual más alta registrada" },
  { value: "Q200,000+", label: "Contratos comerciales cerrados en Ultra-Clean GT" },
  { value: "50+", label: "Personas capacitadas en lanzamientos de producto" },
  { value: "15", label: "Personas supervisadas en un mismo equipo" },
  { value: "10+ años", label: "De trayectoria combinando ventas, operaciones y tecnología" },
  { value: "Guatemala", label: "Cobertura nacional en capacitación de tiendas" },
];

// Lista completa (18 logros) para el acordeón "Ver todos los logros" — ver CV Maestro Sección "Logros Cuantificables"
```

### 9.8 Educación y certificaciones
```ts
export const education = [
  { title: "Administración de Empresas", institution: "Universidad del Valle de Guatemala (AVE-UVG)", period: "En curso" },
  { title: "Bachillerato en Ciencias y Letras", institution: "Colegio Ciudad Vieja", period: "2011 – 2012" },
];

export const certifications = [
  { title: "Desarrollo con IA · Marketing Digital · Hacking Ético", institution: "BIG School", period: "2026" },
  { title: "Computer Hardware Basics", institution: "Cisco Networking Academy", period: "2024" },
  { title: "Excel Avanzado & Tablas Dinámicas · Power BI", institution: "Cámara de Industria de Guatemala", period: null },
  { title: "Formación complementaria online", institution: "Platzi · MoureDev", period: null },
];

export const internalTraining = [
  { company: "Samsung", topics: "Marketing · Procesos comerciales · Capacitación de producto" },
  { company: "Tigo", topics: "Telecomunicaciones · Help Desk · Atención al cliente" },
];
```

### 9.9 Idiomas
```ts
export const languages = [
  { name: "Español", level: "Nativo", pct: 100 },
  { name: "Inglés · lectura", level: null, pct: 75 },
  { name: "Inglés · escritura", level: null, pct: 60 },
  { name: "Inglés · conversación", level: null, pct: 45 },
];
```

### 9.10 Puestos objetivo (para SEO / metadata y footer)
```ts
export const targetRoles = [
  "Ejecutivo Comercial", "Account Executive", "Business Development", "Customer Success",
  "Supervisor / Coordinador", "Gerente Comercial", "Gerente Administrativo", "Gerente de Operaciones",
  "Administración", "Compras", "Licitaciones", "Logística", "Preventa", "Consultoría", "Desarrollo de Negocios",
];
```

---

## 10. SEO

- Metadata API de Next.js 15 con título: **"Daniel Monterroso — Ventas, Operaciones & Tecnología"**.
- Descripción basada en el resumen real del CV (Sección 6.2), max ~155 caracteres.
- OpenGraph image generada con `opengraph-image.tsx` (foto + nombre + cargo).
- Twitter Card `summary_large_image`.
- `robots.txt` permitiendo indexación completa.
- `sitemap.xml` con la única ruta `/`.
- Favicon y `manifest.json` (PWA básico, no obligatorio instalar).

---

## 11. PERFORMANCE

Objetivo Lighthouse: 100 en Performance, Accessibility, Best Practices y SEO.
- Imágenes con `next/image`, formatos modernos (AVIF/WebP), `priority` solo en la foto del hero.
- Fuentes con `next/font` (self-hosted, sin bloqueo de render).
- Code splitting automático de Next.js; evitar librerías pesadas innecesarias.
- Animaciones con `transform`/`opacity` únicamente (evitar reflow).

---

## 12. README.md (debe incluir)

1. Descripción del proyecto y su propósito (portafolio profesional).
2. Stack tecnológico.
3. Instalación: `npm install`.
4. Desarrollo local: `npm run dev`.
5. Build: `npm run build` / `npm start`.
6. Variables de entorno (`.env.example` documentado, sin exponer secretos reales).
7. Deploy en Vercel (conectar repo, variables de entorno, dominio).
8. Arquitectura de carpetas (tabla igual a la Sección 5).
9. Cómo actualizar el contenido (editar `/data/profile.ts` — ligar explícitamente al CV Maestro como fuente).
10. Licencia.

---

## 13. GIT

- `.gitignore` profesional para Next.js (`node_modules`, `.next`, `.env*.local`, etc.).
- Commits sugeridos en el README bajo Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).

---

## 14. REGLAS DURAS (no negociables)

1. Cero datos inventados: todo texto y cifra visible en la UI debe existir literalmente en la Sección 9 de este documento.
2. Cero lorem ipsum, cero TODOs, cero código incompleto.
3. La tecnología se presenta como complemento, nunca como identidad principal.
4. El proyecto debe compilar y ejecutarse con `npm install && npm run dev` sin pasos adicionales.
5. Debe quedar listo para desplegar en Vercel y publicar en GitHub sin modificaciones manuales de datos.
