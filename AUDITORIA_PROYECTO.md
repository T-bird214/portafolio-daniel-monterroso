# AUDITORÍA_PROYECTO.md

## Portafolio Profesional — Daniel Monterroso

**Fecha:** 6 de julio de 2026
**Alcance:** Análisis completo del ZIP entregado (`daniel-monterroso-_-portafolio.zip`) contra el `PROMPT_PORTFOLIO_DANIEL_MONTERROSO.md` (fuente única de verdad de contenido) y contra las instrucciones del proyecto.
**Estado del proyecto:** ⛔ **NO listo para producción.** Compila y corre, pero tiene bloqueadores críticos de integridad de datos, funcionalidad y arquitectura que deben resolverse antes de tocar diseño o performance.

No he modificado ningún archivo todavía. Este documento es la base para el plan de trabajo que ejecutaré a continuación.

---

## 0. Resumen ejecutivo

El ZIP que subiste **no es un proyecto Next.js**, como pedía el prompt maestro. Es una aplicación **Vite + React 19 (SPA, sin servidor)**, generada por Google AI Studio. Compila sin errores y el tipado de TypeScript pasa limpio, pero:

1. **Hay logros y datos inventados** dentro de `src/data/profile.ts` (concretamente en la lista de 18 logros), violando directamente la regla más importante de tu propio prompt: _"cero datos inventados"_.
2. **Tu foto de perfil no está integrada.** El Hero usa un ícono vectorial con las iniciales "DM" en vez de la fotografía que subiste.
3. **El botón "Descargar CV" no existe** en ningún lado, y no hay ningún PDF ni carpeta `public/` en el proyecto.
4. **El formulario de contacto es una simulación.** No envía nada a ningún lado — solo espera 1.5 segundos con `setTimeout` y muestra un mensaje de éxito falso. No existe backend, no existe integración con Resend, no existe ninguna API.
5. **Falta SEO por completo**: sin metadata real, sin OpenGraph, sin sitemap, sin robots.txt, sin favicon, y el `<html>` está marcado como `lang="en"` con contenido en español.
6. **No hay ESLint ni Prettier configurados**, pese a que el `README.md` interno los da por hecho.
7. Existen **dependencias innecesarias** heredadas de la plantilla de Google AI Studio (`@google/genai`, `express`, `dotenv`) que no tienen ningún uso real en el código.

La buena noticia: los datos que **sí** se transcribieron (experiencia laboral, propuesta de valor, habilidades, herramientas, sectores, educación) son **fieles al 100%** a la Sección 9 de tu prompt maestro. El problema está concentrado, no disperso — lo cual es bueno, porque significa que se puede corregir de forma quirúrgica.

---

## 1. Alcance y metodología

Antes de escribir esta auditoría:

- Descomprimí el ZIP completo y revisé cada uno de sus 24 archivos.
- Leí línea por línea los 14 componentes de `src/components/`, `App.tsx`, `main.tsx`, `index.css`, `index.html`, `package.json`, `tsconfig.json`, `vite.config.ts`, `.env.example`, `.gitignore`, `metadata.json` y `README.md`.
- Comparé cada dato mostrado en la UI contra la Sección 9 (Anexo de Datos) del `PROMPT_PORTFOLIO_DANIEL_MONTERROSO.md`, campo por campo.
- Ejecuté `npm install`, `npm run build` y `npm run lint` (que en este proyecto es `tsc --noEmit`) en un entorno aislado para verificar que el proyecto realmente compila, y no asumí nada por el README.
- Revisé la foto que adjuntaste (`mi-foto.jpeg`) para confirmar que existe y es apta para el Hero.

---

## 2. Verificación técnica realizada

| Comando                         | Resultado                                                                                  |
| ------------------------------- | ------------------------------------------------------------------------------------------ |
| `npm install`                   | ✅ Éxito — 213 paquetes instalados, sin errores                                            |
| `npm run build` (`vite build`)  | ✅ Éxito — compila en ~5s                                                                  |
| `npm run lint` (`tsc --noEmit`) | ✅ Sin errores de tipos                                                                    |
| Tamaño del bundle de producción | ⚠️ `index-*.js`: **418.66 kB** (124.42 kB gzip) en **un solo archivo**, sin code splitting |

Conclusión técnica: el código **no está roto**. El problema no es "no funciona", es "no es lo que se pidió, y muestra información no verificada como si fuera real".

---

## 3. Arquitectura actual vs. arquitectura especificada

| Aspecto                | Especificado en el prompt maestro                                         | Encontrado en el ZIP                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Framework              | Next.js 15 (App Router, Server Components)                                | **Vite 6 + React 19 (SPA pura, client-only)**                                                                                                                   |
| Routing / Metadata     | Metadata API de Next.js, `sitemap.ts`, `robots.ts`, `opengraph-image.tsx` | No existen — no hay backend ni generación de metadata                                                                                                           |
| Formulario de contacto | Route Handler (`/app/api/contact/route.ts`) + Resend                      | Simulado en el cliente con `setTimeout`, sin backend                                                                                                            |
| Imágenes               | `next/image` optimizado                                                   | No aplica (no es Next.js) — y de todos modos no hay ninguna imagen en el proyecto                                                                               |
| Carpeta `/public`      | Fotos, CV en PDF, favicon                                                 | **No existe la carpeta**                                                                                                                                        |
| Estilos                | TailwindCSS                                                               | ✅ Tailwind v4 vía plugin de Vite — correcto                                                                                                                    |
| Animaciones            | Framer Motion                                                             | ✅ Se usa el paquete `motion` (renombrado de Framer Motion) — correcto                                                                                          |
| Dark mode              | `next-themes`                                                             | Implementado a mano con `useState` + `localStorage` — funcionalmente equivalente, pero no es el paquete pedido (aceptable solo si se confirma quedarse en Vite) |
| Despliegue Vercel      | Sí                                                                        | ✅ Vite es 100% desplegable en Vercel, solo cambia el _framework preset_                                                                                        |

**Esta es la decisión arquitectónica más importante pendiente** y la explico en la sección 7.

---

## 4. Hallazgos detallados

### 4.1 🔴 CRÍTICO — Integridad de datos: hay logros inventados

Tu instrucción es explícita: _"Nunca inventes... logros... métricas"_. Comparé los **18 logros** de `allAchievements` en `src/data/profile.ts` contra todo el contenido de la Sección 9 del prompt maestro (que es la única fuente de verdad disponible; el "CV Maestro" original no está en mis archivos de proyecto). Resultado:

| #           | Logro (resumen)                                                                                                                                                                                     | Estado                                                                                                                                                                              |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1–9, 15, 17 | Ventas USD 300k, contratos Q200k+, capacitación 50+, equipos de 15, IA en Ultra-Clean, landing page Vercel/Supabase, Guatecompras, logística UPana, KPIs Amazon/Tigo, alarmas Prevent, estudios UVG | ✅ Verificados contra la Sección 9                                                                                                                                                  |
| **10**      | _"...reduciendo costos operativos de combustible en un **15%**."_                                                                                                                                   | 🔴 **Inventado.** Esa cifra no aparece en ningún lugar del brief.                                                                                                                   |
| **12**      | _"...auditorías... en **más de 30 puntos de venta** departamentales."_                                                                                                                              | 🔴 **Inventado.** El brief solo dice que hizo auditorías POP para Samsung, sin ninguna cifra de puntos de venta.                                                                    |
| **14**      | _"Migración de bases de datos operacionales locales a Supabase, mejorando la disponibilidad de datos en tiempo real."_                                                                              | 🔴 **Inventado por completo.** Supabase solo se menciona en tu experiencia como parte del stack de la landing page de Ultra-Clean GT, nunca como una "migración de bases de datos". |
| 11          | _"Creación de tableros de control avanzados de inventarios en Excel..."_                                                                                                                            | 🟠 Embellecido — el dato real solo dice "administré inventarios, bodega y coordinación de compras", sin mencionar tableros de Excel.                                                |
| 13          | _"...con sistema de Help Desk **Zendesk**"_ (atado a Tigo específicamente)                                                                                                                          | 🟠 Embellecido — Zendesk aparece en tu lista general de herramientas, pero nunca se vincula a Tigo en tu experiencia.                                                               |
| 16          | _"...con **ministerios** de gobierno..."_                                                                                                                                                           | 🟡 Menor — el brief dice "instituciones y entidades de gobierno", no específicamente "ministerios".                                                                                 |

Además, en `Footer.tsx` aparece el texto **"Lighthouse Verified"** como si fuera un sello de certificación real. Ningún reporte de Lighthouse existe en el proyecto — es una afirmación falsa mostrada a reclutadores.

También encontré alteraciones menores de fidelidad de datos:

- En `languages`, se inventaron las etiquetas _"Avanzado", "Intermedio", "Práctico"_ donde tu prompt maestro decía explícitamente `level: null` (es decir, "omitir si no hay dato").
- En `certifications`, donde el prompt maestro decía `period: null` para dos certificaciones, el ZIP inventó las etiquetas _"Certificado"_ y _"Aprendizaje Activo"_.

**Por qué esto importa más que cualquier otro hallazgo:** un reclutador o cliente que verifique estos datos en una entrevista puede encontrar una discrepancia y eso daña tu credibilidad — justo lo opuesto al objetivo del proyecto. Esto se corrige antes que cualquier otra cosa.

### 4.2 🔴 CRÍTICO — Foto de perfil y CV en PDF ausentes

- No existe carpeta `public/` en el proyecto ni en el ZIP.
- El Hero (`Hero.tsx`) no usa tu fotografía en ningún momento. En su lugar dibuja un círculo con un SVG y las iniciales "DM".
- No hay ningún botón "Descargar CV" — ni en el Hero ni en el Navbar — a pesar de ser un requerimiento explícito del prompt maestro. El botón del Navbar etiquetado como "CV Download CTA" en un comentario en realidad solo hace scroll a la sección de contacto; el comentario del código es engañoso.
- No hay PDF del CV en ningún lado del repositorio.

### 4.3 🔴 CRÍTICO — El formulario de contacto no envía nada

`Contact.tsx` línea 10–19:

```ts
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  if (!formState.name || !formState.email || !formState.message) return;
  setStatus("submitting");
  setTimeout(() => {
    setStatus("success");
    setFormState({ name: "", email: "", message: "" });
  }, 1500);
};
```

Esto es una simulación pura en el cliente. No hay:

- Ninguna carpeta de API ni función serverless.
- Ninguna integración con Resend (el paquete `resend` ni siquiera está en `package.json`).
- Ninguna variable de entorno relacionada a email en `.env.example` (solo existen `GEMINI_API_KEY` y `APP_URL`, ambas leftover de Google AI Studio).
- Ninguna validación de spam, sanitización o rate limiting (no hay nada que proteger todavía, porque no hay backend).

Adicionalmente, el `<input type="email" required>` usa validación nativa estricta del navegador — esto contradice tu instrucción explícita de **no bloquear un lead por un correo mal escrito**. Habrá que cambiarlo a un campo permisivo con validación mínima anti-spam, tal como pediste.

### 4.4 🔴 CRÍTICO — Decisión de framework pendiente (ver Sección 7)

El proyecto es Vite, no Next.js. Antes de escribir una sola línea de código nuevo necesito que confirmes la dirección, porque cambia toda la arquitectura de: metadata/SEO, el backend del formulario, y la estructura de carpetas.

### 4.5 🟠 ALTO — SEO inexistente

- `index.html` tiene `<title>My Google AI Studio App</title>` y `<html lang="en">` con contenido 100% en español (esto es un error de accesibilidad **y** de SEO: los lectores de pantalla y buscadores asumen inglés).
- No hay `<meta name="description">`, ni Open Graph, ni Twitter Card.
- No hay `sitemap.xml`, `robots.txt`, `favicon`, ni `manifest.json`.
- No hay datos estructurados (Schema.org / `Person`) para que buscadores y LinkedIn entiendan que es un perfil profesional.

### 4.6 🟠 ALTO / 🟡 MEDIO — Accesibilidad

- En `Timeline.tsx`, las tarjetas de experiencia son `<div onClick={...}>` en vez de elementos interactivos reales — no son alcanzables por teclado y no tienen `aria-expanded` para indicar el estado abierto/cerrado del acordeón. Lo mismo aplica parcialmente a la interacción de expandir/contraer.
- `CustomCursor.tsx` no respeta `prefers-reduced-motion`, a pesar de que tu prompt maestro lo pide explícitamente para todas las animaciones.
- El halo de cursor personalizado se oculta correctamente en dispositivos táctiles — esto sí está bien resuelto.
- Los botones y el toggle de tema sí tienen `aria-label` — correcto.
- Falta verificar en un lector de pantalla real que el acordeón de "18 logros" y el rotador de texto del Hero (`aria-live`) se anuncien correctamente; hoy no tienen ningún soporte de `aria-live`.

### 4.7 🟡 MEDIO — Calidad de código y arquitectura de componentes

Tu propio prompt maestro es explícito: _"ninguna sección de `/components/sections` debe tener texto ni cifras hardcodeadas — todo se importa desde `/data/profile.ts`"_. Encontré varias violaciones:

- `Hero.tsx`: los tres porcentajes de habilidades (92%, 85%, 68%) están hardcodeados en JSX en vez de mapear el array `skills` importado de `profile.ts`. Si mañana actualizas tus habilidades en `profile.ts`, el Hero quedará desincronizado.
- `About.tsx`: el array `values` (los "3 pilares de enfoque") está completamente hardcodeado dentro del componente — no existe en `profile.ts`.
- `ValueProps.tsx` y `Tools.tsx`: los títulos e íconos de cada tarjeta están hardcodeados como arrays paralelos a los datos importados, en vez de que el dato mismo incluya título e ícono. Es frágil: si el orden de `valueProps` en `profile.ts` cambia, los títulos quedan desalineados con el contenido.
- No existe ningún archivo de configuración de ESLint (`.eslintrc` / `eslint.config.js`) ni de Prettier (`.prettierrc`), aunque el `README.md` interno del proyecto (heredado, no el tuyo) no los menciona pero tu instrucción del proyecto sí los exige explícitamente.

### 4.8 🟡 MEDIO — Dependencias innecesarias / limpieza pendiente

`package.json` incluye paquetes que no se usan en ningún archivo del código:

- `@google/genai` — sin ninguna llamada a la API de Gemini en el código. Es boilerplate de Google AI Studio.
- `express`, `dotenv`, `@types/express` — sugieren un servidor que nunca se incluyó en el ZIP (el script `"clean": "rm -rf dist server.js"` referencia un `server.js` que no existe).
- `tsx` — no se usa ningún script de Node/TS ejecutable en este proyecto.
- `esbuild` como devDependency explícita, cuando Vite ya lo trae internamente.

También quedan artefactos de la plataforma de origen que no aportan nada en GitHub/Vercel: `metadata.json` y `assets/.aistudio/`.

### 4.9 🟡 MEDIO — Rendimiento

- `src/index.css` carga Google Fonts vía `@import url(...)` — esto **bloquea el renderizado inicial** (contradice directamente tu requerimiento de "fuentes sin bloqueo de render"). Debería auto-hospedarse o cargarse con `<link rel="preload">` + `font-display: swap`.
- El build genera **un solo bundle de 418 kB** (124 kB gzip) sin code splitting ni lazy loading — para una landing de una sola página esto es aceptable pero mejorable (por ejemplo, cargar `motion` de forma diferida no crítica, o dividir por secciones con `React.lazy` si crece el contenido).
- No hay ninguna imagen todavía, así que no hay nada que optimizar en ese frente — pero en cuanto se integre tu foto, se debe hacer con formatos modernos (WebP/AVIF) y dimensiones explícitas para evitar _layout shift_.

### 4.10 🟡 MEDIO — Seguridad

- No hay secretos expuestos en el código (correcto).
- `.gitignore` cubre `.env*` correctamente.
- No hay protección anti-spam ni rate limiting porque, de nuevo, no existe ningún backend todavía — esto se diseñará junto con la integración real de Resend.

### 4.11 🟢 BAJO — Detalles menores

- `package.json` tiene `"name": "react-example"` — debe renombrarse.
- El comentario del botón de Navbar dice "CV Download CTA" pero no descarga nada — comentario engañoso que hay que corregir junto con el botón real.
- El `README.md` interno del proyecto (generado por AI Studio) ya está bien escrito y puede reutilizarse como base, ajustándolo a la arquitectura final que se elija.

---

## 5. Fortalezas encontradas

Para que la crítica no tape lo que sí está bien hecho:

- **Fidelidad de datos en un 90%+**: experiencia laboral (10 puestos), propuesta de valor, habilidades, sectores, herramientas y educación están transcritos exactamente igual a la Sección 9 de tu prompt maestro, sin inventar nada.
- El proyecto **sí compila y corre** sin errores de instalación ni de tipos.
- El diseño editorial (paleta, tipografía `Playfair Display` + `Inter`, modo oscuro/claro) está bien ejecutado a nivel visual y es coherente con la inspiración pedida (Stripe/Vercel/editorial premium).
- `Timeline.tsx` es el componente mejor arquitecturado: 100% data-driven, sin texto hardcodeado.
- El detalle de accesibilidad táctil en `CustomCursor.tsx` (se desactiva en touch) está bien resuelto.
- El dark mode persiste correctamente en `localStorage` y respeta `prefers-color-scheme` como fallback inicial.

---

## 6. Riesgos si se publica tal como está

1. **Riesgo reputacional/ético**: publicar logros con cifras inventadas (15% de ahorro en combustible, 30+ puntos de venta, migración de base de datos que nunca ocurrió) puede ser cuestionado en una entrevista y dañar tu credibilidad frente a un reclutador.
2. **Riesgo funcional**: cualquier persona que use el formulario de contacto creerá que te escribió, pero **el mensaje nunca llega a ningún lado**. Perderías oportunidades reales de negocio sin saberlo.
3. **Riesgo de marca personal**: sin tu foto y sin botón de descarga de CV, el portafolio pierde justamente los dos elementos que lo hacen "tu" tarjeta de presentación y no una plantilla genérica.
4. **Riesgo de descubribilidad**: sin SEO básico, el sitio prácticamente no aparecerá en buscadores ni se compartirá bien en LinkedIn (sin Open Graph, el preview del link sale vacío o roto).

---

## 7. Decisiones que necesito que tomes antes de continuar

### Decisión A — Framework: ¿Next.js o mantener Vite?

|               | **Opción 1: Migrar a Next.js 15** (lo que pedía el prompt original)                                                                                                                                                                      | **Opción 2: Quedarnos en Vite + funciones serverless de Vercel**                                                                         |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Pros          | Metadata API, `sitemap.ts`, `robots.ts` y `opengraph-image.tsx` nativos; Route Handlers listos para el formulario; `next/image` con optimización automática; mejor SEO "de fábrica"                                                      | Reutiliza el 90% del código ya escrito; migración mucho más rápida; Vite sigue siendo 100% compatible con Vercel                         |
| Contras       | Hay que reescribir el enrutamiento de componentes a App Router y migrar el formulario a Route Handlers — más trabajo, pero se hace una sola vez                                                                                          | Hay que armar manualmente el sitemap, robots.txt, meta tags y una función serverless aparte (`/api/contact.ts`) en vez de tenerlo nativo |
| Recomendación | **Recomiendo esta opción**, porque es la que tu propio prompt maestro especificó punto por punto (Metadata API, Route Handlers, `next/image`) y es el estándar más sólido para un sitio que quieres que se indexe bien y crezca a futuro | Válida solo si prefieres velocidad de entrega sobre alineación total con el brief original                                               |

**Necesito tu confirmación explícita de cuál eliges** antes de tocar la estructura de carpetas, porque cambia todo el plan de implementación.

### Decisión B — Los 3 logros inventados y los 2 embellecidos

Necesito que me confirmes, para cada uno, si:

- (a) tienes el dato real y me lo compartes para reemplazarlo, o
- (b) simplemente se elimina de la lista porque no es un dato verificado.

No voy a inventar un reemplazo ni dejar el dato falso — eso violaría la regla que tú mismo estableciste.

### Decisión C — Integración de Resend

Para conectar el formulario de verdad necesito que tú (no yo) generes tu propia API key de Resend desde tu cuenta y la coloques como variable de entorno — nunca la compartas dentro del chat. Yo dejo todo el código listo para que solo pegues la key en `.env.local` (local) y en el panel de Vercel (producción).

---

## 8. Plan de implementación priorizado (una vez respondidas las decisiones anteriores)

**Fase 0 — Decisiones (esta auditoría)**
Confirmar Decisiones A, B y C de la sección 7.

**Fase 1 — Integridad de datos**
Corregir/eliminar los logros inventados, quitar el sello falso de "Lighthouse Verified", revertir `languages` y `certifications` a lo que diga la fuente real (o confirmar los valores correctos contigo).

**Fase 2 — Arquitectura base**
Según la Decisión A: o bien migrar a Next.js 15 (App Router, estructura de carpetas del prompt maestro) o bien limpiar y reforzar la app Vite actual (quitar dependencias muertas, agregar ESLint + Prettier, agregar carpeta `public/`).

**Fase 3 — Activos de marca**
Integrar tu fotografía (optimizada, con `next/image` o equivalente), agregar el botón "Descargar CV" y su PDF, arreglar `lang="es"` y el `<title>`.

**Fase 4 — Backend del formulario de contacto**
Construir la API (Route Handler o función serverless) conectada a Resend, con validación permisiva (no bloquear por formato de correo), protección anti-spam básica (honeypot + rate limiting), variables de entorno documentadas en `.env.example`, y estados de carga/éxito/error reales en el frontend.

**Fase 5 — SEO técnico**
Metadata, Open Graph, Twitter Card, `sitemap.xml`, `robots.txt`, favicon, `manifest.json`, Schema.org `Person`.

**Fase 6 — Accesibilidad y rendimiento**
Arreglar navegación por teclado en el Timeline, `aria-expanded`, `prefers-reduced-motion`, fuentes auto-hospedadas, revisión de code splitting.

**Fase 7 — QA final y entrega**
Lighthouse real (no una etiqueta falsa), revisión responsive, y entrega de los dos artefactos que pediste: el proyecto listo (`PORTAFOLIO_PRODUCCION.zip`) y `GUIA_INSTALACION_COMPLETA.md`.

---

## 9. Próximos pasos inmediatos

Quedo a la espera de tus respuestas a las Decisiones A, B y C de la Sección 7. En cuanto las confirmes, empiezo por la Fase 1 (integridad de datos), que es la más urgente y no depende de la decisión de framework.
