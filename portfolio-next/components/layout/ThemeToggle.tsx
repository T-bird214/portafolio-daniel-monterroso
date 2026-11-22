"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

// Isla cliente: solo el botón de tema.
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <button
      type="button"
      className="hover:bg-muted inline-grid size-11 place-items-center rounded-lg transition-colors"
      aria-label="Cambiar entre tema claro y oscuro"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden size-[1.15rem] dark:block" aria-hidden />
      <Moon className="size-[1.15rem] dark:hidden" aria-hidden />
    </button>
  );
}
