const rows = [
  {
    area: "Dirección & operaciones",
    domain: "Gestión ejecutiva",
    practice: "Coordinación de equipos, recursos, logística y calidad.",
    tools: "Procesos / KPIs / Gestión de proyectos",
  },
  {
    area: "Desarrollo comercial",
    domain: "Ejecución comercial",
    practice: "Venta consultiva B2B, negociación y seguimiento de oportunidades.",
    tools: "HubSpot / CRM / Pipeline",
  },
  {
    area: "Tecnología & IA",
    domain: "Aplicación al negocio",
    practice: "Desarrollo web y automatización de tareas operativas y comerciales.",
    tools: "Next.js / Vercel / Supabase / n8n",
  },
  {
    area: "Compras públicas",
    domain: "Gestión de procesos",
    practice: "Preparación de ofertas y seguimiento de concursos y licitaciones.",
    tools: "Guatecompras / B2G",
  },
  {
    area: "Administración",
    domain: "Formación en curso",
    practice: "Lic. Administración de Empresas · Universidad del Valle de Guatemala.",
    tools: "UVG / Programa AVE",
  },
];
export default function Skills() {
  return (
    <section id="habilidades" className="section skills-section">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">04 / MATRIZ DE DOMINIO EJECUTIVO</p>
            <h2>
              Lo que sé.
              <br />
              <span className="muted">Cómo lo aplico.</span>
            </h2>
          </div>
          <p>
            Capacidades expresadas en acciones,
            <br />
            herramientas y contexto de trabajo.
          </p>
        </div>
        <div
          className="matrix-scroll"
          tabIndex={0}
          role="region"
          aria-label="Matriz de competencias, desplaza horizontalmente en móvil"
        >
          <table className="skills-matrix">
            <caption className="sr-only">Áreas de dominio ejecutivo y aplicación práctica</caption>
            <thead>
              <tr>
                <th>ÁREA</th>
                <th>ENFOQUE</th>
                <th>APLICACIÓN PRÁCTICA</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.area}>
                  <th scope="row">
                    <span className="matrix-index">0{i + 1}</span>
                    {r.area}
                  </th>
                  <td>
                    <span className="domain-label">{r.domain}</span>
                  </td>
                  <td>
                    {r.practice}
                    <span className="matrix-tools">{r.tools}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
