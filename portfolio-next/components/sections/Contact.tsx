"use client";
import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, Link } from "lucide-react";
import { contact } from "@/data/profile";
export default function Contact() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle"),
    [message, setMessage] = useState("");
  const loadedAt = useRef<number | null>(null);
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setState("sending");
    setMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formLoadedAt: loadedAt.current }),
      });
      const result = await response.json();
      if (!response.ok || !result.ok)
        throw Error(result.message || "No se pudo enviar el mensaje.");
      setState("success");
      setMessage("Mensaje enviado. Gracias por escribir.");
      form.reset();
    } catch (error) {
      setState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No se pudo conectar. Puedes escribir por WhatsApp.",
      );
    }
  }
  return (
    <section id="contacto" className="section wrap">
      <p className="eyebrow">05 / SIGUIENTE CONVERSACIÓN</p>
      <div className="contact-grid">
        <div>
          <h2>
            Tu próximo paso
            <br />
            empieza con una
            <br />
            <span className="gold-text">conversación.</span>
          </h2>
          <p className="body-copy contact-intro">
            ¿Una oportunidad profesional, un reto operativo o un proyecto digital? Hablemos de cómo
            avanzar.
          </p>
          <a
            className="contact-whatsapp depth-card"
            href={`https://wa.me/${contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={28} />
            <span>
              <small>CONTACTO DIRECTO</small>
              <strong>Hablemos por WhatsApp</strong>
              <span>{contact.phone}</span>
            </span>
            <ArrowUpRight size={22} />
          </a>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}>
              <Mail size={16} />
              Correo
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer">
              <Link size={16} />
              LinkedIn <ArrowUpRight size={13} />
            </a>
          </div>
          <p className="location">Ciudad de Guatemala · Abierto a nuevas conexiones</p>
        </div>
        <form
          className="contact-form depth-card"
          onSubmit={submit}
          onFocusCapture={() => {
            if (loadedAt.current === null) loadedAt.current = Date.now();
          }}
        >
          <span className="eyebrow">CUÉNTAME TU IDEA</span>
          <label htmlFor="name">
            Nombre
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              maxLength={120}
              placeholder="Tu nombre"
            />
          </label>
          <label htmlFor="email">
            Correo electrónico
            <input
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              required
              maxLength={200}
              placeholder="nombre@empresa.com"
            />
          </label>
          <label htmlFor="company">
            Empresa <span className="muted">(opcional)</span>
            <input
              id="company"
              name="company"
              autoComplete="organization"
              maxLength={200}
              placeholder="Nombre de tu empresa"
            />
          </label>
          <label htmlFor="message">
            ¿Cómo podemos trabajar juntos?
            <textarea
              id="message"
              name="message"
              required
              maxLength={5000}
              rows={4}
              placeholder="Cuéntame un poco del proyecto o la oportunidad…"
            />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">
              Sitio web
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <p className="form-privacy">Usaré tus datos únicamente para responder a esta consulta.</p>
          <button className="button primary" disabled={state === "sending"} type="submit">
            {state === "sending" ? "Enviando…" : "Enviar mensaje"}
            <ArrowUpRight size={17} />
          </button>
          <p className={`form-status ${state}`} role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </div>
    </section>
  );
}
