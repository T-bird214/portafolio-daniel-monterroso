import type { Metadata } from "next";
import { cvEn } from "@/data/cv-en";
// Inter solo en esta ruta (CV imprimible); el sitio usa la fuente del sistema.
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";

export const metadata: Metadata = {
  title: "CV (English)",
  description: cvEn.summary,
  robots: { index: false, follow: true },
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-2.5 border-b border-[#d9d4c7] pb-1 font-mono text-[9.5px] font-medium tracking-[0.18em] text-[#7a5310] uppercase">
      {children}
    </h2>
  );
}

export default function CvEnglish() {
  return (
    <div lang="en" style={{ fontFamily: "Inter, sans-serif" }} className="min-h-screen bg-[#ecebe6] text-[#16181d] print:bg-white">
      <article className="mx-auto w-full max-w-[210mm] bg-white px-[13mm] py-[12mm] text-[10.5px] leading-[1.45] shadow-sm print:max-w-none print:px-0 print:py-0 print:shadow-none">
        <header className="border-b-2 border-[#16181d] pb-4">
          <h1 className="text-[26px] leading-none font-semibold tracking-[-0.02em]">{cvEn.name}</h1>
          <p className="mt-1.5 font-mono text-[10px] font-medium tracking-[0.14em] text-[#7a5310] uppercase">
            {cvEn.tagline}
          </p>
          <p className="mt-1 text-[10px] text-[#4a4f5a]">{cvEn.degree}</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-0.5 text-[9.5px]">
            {cvEn.contact.map((c) => (
              <li key={c.label}>
                <span className="font-semibold">{c.label}:</span>{" "}
                {c.href ? (
                  <a href={c.href} className="text-[#16181d] underline decoration-[#c9a25a]">
                    {c.value}
                  </a>
                ) : (
                  c.value
                )}
              </li>
            ))}
          </ul>
        </header>

        <section className="mt-4">
          <SectionTitle>Professional Summary</SectionTitle>
          <p className="text-[11px]">{cvEn.summary}</p>
        </section>

        <section className="mt-4">
          <SectionTitle>Case Studies & Featured Projects</SectionTitle>
          <div className="grid grid-cols-3 gap-3">
            {cvEn.highlights.map((h) => (
              <div key={h.title} className="rounded-md border border-[#e2ddd0] p-2.5">
                <p className="font-mono text-[8px] tracking-[0.12em] text-[#7a5310] uppercase">
                  {h.kicker}
                </p>
                <p className="mt-0.5 text-[10.5px] font-semibold">{h.title}</p>
                <p className="mt-1 text-[9.5px] text-[#3e434d]">{h.text}</p>
                <p className="mt-1.5 text-[9.5px] font-semibold">✦ {h.metric}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-4">
          <SectionTitle>Professional Experience</SectionTitle>
          <div className="grid gap-3">
            {cvEn.experience.map((job) => (
              <div key={job.role} className="break-inside-avoid">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-[11px] font-semibold">
                    {job.role} — <span className="font-normal">{job.company}</span>
                  </h3>
                  <span className="shrink-0 font-mono text-[9px] text-[#4a4f5a]">{job.period}</span>
                </div>
                <ul className="mt-1 grid gap-0.5 pl-3.5 text-[10px] text-[#2c3038] [list-style:disc]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="break-inside-avoid rounded-md bg-[#f5f2ea] p-2.5">
              <h3 className="text-[10.5px] font-semibold">{cvEn.earlyCareer.title}</h3>
              <p className="mt-0.5 text-[10px] text-[#2c3038]">{cvEn.earlyCareer.text}</p>
            </div>
          </div>
        </section>

        <section className="mt-4 break-inside-avoid">
          <SectionTitle>Skills Matrix & Tech Stack</SectionTitle>
          <dl className="grid gap-1.5">
            {cvEn.skills.map((s) => (
              <div key={s.area} className="grid grid-cols-[150px_1fr] gap-3">
                <dt className="text-[10px] font-semibold">{s.area}</dt>
                <dd className="text-[10px] text-[#2c3038]">{s.items.join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-4 break-inside-avoid">
          <SectionTitle>Education, Certifications & Languages</SectionTitle>
          <dl className="grid gap-2">
            {[
              ["Education", cvEn.education],
              ["Certifications", cvEn.certifications],
              ["Languages", cvEn.languages],
            ].map(([label, items]) => (
              <div key={label as string} className="grid grid-cols-[150px_1fr] gap-3">
                <dt className="text-[10px] font-semibold">{label as string}</dt>
                <dd>
                  <ul className="grid gap-0.5 text-[10px] text-[#2c3038]">
                    {(items as string[]).map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </div>
  );
}
