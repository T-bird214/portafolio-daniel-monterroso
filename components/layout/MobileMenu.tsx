"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// Isla cliente: solo el menú de navegación en móvil.
export default function MobileMenu({ links }: { links: { href: string; label: string }[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="hover:bg-muted inline-grid size-11 place-items-center rounded-lg transition-colors"
        aria-expanded={open}
        aria-controls="menu-movil"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X aria-hidden /> : <Menu aria-hidden />}
      </button>
      <nav
        id="menu-movil"
        aria-label="Navegación móvil"
        hidden={!open}
        className="border-border/60 bg-background absolute inset-x-0 top-16 border-t border-b"
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
    </div>
  );
}
