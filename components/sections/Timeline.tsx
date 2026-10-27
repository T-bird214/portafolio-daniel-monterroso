import { experience, crossCuttingNote } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";
export default function Timeline() {
  return (
    <section id="experiencia" className="section wrap">
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / TRAYECTORIA</p>
          <h2>
            Experiencia que
            <br />
            <span className="muted">construye criterio.</span>
          </h2>
        </div>
        <p>
          Operaciones, ventas y servicio.
          <br />
          Una trayectoria con perspectiva integral.
        </p>
      </div>
      <div className="timeline-list">
        <article className="founder-row">
          <span className="timeline-period">PROYECTO PROPIO</span>
          <div>
            <h3>Fundador · EvoNest</h3>
            <p>Consultoría y soluciones digitales para empresas.</p>
          </div>
          <a
            className="icon-button"
            href="https://evonest.company/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visitar EvoNest"
          >
            <ArrowUpRight size={21} />
          </a>
        </article>
        {experience.map((e, i) => (
          <details key={e.company} className="timeline-row" open={i === 0}>
            <summary>
              <span className="timeline-period">{e.period}</span>
              <span>
                <strong>{e.role}</strong>
                <span className="timeline-company">{e.company}</span>
              </span>
              <span className="details-plus" aria-hidden="true">
                +
              </span>
            </summary>
            <ul>
              {e.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </details>
        ))}
      </div>
      <aside className="b2g-note">
        <span className="eyebrow">EXPERIENCIA TRANSVERSAL / B2G</span>
        <h3>{crossCuttingNote.title}</h3>
        <p>{crossCuttingNote.description}</p>
      </aside>
    </section>
  );
}
