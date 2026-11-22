import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import StackMarquee from "@/components/sections/StackMarquee";
import About from "@/components/sections/About";
import Cases from "@/components/sections/Cases";
import Certifications from "@/components/sections/Certifications";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <StackMarquee />
        <About />
        <Cases />
        <Certifications />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
