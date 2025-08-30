"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoTimeLineRef = useRef<gsap.core.Timeline>(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words, lines" });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "chars, words, lines",
    });

	// Apply text-gradient class once before animating
    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.05,
    });
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      stagger: 0.06,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const videotl = gsap.timeline({
      scrollTrigger: {
         trigger: "video",
         start: startValue,
         end: endValue,
         scrub: true,
         pin: true,
      },
    });

    if (videoRef.current) {
      // Ensure video is loaded
      videoRef.current.load();

      videoRef.current.onloadedmetadata = () => {
        if ( videoRef.current) {
         videotl.to(videoRef.current, {
            currentTime: videoRef.current.duration || 0,
          });
        }
      };
    }
    gsap.to("#hero .arrow-down", {
      y: 20,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      duration: 1,
    });
  }, [isMobile]);
  return (
    <div>
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
        <Image
          src={"/images/arrow.png"}
          alt="glass"
          width={20}
          height={20}
          className="absolute right-24 top-52 arrow-down -z-10"
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
      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </div>
  );
}
