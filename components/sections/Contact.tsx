"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GitFork,
  MessageSquare,
  Loader2,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { contact } from "@/data/profile";

type Status = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  // Date.now() es una función impura: no se puede llamar durante el render
  // (dispara react-hooks/purity). Se inicializa en 0 y se fija el valor
  // real en un efecto, que es donde este tipo de llamadas sí es correcto.
  const formLoadedAt = useRef(0);
  useEffect(() => {
    formLoadedAt.current = Date.now();
  }, []);
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const honeypot =
      (e.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website: honeypot, formLoadedAt: formLoadedAt.current }),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setStatus("error");
        setErrorMessage(data.message ?? "No se pudo enviar el mensaje. Intenta de nuevo.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", company: "", phone: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMessage(
        "No se pudo conectar con el servidor. Intenta por WhatsApp o correo directo.",
      );
    }
  };

  return (
    <section
      id="contacto"
      className="bg-[#F5F5F0] py-24 transition-colors duration-300 sm:py-32 dark:bg-[#161614]"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] text-[#5A5A40] uppercase dark:text-[#C68A3E]">
            Contacto
          </span>
          <h2 className="font-display mt-3 text-3xl text-[#1C1C1C] sm:text-4xl dark:text-[#ECECE3]">
            Hablemos de tu próximo proyecto
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="space-y-6 lg:col-span-2">
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-sm text-[#3A3A32] transition-colors hover:text-[#5A5A40] dark:text-[#D5D5C8] dark:hover:text-[#C68A3E]"
              >
                <Mail size={16} className="text-[#5A5A40] dark:text-[#C68A3E]" aria-hidden="true" />{" "}
                {contact.email}
              </a>
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 text-sm text-[#3A3A32] transition-colors hover:text-[#5A5A40] dark:text-[#D5D5C8] dark:hover:text-[#C68A3E]"
              >
                <Phone
                  size={16}
                  className="text-[#5A5A40] dark:text-[#C68A3E]"
                  aria-hidden="true"
                />{" "}
                {contact.phone}
              </a>
              <div className="flex items-center gap-3 text-sm text-[#3A3A32] dark:text-[#D5D5C8]">
                <MapPin
                  size={16}
                  className="text-[#5A5A40] dark:text-[#C68A3E]"
                  aria-hidden="true"
                />{" "}
                {contact.location}
              </div>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#3A3A32] transition-colors hover:text-[#5A5A40] dark:text-[#D5D5C8] dark:hover:text-[#C68A3E]"
              >
                <MessageSquare
                  size={16}
                  className="text-[#5A5A40] dark:text-[#C68A3E]"
                  aria-hidden="true"
                />{" "}
                WhatsApp directo
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#3A3A32] transition-colors hover:text-[#5A5A40] dark:text-[#D5D5C8] dark:hover:text-[#C68A3E]"
              >
                <Briefcase
                  size={16}
                  className="text-[#5A5A40] dark:text-[#C68A3E]"
                  aria-hidden="true"
                />{" "}
                LinkedIn
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-[#3A3A32] transition-colors hover:text-[#5A5A40] dark:text-[#D5D5C8] dark:hover:text-[#C68A3E]"
              >
                <GitFork
                  size={16}
                  className="text-[#5A5A40] dark:text-[#C68A3E]"
                  aria-hidden="true"
                />{" "}
                GitHub
              </a>
            </div>

            <div className="h-48 overflow-hidden rounded border border-[#1C1C1C]/10 dark:border-[#ECECE3]/10">
              <iframe
                title="Ubicación aproximada: Ciudad de Guatemala"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-90.62%2C14.55%2C-90.45%2C14.68&layer=mapnik&marker=14.6349%2C-90.5069"
                className="h-full w-full contrast-125 grayscale dark:hue-rotate-180 dark:invert"
                loading="lazy"
              />
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-4 lg:col-span-3"
            noValidate
          >
            {/* Honeypot anti-spam: oculto visualmente, un bot lo llenará y un humano no lo verá nunca. */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label htmlFor="website">No llenar este campo</label>
              <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-xs font-medium text-[#6A6A5E] dark:text-[#A2A292]"
                >
                  Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange("name")}
                  className="w-full rounded border border-[#1C1C1C]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#1C1C1C] transition-colors outline-none focus:border-[#5A5A40] dark:border-[#ECECE3]/15 dark:bg-white/[0.03] dark:text-[#ECECE3] dark:focus:border-[#C68A3E]"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-xs font-medium text-[#6A6A5E] dark:text-[#A2A292]"
                >
                  Correo *
                </label>
                {/* type="text" a propósito: no queremos que la validación nativa del
                    navegador bloquee un correo mal escrito y se pierda el lead. */}
                <input
                  id="email"
                  name="email"
                  type="text"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full rounded border border-[#1C1C1C]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#1C1C1C] transition-colors outline-none focus:border-[#5A5A40] dark:border-[#ECECE3]/15 dark:bg-white/[0.03] dark:text-[#ECECE3] dark:focus:border-[#C68A3E]"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-xs font-medium text-[#6A6A5E] dark:text-[#A2A292]"
                >
                  Empresa (opcional)
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange("company")}
                  className="w-full rounded border border-[#1C1C1C]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#1C1C1C] transition-colors outline-none focus:border-[#5A5A40] dark:border-[#ECECE3]/15 dark:bg-white/[0.03] dark:text-[#ECECE3] dark:focus:border-[#C68A3E]"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-xs font-medium text-[#6A6A5E] dark:text-[#A2A292]"
                >
                  Teléfono (opcional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="text"
                  value={form.phone}
                  onChange={handleChange("phone")}
                  className="w-full rounded border border-[#1C1C1C]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#1C1C1C] transition-colors outline-none focus:border-[#5A5A40] dark:border-[#ECECE3]/15 dark:bg-white/[0.03] dark:text-[#ECECE3] dark:focus:border-[#C68A3E]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-xs font-medium text-[#6A6A5E] dark:text-[#A2A292]"
              >
                Mensaje *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                className="w-full resize-none rounded border border-[#1C1C1C]/15 bg-white/60 px-3.5 py-2.5 text-sm text-[#1C1C1C] transition-colors outline-none focus:border-[#5A5A40] dark:border-[#ECECE3]/15 dark:bg-white/[0.03] dark:text-[#ECECE3] dark:focus:border-[#C68A3E]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-[#1C1C1C] px-6 py-3 text-xs font-semibold tracking-wider text-[#F5F5F0] uppercase transition-all hover:bg-[#5A5A40] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto dark:bg-[#ECECE3] dark:text-[#161614] dark:hover:bg-[#C68A3E]"
            >
              {status === "submitting" && (
                <Loader2 size={14} className="animate-spin" aria-hidden="true" />
              )}
              {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
            </button>

            <div role="status" aria-live="polite">
              {status === "success" && (
                <p className="flex items-center gap-2 text-sm text-[#5A5A40] dark:text-[#C68A3E]">
                  <CheckCircle2 size={16} aria-hidden="true" /> Mensaje enviado. Te responderé lo
                  antes posible.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                  <XCircle size={16} aria-hidden="true" /> {errorMessage}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
