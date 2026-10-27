import { ArrowUpRight } from "lucide-react";
export default function Footer() {
  return (
    <footer className="footer wrap">
      <div>
        <a className="wordmark" href="#inicio">
          DM<span>®</span>
        </a>
        <p>
          Daniel Monterroso
          <br />
          <span>Estrategia. Operaciones. Tecnología.</span>
        </p>
      </div>
      <a href="https://evonest.company/" target="_blank" rel="noreferrer">
        Creando con EvoNest <ArrowUpRight size={15} />
      </a>
      <span className="footer-year">© {new Date().getFullYear()} · Guatemala</span>
    </footer>
  );
}
