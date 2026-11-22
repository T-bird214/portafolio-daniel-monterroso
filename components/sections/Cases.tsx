import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BentoGrid } from "@/components/ui/bento-grid";
import { BlurFade } from "@/components/ui/blur-fade";
import { Card } from "@/components/ui/card";
import { ShineBorder } from "@/components/ui/shine-border";
import { cases, pipelineStages, type CaseStudy } from "@/data/portfolio";

function PipelineVisual() {
  const flow = pipelineStages.slice(0, 6);
  const [won, lost] = pipelineStages.slice(6);
  return (
    <figure className="border-border bg-background/70 rounded-2xl border p-4 sm:p-5">
      <figcaption className="eyebrow mb-4">Pipeline de 8 etapas en HubSpot</figcaption>
      <ol className="grid gap-2 sm:grid-cols-2">
        {flow.map((stage, i) => (
          <li
            key={stage}
            className="border-border bg-card flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm"
          >
            <span className="bg-muted grid size-6 shrink-0 place-items-center rounded-md font-mono text-[0.7rem]">
              {i + 1}
            </span>
            {stage}
          </li>
        ))}
        <li className="border-signal/40 bg-signal-soft flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm font-medium">
          <span className="bg-signal text-background grid size-6 shrink-0 place-items-center rounded-md font-mono text-[0.7rem]">
            7
          </span>
          {won}
        </li>
        <li className="border-border text-muted-foreground flex items-center gap-3 rounded-lg border border-dashed px-3 py-2.5 text-sm">
          <span className="bg-muted text-foreground grid size-6 shrink-0 place-items-center rounded-md font-mono text-[0.7rem]">
            8
          </span>
          {lost}
        </li>
      </ol>
      <div className="text-muted-foreground mt-4 grid gap-2 font-mono text-[0.75rem] sm:grid-cols-3">
        <span className="bg-muted rounded-md px-2.5 py-1.5">n8n · lead nuevo cada 10 min</span>
        <span className="bg-muted rounded-md px-2.5 py-1.5">Resumen diario</span>
        <span className="bg-muted rounded-md px-2.5 py-1.5">Telegram · voz + confirmación</span>
      </div>
    </figure>
  );
}

function ServerVisual() {
  return (
    <figure className="border-border bg-background/70 rounded-2xl border p-4 sm:p-5">
      <figcaption className="eyebrow mb-4">Arquitectura (sin puertos públicos)</figcaption>
      <div className="grid gap-3">
        <div className="border-border text-muted-foreground rounded-lg border border-dashed px-3 py-2 text-center text-sm">
          Acceso solo por canal privado
        </div>
        <div className="border-border bg-card rounded-xl border p-3">
          <p className="text-muted-foreground mb-2 font-mono text-[0.75rem]">
            Oracle Cloud · Podman rootless + Quadlet
          </p>
          <div className="grid grid-cols-3 gap-2 text-center text-[0.8rem] font-medium">
            <span className="bg-muted rounded-md px-2 py-2">PostgreSQL</span>
            <span className="bg-muted rounded-md px-2 py-2">n8n</span>
            <span className="bg-muted rounded-md px-2 py-2">Asistente IA</span>
          </div>
        </div>
        <div className="text-muted-foreground grid gap-2 font-mono text-[0.75rem] sm:grid-cols-2">
          <span className="bg-signal-soft text-foreground rounded-md px-2.5 py-1.5">
            Respaldo diario cifrado → externo
          </span>
          <span className="bg-signal-soft text-foreground rounded-md px-2.5 py-1.5">
            Chequeo de salud · cada 5 min
          </span>
        </div>
      </div>
    </figure>
  );
}

function CaseBody({ c }: { c: CaseStudy }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-brand font-mono text-sm">{c.index}</span>
        <span className="text-muted-foreground text-xs">{c.context}</span>
      </div>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-[1.7rem]">{c.title}</h3>

      <dl className="mt-6 grid gap-5 text-[0.95rem] leading-relaxed">
        <div>
          <dt className="eyebrow mb-1.5">Problema</dt>
          <dd className="text-muted-foreground">{c.problem}</dd>
        </div>
        <div>
          <dt className="eyebrow mb-2">Qué construí</dt>
          <dd>
            <ul className="grid gap-2">
              {c.built.map((b) => (
                <li key={b} className="flex gap-2.5">
                  <Check className="text-brand mt-1 size-4 shrink-0" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </dd>
        </div>
        <div>
          <dt className="eyebrow mb-2">Stack</dt>
          <dd className="flex flex-wrap gap-1.5">
            {c.stack.map((s) => (
              <Badge key={s} variant="outline" className="h-6 px-2.5 font-mono text-[0.72rem]">
                {s}
              </Badge>
            ))}
          </dd>
        </div>
        <div className="border-brand bg-brand-soft rounded-xl border-l-2 px-4 py-3">
          <dt className="eyebrow text-foreground mb-1">Resultado</dt>
          <dd>{c.result}</dd>
        </div>
      </dl>

      {c.link && (
        <a
          href={c.link.href}
          target="_blank"
          rel="noreferrer"
          className="decoration-brand hover:text-brand mt-6 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium underline underline-offset-4"
        >
          {c.link.label}
          <ArrowUpRight className="size-4" aria-hidden />
          <span className="sr-only">(se abre en otra pestaña)</span>
        </a>
      )}
    </div>
  );
}

export default function Cases() {
  const [crm, politas, ultra, server] = cases;
  return (
    <section id="casos" aria-labelledby="casos-title" className="defer-render wrap py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="eyebrow">02 · Casos</p>
        <h2 id="casos-title" className="section-title mt-4">
          Sistemas que construí y <span className="serif-accent text-brand">opero</span> hoy.
        </h2>
        <p className="text-muted-foreground mt-5 text-lg">
          Cuatro casos reales, contados como los vivo: el problema, lo que armé, con qué y qué
          cambió. Sin cifras infladas ni datos de clientes.
        </p>
      </div>

      <BentoGrid className="mt-12 auto-rows-auto grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-6">
        <BlurFade inView className="lg:col-span-6">
          <Card className="ring-border relative h-full gap-0 rounded-3xl p-6 sm:p-8">
            <ShineBorder
              borderWidth={1.5}
              duration={16}
              shineColor={["var(--brand)", "var(--signal)"]}
              className="max-sm:animate-none"
            />
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <CaseBody c={crm} />
              <div className="lg:pt-10">
                <PipelineVisual />
              </div>
            </div>
          </Card>
        </BlurFade>

        {[politas, ultra].map((c, i) => (
          <BlurFade key={c.id} inView delay={0.06 * i} className="lg:col-span-3">
            <Card className="ring-border h-full gap-0 rounded-3xl p-6 sm:p-8">
              <CaseBody c={c} />
            </Card>
          </BlurFade>
        ))}

        <BlurFade inView className="lg:col-span-6">
          <Card className="ring-border h-full gap-0 rounded-3xl p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
              <CaseBody c={server} />
              <div className="lg:pt-10">
                <ServerVisual />
              </div>
            </div>
          </Card>
        </BlurFade>
      </BentoGrid>
    </section>
  );
}
