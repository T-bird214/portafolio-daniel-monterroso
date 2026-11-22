import Image from "next/image";
import { ArrowDownRight, MapPin } from "lucide-react";
import portrait from "@/public/images/daniel-monterroso.jpg";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { LazyNumberTicker } from "@/components/ui/lazy-number-ticker";
import { WhenIdle } from "@/components/ui/when-idle";
import { BorderBeam, DotPattern } from "@/components/ui/lazy-effects";
import CvButtons from "@/components/CvButtons";
import { headlineParts, heroStats } from "@/data/portfolio";
import { contact } from "@/data/profile";

const systemRows = [
  { label: "Pipeline HubSpot", value: "8 etapas" },
  { label: "Leads nuevos (n8n)", value: "cada 10 min" },
  { label: "Chequeo de salud", value: "cada 5 min" },
  { label: "Envíos a clientes", value: "con aprobación" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[34rem] sm:h-[44rem]">
        <WhenIdle>
          <DotPattern
            width={30}
            height={30}
            cr={1}
            className="[mask-image:radial-gradient(ellipse_70%_70%_at_50%_30%,#000_35%,transparent_100%)] text-(--grid-dot)"
          />
        </WhenIdle>
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] bg-[radial-gradient(ellipse_55%_45%_at_45%_0%,var(--brand-soft),transparent_70%)]"
      />

      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div>
          <p className="border-border bg-card/70 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium">
            <span className="relative flex size-2">
              <span className="bg-signal absolute inline-flex size-full animate-ping rounded-full opacity-60 motion-reduce:animate-none" />
              <span className="bg-signal relative inline-flex size-2 rounded-full" />
            </span>
            <AnimatedGradientText
              colorFrom="var(--brand)"
              colorTo="var(--signal)"
              speed={1.2}
              className="font-semibold max-sm:animate-none"
            >
              Abierto a roles de Operaciones, CRM y RevOps
            </AnimatedGradientText>
          </p>

          <h1
            id="hero-title"
            className="mt-6 text-[2.85rem] leading-[0.95] font-semibold tracking-[-0.045em] sm:text-7xl lg:text-[5.4rem]"
          >
            Daniel <span className="serif-accent text-brand">Monterroso</span>
          </h1>

          <p className="mt-7 grid max-w-2xl gap-1.5">
            <span className="text-xl font-semibold tracking-tight sm:text-[1.7rem]">
              {headlineParts.role}
              <span className="sr-only"> | </span>
            </span>
            <span className="text-muted-foreground text-lg sm:text-[1.35rem]">
              {headlineParts.focus}{" "}
              <span className="text-brand font-mono text-[0.85em] whitespace-nowrap">
                ({headlineParts.stack})
              </span>
              <span className="sr-only"> | </span>
            </span>
            <span className="text-muted-foreground text-lg sm:text-[1.35rem]">
              {headlineParts.track}
            </span>
          </p>

          <p className="text-muted-foreground mt-5 flex items-center gap-2 text-sm">
            <MapPin className="size-4" aria-hidden />
            {contact.location} · remoto o presencial
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button asChild className="h-11 gap-2 px-5 text-[0.95rem]">
              <a href="#casos">
                Ver casos reales
                <ArrowDownRight aria-hidden />
              </a>
            </Button>
            <CvButtons />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[19rem] sm:max-w-[26rem] lg:mx-0 lg:justify-self-end">
          <div className="border-border bg-card relative overflow-hidden rounded-3xl border p-2 shadow-2xl shadow-black/10 dark:shadow-black/40">
            <Image
              src={portrait}
              alt="Retrato de Daniel Monterroso"
              priority
              placeholder="blur"
              sizes="(min-width: 640px) 416px, 304px"
              quality={70}
              className="aspect-[4/4.4] w-full rounded-[1.1rem] object-cover object-top"
            />
            <WhenIdle media="(min-width: 640px)">
              <BorderBeam
                size={140}
                duration={9}
                colorFrom="var(--brand)"
                colorTo="var(--signal)"
                borderWidth={1.5}
                className="motion-reduce:hidden"
              />
            </WhenIdle>
          </div>

          <div className="border-border bg-card relative -mt-14 -mr-2 ml-2 rounded-2xl border p-4 shadow-xl sm:ml-10 lg:-ml-12">
            <p className="eyebrow mb-3">Sistemas que opero</p>
            <dl className="grid gap-2 text-sm">
              {systemRows.map((r) => (
                <div
                  key={r.label}
                  className="border-border/70 flex items-center justify-between gap-4 border-t pt-2 first:border-0 first:pt-0"
                >
                  <dt className="text-muted-foreground">{r.label}</dt>
                  <dd className="font-mono text-[0.8rem] font-medium">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <div className="wrap mt-14 sm:mt-20">
        <dl className="border-border bg-card/60 grid grid-cols-2 overflow-hidden rounded-2xl border lg:grid-cols-4">
          {heroStats.map((s, i) => (
            <div
              key={s.label}
              className={[
                "flex flex-col-reverse gap-1 p-5 sm:p-6",
                i % 2 === 1 ? "border-border border-l" : "",
                i > 1 ? "border-border border-t lg:border-t-0" : "",
                i === 2 ? "lg:border-l" : "",
              ].join(" ")}
            >
              <dt className="text-muted-foreground text-sm">{s.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                <span className="sr-only">
                  {s.prefix}
                  {s.value}
                  {s.suffix}
                </span>
                <span aria-hidden>
                  {s.prefix}
                  <LazyNumberTicker value={s.value} className="text-foreground tracking-tight" />
                  {s.suffix}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
