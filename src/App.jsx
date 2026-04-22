import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThreeScene from "./components/ThreeScene";
import Cursor from "./components/Cursor";
import ScrollBar from "./components/ScrollBar";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scroll with Lenis
    let lenis;
    import("@studio-freight/lenis").then(({ default: Lenis }) => {
      lenis = new Lenis();
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }).catch(() => {
      // Lenis not available, skip smooth scroll
    });

    return () => {
      if (lenis) lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#fafafa] text-zinc-900 relative overflow-hidden min-h-screen font-sans selection:bg-zinc-200 selection:text-zinc-900">
      {/* Subtle minimalist background blur */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-zinc-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-zinc-100/60 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] pointer-events-none mix-blend-overlay" />

      <Cursor />
      <ThreeScene />
      <ScrollBar />
      <Navbar />

      <main className="relative z-10 space-y-24">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-12 mt-24 border-t border-black/5 bg-white/30 backdrop-blur-md">
        <div className="flex flex-col items-center justify-center gap-2">
          <h2 className="text-xl font-bold tracking-tight text-zinc-800">Karan Surve</h2>
          <p className="text-zinc-500 text-sm">© {new Date().getFullYear()} Karan Surve </p>
        </div>
      </footer>
    </div>
  );
}
