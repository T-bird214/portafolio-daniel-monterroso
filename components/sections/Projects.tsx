"use client";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  Globe2,
  Bot,
  ChartNoAxesCombined,
  MessageCircle,
  Play,
  RotateCcw,
} from "lucide-react";
const steps = [
  {
    name: "Web Pro",
    tool: "Next.js / Vercel",
    icon: Globe2,
    log: "Solicitud recibida desde la web.",
  },
  {
    name: "Agente IA",
    tool: "Supabase PostgreSQL",
    icon: Bot,
    log: "Prospecto clasificado y guardado.",
  },
  {
    name: "CRM Pipeline",
    tool: "HubSpot",
    icon: ChartNoAxesCombined,
    log: "Oportunidad asignada al pipeline.",
  },
  {
    name: "Alerta instantánea",
    tool: "WhatsApp API",
    icon: MessageCircle,
    log: "Notificación preparada para el equipo.",
  },
];
export default function Projects() {
  const [step, setStep] = useState(-1),
    [running, setRunning] = useState(false);
  useEffect(() => {
    if (!running) return;
    const timer = setTimeout(() => {
      if (step < 3) setStep((s) => s + 1);
      else setRunning(false);
    }, 1400);
    return () => clearTimeout(timer);
  }, [running, step]);
  function start() {
    setStep(0);
    setRunning(true);
  }
  return (
    <section id="proyectos" className="section projects-section">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / DE LA ESTRATEGIA AL SISTEMA</p>
            <h2>
              Así se conecta
              <br />
              <span className="muted">una oportunidad.</span>
            </h2>
          </div>
          <a className="text-link" href="https://evonest.company/" target="_blank" rel="noreferrer">
            Conocer EvoNest <ArrowUpRight size={18} />
          </a>
        </div>
        <div className="pipeline-panel depth-card">
          <div className="pipeline-title">
            <div>
              <span className="eyebrow">EVONEST / PIPELINE B2B</span>
              <h3>Menos fricción. Más seguimiento.</h3>
            </div>
            <span className="demo-badge">DEMO INTERACTIVA</span>
          </div>
          <ol className="pipeline-steps">
            {steps.map(({ icon: Icon, ...s }, i) => (
              <li
                key={s.name}
                className={step >= i ? "reached" : ""}
                aria-current={step === i ? "step" : undefined}
              >
                <span className="step-number">
                  PASO 0{i + 1}
                  {step > i ? <Check size={13} /> : null}
                </span>
                <div className="step-icon">
                  <Icon size={25} />
                </div>
                <h4>{s.name}</h4>
                <p>{s.tool}</p>
                <div className="step-connector" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <div className="pipeline-console">
            <div role="status" aria-live="polite">
              <span className={running ? "status-dot" : "console-dot"} />
              <span>
                {step === -1
                  ? "Sistema listo. Simula el recorrido de un lead."
                  : running
                    ? steps[step].log
                    : "Recorrido completado. El equipo puede dar seguimiento."}
              </span>
            </div>
            <button className="button primary" disabled={running} onClick={start}>
              {step === -1 ? <Play size={15} /> : <RotateCcw size={15} />}{" "}
              {running ? "Procesando…" : step === -1 ? "Simular lead" : "Repetir demo"}
            </button>
          </div>
        </div>
        <p className="simulation-note">
          Simulación local ilustrativa. No crea contactos ni envía mensajes reales.
        </p>
        <div className="project-notes">
          <div>
            <span>EL ENFOQUE</span>
            <p>
              Una web que inicia conversaciones.
              <br />
              Un sistema que mantiene el contexto.
            </p>
          </div>
          <div>
            <span>LA CONEXIÓN</span>
            <p>
              Captación → clasificación → seguimiento → acción.
              <br />
              Tecnología al servicio de la operación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
