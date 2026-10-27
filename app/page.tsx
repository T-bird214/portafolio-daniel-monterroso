import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import LightBeamCarousel from "@/components/ui/LightBeamCarousel";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <LightBeamCarousel />
        <Projects />
        <Timeline />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
