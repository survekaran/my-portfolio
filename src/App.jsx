import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene";
import Cursor from "./components/Cursor";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import ScrollBar from "./components/ScrollBar";


export default function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="bg-black text-white relative overflow-hidden">

      <div className="absolute inset-0 
        bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08)_0,transparent_70%)] 
        pointer-events-none"
      />
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('/noise.png')]" />

      <Cursor />
      <ThreeScene />
      <ScrollBar />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />

    </div>
  );
}