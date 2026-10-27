import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import ValueProps from "@/components/sections/ValueProps";
import Timeline from "@/components/sections/Timeline";
import Skills from "@/components/sections/Skills";
import Sectors from "@/components/sections/Sectors";
import Tools from "@/components/sections/Tools";
import Achievements from "@/components/sections/Achievements";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <ValueProps />
        <Timeline />
        <Skills />
        <Sectors />
        <Tools />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
