import { ArrowUpRight, Code2, Mail, MessageCircle, Network } from "lucide-react";
import CvButtons from "@/components/CvButtons";
import ContactForm from "@/components/contact/ContactForm";
import { DotPattern } from "@/components/ui/dot-pattern";
import { WhenIdle } from "@/components/ui/when-idle";
import { contact } from "@/data/profile";

const channels = [
  {
    label: "Correo",
    value: contact.email,
    href: `mailto:${contact.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "WhatsApp",
    value: contact.phone,
    href: `https://wa.me/${contact.whatsapp}`,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "daniel-monterroso-gt",
    href: contact.linkedin,
    icon: Network,
    external: true,
  },
  {
    label: "GitHub",
    value: "T-bird214",
    href: contact.github,
    icon: Code2,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="contacto"
      aria-labelledby="contacto-title"
      className="defer-render border-border relative isolate overflow-hidden border-t py-20 sm:py-28"
    >
      <div aria-hidden className="absolute top-0 left-0 -z-10 h-[24rem] w-full max-w-[40rem]">
        <WhenIdle>
          <DotPattern
            width={30}
            height={30}
            cr={1}
            className="[mask-image:radial-gradient(ellipse_70%_70%_at_20%_20%,#000_30%,transparent_100%)] text-(--grid-dot)"
          />
        </WhenIdle>
      </div>
      <div className="wrap grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <p className="eyebrow">05 · Contacto</p>
          <h2 id="contacto-title" className="section-title mt-4">
            ¿Tu equipo necesita orden en{" "}
            <span className="serif-accent text-brand">operaciones o CRM</span>?
          </h2>
          <p className="text-muted-foreground mt-5 text-lg">
            Busco roles de operaciones, CRM o RevOps, remoto o en Guatemala. Escríbeme por el canal
            que prefieras; respondo personalmente.
          </p>

          <ul className="mt-8 grid gap-2">
            {channels.map(({ icon: Icon, ...c }) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group border-border bg-card hover:border-brand flex min-h-14 items-center gap-4 rounded-xl border px-4 py-3 transition-colors"
                >
                  <span className="bg-muted grid size-9 shrink-0 place-items-center rounded-lg">
                    <Icon className="size-4" aria-hidden />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="text-muted-foreground text-xs">{c.label}</span>
                    <span className="truncate font-medium">{c.value}</span>
                  </span>
                  <ArrowUpRight
                    className="text-muted-foreground group-hover:text-brand ml-auto size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                  {c.external && <span className="sr-only">(se abre en otra pestaña)</span>}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <p className="eyebrow mb-3">Currículum</p>
            <CvButtons />
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
