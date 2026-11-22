# Daniel Monterroso · Portafolio 2026

Next.js 16.2.10 · React 19 · Tailwind CSS v4 · shadcn/ui · Magic UI · Motion.

## Desarrollo

```bash
npm ci
npm run dev
```

Modo oscuro predeterminado y tema claro con next-themes. Diseño probado en 360 px y 1440 px. Respeta `prefers-reduced-motion` (sin animaciones decorativas y valores finales directos).

### Contenido editable

- `data/portfolio.ts`: titular, resumen, cifras del hero, casos, stack y certificaciones. Para marcar una certificación como obtenida: `status: "obtenida"`, `date: "mes año"` y `url` de verificación.
- `data/profile.ts`: contacto, trayectoria, formación y sectores.
- `data/cv-en.ts`: CV en inglés (página imprimible `/cv/en`).

### Componentes UI

Base shadcn/ui (`components/ui/button|badge|card|tabs`, registro oficial) y Magic UI (MIT, `https://magicui.design/r/<nombre>.json`): border-beam, number-ticker, marquee, dot-pattern, shine-border, bento-grid y animated-gradient-text. Se agregan con `npx shadcn@latest add <url>`. Ajustes locales por rendimiento y accesibilidad: number-ticker respeta movimiento reducido y se carga aparte (`lazy-number-ticker.tsx`, muestra el valor final mientras carga); dot-pattern usa círculos SVG simples; border-beam y dot-pattern se cargan cuando el navegador está libre (`when-idle.tsx`, `lazy-effects.tsx`). blur-fade se probó y se reemplazó por `reveal.tsx` (CSS `animation-timeline`, sin JavaScript).

### CV en inglés

```bash
npm run build && npx next start -p 3210
brave-browser --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/cv/CV_Daniel_Monterroso_2026_EN.pdf http://localhost:3210/cv/en
```

### QA

```bash
node scripts/qa-axe.mjs http://localhost:3210/   # axe en 360/1440 px, tema claro y oscuro
```

## Compilar y verificar

```bash
npm run build
node scripts/verify-contact.cjs
npm run sync:portfolio
cd portfolio-next
npm ci
npm run build
node scripts/verify-contact.cjs
```

La prueba invoca el handler compilado sin servidor HTTP y elimina las credenciales de correo de su propio proceso: no envía correos. Verifica 11 escenarios de API con 16 solicitudes.

## Vercel: dos directorios de raíz compatibles

La raíz es la fuente de edición. `portfolio-next/` contiene una copia real, no un submódulo. Ejecutar `npm run sync:portfolio` después de editar y antes de hacer commit. Copia app/, components/, public/, data/, lib/, scripts/ y configuración de compilación. No copia dependencias, builds, secretos ni metadatos Git. Se puede desplegar con Root Directory `.` o `portfolio-next`, instalación `npm ci` y compilación `npm run build`.

Variables del formulario en Vercel:

- `RESEND_API_KEY`: clave de Resend, exclusivamente servidor.
- `CONTACT_TO_EMAIL`: destinatario.
- `CONTACT_FROM_EMAIL`: remitente de dominio verificado en Resend.
- `NEXT_PUBLIC_SITE_URL`: URL canónica de producción para metadatos, sitemap y robots.

`POST /api/contact` requiere JSON, valida tipos, límites y correo. Honeypot y rate limit de cinco solicitudes por minuto por IP/instancia. El límite en memoria no se comparte entre instancias serverless. Si el proveedor no está configurado o falla, devuelve `502` y la UI mantiene el mensaje, ofreciendo WhatsApp y correo. No registra contenido de prospectos en logs.

La integración de correo existente permanece en `lib/lead-service.ts`.

## Assets

- Foto existente: `public/images/daniel-monterroso.jpg`.
- CV en español (botones del sitio): `public/cv/CV_Daniel_Monterroso_2026.pdf`. Copias idénticas: `public/cv/CV_Daniel_Monterroso.pdf` y `public/CV_Daniel_Monterroso.pdf`.
- CV en inglés: `public/cv/CV_Daniel_Monterroso_2026_EN.pdf` (generado desde `/cv/en`).

El PDF canónico corresponde al CV_Daniel_Monterroso_2026.pdf adjuntado por Daniel. Para reemplazarlo por un nuevo CV, sobrescribir ambas rutas y ejecutar sincronización. El archivo histórico `CV_Daniel_Monterroso_2026.pdf` se conserva.

Enlaces: [EvoNest](https://evonest.company/), [LinkedIn](https://linkedin.com/in/daniel-monterroso-gt).

Las cifras comerciales provienen del perfil existente y del CV. Los casos no incluyen datos privados de clientes ni datos internos de infraestructura.
