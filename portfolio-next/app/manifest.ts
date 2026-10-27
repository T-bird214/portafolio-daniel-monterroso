import type { MetadataRoute } from "next";
import { contact, seo } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${contact.fullName} — Portafolio`,
    short_name: contact.fullName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5F5F0",
    theme_color: "#5A5A40",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
