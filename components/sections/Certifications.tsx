import { ArrowUpRight, BadgeCheck, Clock3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import { Card } from "@/components/ui/card";
import { certificationsRoadmap, type Certification } from "@/data/portfolio";
import { certifications as pastCertifications } from "@/data/profile";

function StatusBadge({ cert }: { cert: Certification }) {
  if (cert.status === "obtenida") {
    return (
      <Badge className="bg-signal-soft text-foreground h-6 gap-1 px-2.5">
        <BadgeCheck aria-hidden />
        Obtenida · {cert.date}
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="h-6 gap-1 px-2.5">
      <Clock3 aria-hidden />
      En curso · {cert.date}
    </Badge>
  );
}

export default function Certifications() {
  const groups = ["HubSpot Academy", "Google Skillshop"] as const;
  return (
    <section
      id="certificaciones"
      aria-labelledby="cert-title"
      className="defer-render border-border bg-card/40 border-y py-20 sm:py-28"
    >
      <div className="wrap">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="eyebrow">03 · Certificaciones</p>
            <h2 id="cert-title" className="section-title mt-4">
              Formalizando lo que <span className="serif-accent text-brand">ya hago</span>.
            </h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Estoy certificando el trabajo diario en HubSpot y la medición con Google. Cada tarjeta
            se actualiza con la fecha y el enlace de verificación cuando la obtengo.
          </p>
        </div>

        <div className="mt-12 grid gap-10">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="eyebrow mb-4">{group}</h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {certificationsRoadmap
                  .filter((c) => c.issuer === group)
                  .map((cert) => (
                    <li key={cert.title}>
                      <Reveal className="h-full">
                        <Card className="ring-border h-full justify-between gap-6 rounded-2xl p-5">
                          <div>
                            <p className="text-muted-foreground text-xs">{cert.issuer}</p>
                            <p className="mt-1.5 text-lg font-semibold tracking-tight">
                              {cert.title}
                            </p>
                          </div>
                          <div className="flex items-center justify-between gap-3">
                            <StatusBadge cert={cert} />
                            {cert.status === "obtenida" && cert.url && (
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex min-h-11 items-center gap-1 text-sm font-medium underline underline-offset-4"
                              >
                                Verificar
                                <ArrowUpRight className="size-4" aria-hidden />
                                <span className="sr-only">
                                  {cert.title} (se abre en otra pestaña)
                                </span>
                              </a>
                            )}
                          </div>
                        </Card>
                      </Reveal>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="eyebrow mb-4">Formación complementaria</h3>
            <ul className="border-border bg-border grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-2">
              {pastCertifications.map((c) => (
                <li key={c.title} className="bg-background flex flex-col gap-1 p-5">
                  <span className="font-medium">{c.title}</span>
                  <span className="text-muted-foreground text-sm">
                    {c.institution}
                    {c.period ? ` · ${c.period}` : ""}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
