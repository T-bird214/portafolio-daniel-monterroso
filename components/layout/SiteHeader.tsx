"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#casos", label: "Casos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
];

export default function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <a
        href="#contenido"
        className="bg-primary text-primary-foreground sr-only z-[70] rounded-md px-4 py-2 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <header className="border-border/60 bg-header fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl">
        <div className="wrap flex h-16 items-center justify-between gap-4">
          <a
            href="#inicio"
            className="group flex min-h-11 items-center gap-2.5 font-semibold tracking-tight"
          >
            <span
              aria-hidden
              className="bg-primary text-primary-foreground grid size-8 place-items-center rounded-lg font-mono text-[0.8rem]"
            >
              DM
            </span>
            <span className="sr-only text-sm sm:not-sr-only">Daniel Monterroso</span>
          </a>

          <nav aria-label="Navegación principal" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon-lg"
              className="size-11"
              aria-label="Cambiar entre tema claro y oscuro"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            >
              <Sun className="hidden size-[1.15rem] dark:block" aria-hidden />
              <Moon className="size-[1.15rem] dark:hidden" aria-hidden />
            </Button>
            <Button asChild className="hidden h-10 px-4 sm:inline-flex">
              <a href="#contacto">Hablemos</a>
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              className="size-11 md:hidden"
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden /> : <Menu aria-hidden />}
            </Button>
          </div>
        </div>

        <nav
          id="menu-movil"
          aria-label="Navegación móvil"
          className={cn("border-border/60 border-t md:hidden", open ? "block" : "hidden")}
        >
          <ul className="wrap flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-border/40 flex min-h-12 items-center border-b text-base last:border-0"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
