# Portafolio Profesional — Daniel Monterroso

Portafolio personal construido con Next.js 15+ (App Router), TypeScript, TailwindCSS y Framer Motion. Sirve como carta de presentación digital frente a reclutadores y clientes potenciales, con un formulario de contacto real conectado a Resend.

> Ver `AUDITORIA_PROYECTO.md` y `GUIA_INSTALACION_COMPLETA.md` para el historial de decisiones y la guía de instalación paso a paso para principiantes.

## Stack tecnológico

| Capa                  | Tecnología                                                             |
| --------------------- | ---------------------------------------------------------------------- |
| Framework             | Next.js (App Router, Route Handlers)                                   |
| Lenguaje              | TypeScript (estricto)                                                  |
| Estilos               | TailwindCSS v4                                                         |
| Animación             | Motion (Framer Motion)                                                 |
| Íconos                | lucide-react                                                           |
| Tema claro/oscuro     | next-themes                                                            |
| Correo del formulario | Resend                                                                 |
| Fuentes               | @fontsource (Inter, Playfair Display, JetBrains Mono) — autohospedadas |
| Despliegue            | Vercel                                                                 |

## Requisitos

- Node.js 20 LTS o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
npm run build
npm start
```

## Calidad de código

```bash
npm run lint        # ESLint (incluye reglas de Core Web Vitals y React Hooks)
npm run lint:fix     # ESLint con autocorrección
npm run format       # Prettier (con orden de clases de Tailwind)
npm run format:check
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores. Ver ese archivo para instrucciones detalladas de cómo obtener cada uno (especialmente `RESEND_API_KEY`).

| Variable               | Requerida                                 | Descripción                                                   |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------- |
| `RESEND_API_KEY`       | Sí (para que el formulario envíe correos) | API key de tu cuenta de Resend                                |
| `CONTACT_TO_EMAIL`     | Sí                                        | Correo donde recibes los mensajes del formulario              |
| `CONTACT_FROM_EMAIL`   | No (default: `onboarding@resend.dev`)     | Remitente de Resend                                           |
| `NEXT_PUBLIC_SITE_URL` | No (recomendado)                          | URL pública final del sitio, usada en metadata/sitemap/robots |

## Arquitectura de carpetas

```
/app
  layout.tsx        Metadata SEO, fuentes, ThemeProvider
  page.tsx           Composición de todas las secciones
  sitemap.ts / robots.ts / manifest.ts / opengraph-image.tsx
  icon.svg           Favicon
  /api/contact/route.ts   Route Handler del formulario (Resend)
/components
  /layout            Navbar, Footer
  /sections          Hero, About, ValueProps, Timeline, Skills, Sectors,
                     Tools, Achievements, Certifications, Contact
  /ui                CustomCursor
  /providers         ThemeProvider
/data
  profile.ts         ÚNICA fuente de verdad de todo el contenido
/lib
  contact-validation.ts   Validación permisiva del formulario
  lead-service.ts         Envío de correo (Resend) + puntos de extensión
  rate-limit.ts           Rate limiting básico en memoria
  useHasMounted.ts / useMediaQuery.ts   Hooks SSR-safe
/public
  /images            Foto de perfil
  /cv                CV en PDF (pendiente — ver nota abajo)
```

## Cómo actualizar el contenido

Todo el texto, cifras y datos del sitio se editan en un único archivo: **`data/profile.ts`**. Ningún componente de `/components/sections` debe tener texto o cifras escritas directamente — si algo aparece hardcodeado ahí, es un bug, repórtalo.

Este archivo es un reflejo directo de la Sección 9 de `PROMPT_PORTFOLIO_DANIEL_MONTERROSO.md` (tu CV Maestro). Si tu CV cambia, actualiza primero esa fuente y luego refleja el cambio aquí.

## Pendiente antes de publicar

1. **CV en PDF**: coloca el archivo real en `public/cv/CV_Daniel_Monterroso.pdf` (hay un `LEEME.txt` en esa carpeta con la instrucción exacta). El botón "Descargar CV" del Hero ya apunta a esa ruta.
2. **Resolución de la foto de perfil**: la imagen actual (`public/images/daniel-monterroso.jpg`) es de 162×162px. Se ve bien en el tamaño actual del Hero, pero si más adelante se usa más grande, conviene subir una versión de mayor resolución (500×500px o más).

## Despliegue en Vercel

Ver `GUIA_INSTALACION_COMPLETA.md`, sección "Despliegue en Vercel", para el paso a paso completo con capturas de dónde hacer clic.

## Licencia

Uso personal — Daniel Monterroso. Todos los derechos reservados.
