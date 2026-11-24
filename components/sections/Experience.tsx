import { crossCuttingNote, education, experience, internalTraining, sectors } from "@/data/profile";

const recent = experience.slice(0, 4);
const earlier = experience.slice(4);

export default function Experience() {
  return (
    <section
      id="trayectoria"
      aria-labelledby="trayectoria-title"
      className="defer-render wrap py-20 sm:py-28"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end">
        <div>
          <p className="eyebrow">04 · Trayectoria</p>
          <h2 id="trayectoria-title" className="section-title mt-4">
            Diez años en la <span className="serif-accent text-brand">operación real</span>.
          </h2>
        </div>
        <p className="text-muted-foreground text-lg">
          Transporte, bodega, servicio al cliente, ventas y compras públicas. De ahí viene la forma
          en que diseño procesos: pensando en quien los va a usar todos los días.
        </p>
      </div>

      <div className="mt-12 text-base">
        <ol className="border-border relative grid gap-0 border-l pl-6 sm:pl-8">
          {recent.map((job) => (
            <li key={`${job.company}-${job.period}`} className="relative pb-10 last:pb-6">
              <span
                aria-hidden
                className="bg-brand ring-background absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full ring-4 sm:-left-[calc(2rem+5px)]"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-lg font-semibold tracking-tight">
                  {job.role}{" "}
                  <span className="text-muted-foreground font-normal">· {job.company}</span>
                </h3>
                <p className="text-muted-foreground shrink-0 font-mono text-xs">{job.period}</p>
              </div>
              <ul className="text-muted-foreground mt-3 grid max-w-3xl gap-1.5 text-[0.95rem]">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span aria-hidden className="bg-brand mt-2.5 h-px w-3 shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="border-border rounded-2xl border p-5 sm:p-6">
            <h3 className="eyebrow mb-4">Etapa anterior</h3>
            <ul className="grid gap-3">
              {earlier.map((job) => (
                <li
                  key={`${job.company}-${job.period}`}
                  className="border-border/70 flex flex-col gap-0.5 border-b pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
                >
                  <span>
                    <span className="font-medium">{job.role}</span>
                    <span className="text-muted-foreground"> · {job.company}</span>
                  </span>
                  <span className="text-muted-foreground shrink-0 font-mono text-xs">
                    {job.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6">
            <div className="border-border bg-brand-soft rounded-2xl border p-5 sm:p-6">
              <h3 className="font-semibold tracking-tight">{crossCuttingNote.title}</h3>
              <p className="text-muted-foreground mt-2 text-[0.95rem]">
                Búsqueda y seguimiento de concursos, compra directa, cotizaciones y contratos
                abiertos, publicación de ofertas y presentaciones ante instituciones de gobierno.
              </p>
            </div>
            <div className="border-border rounded-2xl border p-5 sm:p-6">
              <h3 className="eyebrow mb-3">Sectores</h3>
              <p className="text-[0.95rem]">{sectors.join(" · ")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 text-base">
        <h3 className="mb-6 text-xl font-semibold tracking-tight">Formación e idiomas</h3>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="border-border rounded-2xl border p-5 sm:p-6">
            <h4 className="eyebrow mb-4">Educación</h4>
            <ul className="grid gap-4">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="font-medium">{e.title}</p>
                  <p className="text-muted-foreground text-sm">
                    {e.institution} · {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="border-border rounded-2xl border p-5 sm:p-6">
            <h4 className="eyebrow mb-4">Idiomas</h4>
            <ul className="grid gap-4">
              <li>
                <p className="font-medium">Español</p>
                <p className="text-muted-foreground text-sm">
                  Nativo. Negociación, licitaciones y presentaciones institucionales.
                </p>
              </li>
              <li>
                <p className="font-medium">Inglés</p>
                <p className="text-muted-foreground text-sm">
                  Lectura técnica y comercial avanzada, comunicación escrita B2B (B1/B2).
                </p>
              </li>
            </ul>
          </div>
          <div className="border-border rounded-2xl border p-5 sm:p-6">
            <h4 className="eyebrow mb-4">Capacitación interna</h4>
            <ul className="grid gap-4">
              {internalTraining.map((t) => (
                <li key={t.company}>
                  <p className="font-medium">{t.company}</p>
                  <p className="text-muted-foreground text-sm">{t.topics}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
