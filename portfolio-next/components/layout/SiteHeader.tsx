import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#casos", label: "Casos" },
  { href: "#certificaciones", label: "Certificaciones" },
  { href: "#trayectoria", label: "Trayectoria" },
  { href: "#contacto", label: "Contacto" },
];

// Server Component: solo el botón de tema y el menú móvil son islas cliente.
export default function SiteHeader() {
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
            <ThemeToggle />
            <a href="#contacto" className={cn(buttonVariants(), "hidden h-10 px-4 sm:inline-flex")}>
              Hablemos
            </a>
            <MobileMenu links={links} />
          </div>
        </div>
      </header>
    </>
  );
}
