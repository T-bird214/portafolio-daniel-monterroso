"use client";

import dynamic from "next/dynamic";

// Efectos decorativos de Magic UI en chunks aparte: no pesan en la carga inicial.
export const BorderBeam = dynamic(
  () => import("@/components/ui/border-beam").then((m) => m.BorderBeam),
  { ssr: false },
);
export const DotPattern = dynamic(
  () => import("@/components/ui/dot-pattern").then((m) => m.DotPattern),
  { ssr: false },
);
