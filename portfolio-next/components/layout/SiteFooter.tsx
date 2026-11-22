import { contact } from "@/data/profile";

export default function SiteFooter() {
  return (
    <footer className="border-border border-t py-10">
      <div className="wrap text-muted-foreground flex flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {contact.fullName} · {contact.location}
        </p>
        <p>
          Fundador de{" "}
          <a
            href="https://evonest.company/"
            target="_blank"
            rel="noreferrer"
            className="text-foreground decoration-brand font-medium underline underline-offset-4"
          >
            EvoNest
            <span className="sr-only"> (se abre en otra pestaña)</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
