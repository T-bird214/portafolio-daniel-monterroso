import { Suspense } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import StackMarquee from "@/components/sections/StackMarquee";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

// Cada <Suspense> crea un límite de hidratación: React hidrata las secciones en
// tareas separadas y cede el hilo principal entre ellas (menos bloqueo en móvil).
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Suspense>
          <Hero />
        </Suspense>
        <StackMarquee />
        <Suspense>
          <About />
        </Suspense>
        <Suspense>
          <Cases />
        </Suspense>
        <Suspense>
          <Certifications />
        </Suspense>
        <Suspense>
          <Experience />
        </Suspense>
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  );
}
