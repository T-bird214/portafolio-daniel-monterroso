import type { MetadataRoute } from "next";
import { contact, seo } from "@/data/profile";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${contact.fullName} — Portafolio`,
    short_name: contact.fullName,
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f14",
    theme_color: "#0d0f14",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
