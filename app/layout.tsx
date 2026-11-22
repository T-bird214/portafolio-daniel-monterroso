import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { contact, seo } from "@/data/profile";

// Texto con la fuente del sistema (Inter si está instalada; si no, SF, Segoe UI o
// Roboto): cero descargas y cero recálculos de layout en móvil. Solo se descarga
// Playfair Display itálica (auto-hospedada con @fontsource) para los acentos.
import "@fontsource/playfair-display/400-italic.css";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafolio-daniel-monterroso.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s — ${contact.fullName}`,
  },
  description: seo.description,
  keywords: [
    "Daniel Monterroso",
    "EvoNest",
    "Operaciones Guatemala",
    "HubSpot CRM Guatemala",
    "RevOps",
    "n8n automatización",
    "Ventas B2B Guatemala",
  ],
  authors: [{ name: contact.fullName }],
  creator: contact.fullName,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "profile",
    locale: "es_GT",
    url: siteUrl,
    siteName: `${contact.fullName} — Portafolio`,
    title: seo.title,
    description: seo.description,
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
  },
  // Next.js detecta automáticamente app/icon.svg y genera el <link rel="icon">
  // correspondiente; no hace falta declararlo aquí también.
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0f14" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
