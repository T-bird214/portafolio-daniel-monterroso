import { Reveal } from "@/components/ui/reveal";
import { pillars, summary } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="perfil"
      aria-labelledby="perfil-title"
      className="defer-render wrap py-20 sm:py-28"
    >
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">01 · Perfil</p>
          <h2 id="perfil-title" className="section-title mt-4">
            Operaciones que funcionan,{" "}
            <span className="serif-accent text-brand">con tecnología</span> que se mide.
          </h2>
        </div>
        <Reveal>
          <p className="text-lg leading-relaxed sm:text-[1.35rem] sm:leading-relaxed">{summary}</p>
        </Reveal>
      </div>

      <ul className="border-border bg-border mt-14 grid gap-px overflow-hidden rounded-2xl border sm:grid-cols-3">
        {pillars.map((p, i) => (
          <li key={p.title} className="bg-background p-6 sm:p-7">
            <Reveal>
              <span className="text-brand font-mono text-xs">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
              <p className="text-muted-foreground mt-2 text-[0.95rem] leading-relaxed">{p.text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
