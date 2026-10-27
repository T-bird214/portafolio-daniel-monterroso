# Daniel Monterroso · Portafolio ejecutivo v2

Next.js 16.2.10 · React 19 · Tailwind CSS v4 · Motion.

## Desarrollo

```bash
npm ci
npm run dev
```

Modo oscuro predeterminado y tema claro persistente con next-themes. Navegación superior en escritorio y dock inferior en móvil. Respeta reducción de movimiento. Carrusel óptico de seis nodos, simulación local de pipeline, trayectoria completa y matriz de dominio sin porcentajes arbitrarios.

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

La demo de pipeline no conecta ni escribe en Supabase o HubSpot y no envía WhatsApp. Es una simulación, iniciada por el visitante. La integración de correo existente permanece en `lib/lead-service.ts`.

## Assets

- Foto existente: `public/images/daniel-monterroso.jpg`.
- CV canónico: `public/cv/CV_Daniel_Monterroso.pdf`.
- Copia idéntica: `public/CV_Daniel_Monterroso.pdf`.

Se conserva el PDF canónico que existía al empezar la actualización. Para reemplazarlo por un nuevo CV, sobrescribir ambas rutas y ejecutar sincronización. El archivo histórico `CV_Daniel_Monterroso_2026.pdf` se conserva.

Enlaces: [EvoNest](https://evonest.company/), [LinkedIn](https://linkedin.com/in/daniel-monterroso-gt).

Las cifras comerciales provienen del perfil existente y del encargo. La carga inferior a un segundo se presenta como objetivo de rendimiento, no como resultado medido.
