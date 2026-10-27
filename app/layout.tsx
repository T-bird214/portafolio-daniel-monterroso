import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { contact, seo } from "@/data/profile";

// Fuentes auto-hospedadas vía @fontsource (archivos .woff2 empaquetados con
// el proyecto, sin ninguna llamada a fonts.googleapis.com en build ni en
// runtime). Se eligió esto en vez de `next/font/google` porque este último
// necesita descargar los archivos desde Google en el momento del build, lo
// cual falla en entornos de red restringida (CI, sandboxes corporativos);
// con @fontsource el @font-face ya viene resuelto localmente y con
// font-display: swap, así que el resultado final (cero bloqueo de render)
// es el mismo o mejor que con next/font.
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/playfair-display/400.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/400-italic.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://daniel-monterroso.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s — ${contact.fullName}`,
  },
  description: seo.description,
  keywords: [
    "Daniel Monterroso",
    "Gerente de Operaciones Guatemala",
    "Ventas B2B Guatemala",
    "Business Development Guatemala",
    "Guatecompras licitaciones",
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
    { media: "(prefers-color-scheme: light)", color: "#F5F5F0" },
    { media: "(prefers-color-scheme: dark)", color: "#161614" },
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
