"use client";

import { useRef, useState, type FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const field =
  "mt-2 block w-full rounded-lg border border-input bg-background px-3.5 py-3 text-base text-foreground placeholder:text-muted-foreground/80 transition-colors focus-visible:border-ring focus-visible:outline-2 focus-visible:outline-ring/60";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
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
      setMessage("Mensaje enviado. Gracias por escribir, te respondo pronto.");
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
    <form
      onSubmit={submit}
      onFocusCapture={() => {
        if (loadedAt.current === null) loadedAt.current = Date.now();
      }}
      className="border-border bg-card grid gap-5 rounded-3xl border p-6 sm:p-8"
      aria-labelledby="form-title"
    >
      <h3 id="form-title" className="text-xl font-semibold tracking-tight">
        Escríbeme aquí
      </h3>
      <div className="grid gap-5 sm:grid-cols-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Tu nombre"
            className={field}
          />
        </label>
        <label htmlFor="email" className="text-sm font-medium">
          Correo electrónico
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={200}
            placeholder="nombre@empresa.com"
            className={field}
          />
        </label>
      </div>
      <label htmlFor="company" className="text-sm font-medium">
        Empresa <span className="text-muted-foreground font-normal">(opcional)</span>
        <input
          id="company"
          name="company"
          autoComplete="organization"
          maxLength={200}
          placeholder="Nombre de tu empresa"
          className={field}
        />
      </label>
      <label htmlFor="message" className="text-sm font-medium">
        ¿En qué te puedo ayudar?
        <textarea
          id="message"
          name="message"
          required
          maxLength={5000}
          rows={5}
          placeholder="Cuéntame del rol, del proyecto o del reto operativo…"
          className={cn(field, "resize-y")}
        />
      </label>
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">
          Sitio web
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <p className="text-muted-foreground text-sm">
        Uso tus datos solo para responder a este mensaje.
      </p>
      <Button
        type="submit"
        disabled={state === "sending"}
        className="h-12 gap-2 text-base sm:w-fit sm:px-6"
      >
        {state === "sending" ? "Enviando…" : "Enviar mensaje"}
        <ArrowUpRight aria-hidden />
      </Button>
      <p
        role="status"
        aria-live="polite"
        className={cn(
          "min-h-6 text-sm",
          state === "success" && "text-signal",
          state === "error" && "text-destructive",
        )}
      >
        {message}
      </p>
    </form>
  );
}
