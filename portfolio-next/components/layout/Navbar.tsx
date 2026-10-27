"use client";
import { useTheme } from "next-themes";
import { ArrowUpRight, House, Layers3, BriefcaseBusiness, Mail, Sun, Moon } from "lucide-react";
const links = [
  { href: "#inicio", label: "Inicio", icon: House },
  { href: "#proyectos", label: "Proyectos", icon: Layers3 },
  { href: "#experiencia", label: "Trayectoria", icon: BriefcaseBusiness },
  { href: "#contacto", label: "Contacto", icon: Mail },
];
export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>
      <header className="topbar">
        <a href="#inicio" className="wordmark" aria-label="Daniel Monterroso, inicio">
          DM<span>®</span>
        </a>
        <nav aria-label="Navegación principal" className="desktop-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="icon-button theme-toggle"
            aria-label="Cambiar tema claro u oscuro"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            <Sun className="sun" size={18} />
            <Moon className="moon" size={18} />
          </button>
          <a
            href="https://evonest.company/"
            target="_blank"
            rel="noreferrer"
            className="nav-evonest"
          >
            EvoNest <ArrowUpRight size={15} />
          </a>
        </div>
      </header>
      <nav className="thumb-dock" aria-label="Navegación móvil">
        {links.map(({ icon: Icon, ...l }) => (
          <a key={l.href} href={l.href}>
            <Icon size={19} />
            <span>{l.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
