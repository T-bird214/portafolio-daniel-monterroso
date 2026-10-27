import { contact, targetRoles } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1C1C1C]/10 bg-[#F5F5F0] py-10 transition-colors duration-300 dark:border-[#ECECE3]/10 dark:bg-[#161614]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg text-[#1C1C1C] dark:text-[#ECECE3]">
              {contact.fullName}
            </p>
            <p className="mt-1 text-xs text-[#6A6A5E] dark:text-[#A2A292]">
              {contact.currentRole} · {contact.location}
            </p>
          </div>
          <p className="text-xs text-[#6A6A5E] dark:text-[#A2A292]">
            © {year} {contact.fullName}. Todos los derechos reservados.
          </p>
        </div>

        {/* Roles objetivo: ayuda a SEO y a que un reclutador entienda rápido qué perfiles busca Daniel. */}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-[#1C1C1C]/10 pt-6 dark:border-[#ECECE3]/10">
          {targetRoles.map((role) => (
            <span
              key={role}
              className="rounded bg-[#1C1C1C]/5 px-2 py-1 text-[10px] tracking-wide text-[#6A6A5E] uppercase dark:bg-[#ECECE3]/5 dark:text-[#A2A292]"
            >
              {role}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
