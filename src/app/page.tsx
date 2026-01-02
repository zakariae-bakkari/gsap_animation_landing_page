"use client";
import About from "@src/components/about";
import { Art } from "@src/components/art";
import Cocktails from "@src/components/cocktails";
import { Contact } from "@src/components/contact";
import Hero from "@src/components/hero";
import { Menu } from "@src/components/menu";
import { Navbar } from "@src/components/navbar";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Home() {
  useEffect(() => {
    // create lenis instance
    const lenis = new Lenis({
      duration: 2, // smooth scroll duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // on scroll event
    lenis.on("scroll", () => {
      // connect lenis with scrolltrigger
      ScrollTrigger.update();
    });

    // raf loop that drives lenis (request animation frame)
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // cleanup function
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  );
}
