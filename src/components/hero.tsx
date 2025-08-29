"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(SplitText,ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words, lines" });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "chars, words, lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.05,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      delay: 1,
    });

    gsap.timeline({
      scrollTrigger:{
         trigger:"#hero",
         start:"top top",
         end:"bottom top",
         scrub:1,
      }
    }).to('.right-leaf',{y:200},0).to('.left-leaf',{y:-200},0);
  });
  return (
    <section id="hero" className="noisy">
      <h1 className="title">MOJITO</h1>

      <Image
        src={"/images/hero-left-leaf.png"}
        alt="leaf"
        width={200}
        height={200}
        className="left-leaf"
      />
      <Image
        src={"/images/hero-right-leaf.png"}
        alt="leaf"
        width={200}
        height={200}
        className="right-leaf"
      />

      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle">
              Sip the Spirit <br /> of Summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes — designed to delight your
              senses.
            </p>
            <Link href={"#cocktails"}>View Cocktails</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
