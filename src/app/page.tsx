import CanvasBackground from "@/components/portfolio/CanvasBackground";
import Atmosphere from "@/components/portfolio/Atmosphere";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Process from "@/components/portfolio/Process";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <CanvasBackground />
      <Atmosphere />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <About />
        <Experience />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}