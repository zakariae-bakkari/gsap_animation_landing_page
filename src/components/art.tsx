"use client";
import { useGSAP } from "@gsap/react";
import { featureLists, goodLists } from "@src/constants";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";

export const Art = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const start = isMobile ? "top 20%" : "top top";

    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start,
        end: "bottom center",
        scrub: 1.5,
        pin: true,
      },
    });

    maskTimeline
      .to(".will-fade", { opacity: 0, stagger: 0.2, ease: "power1.inOut" })
      .to(".masked-img", {
        scale: 1.3,
        maskPosition: "center",
        maskSize: "400%",
        duration: 1,
        ease: "power1.inOut ",
      })
      .to(".fade-on", {
        opacity: 1,
        stagger: 0.3,
        y: 40,
        ease: "power1.inOut",
      })
      .to("#masked-content", { opacity: 1, duration: 1, ease: "power1.inOut" });
  }, []);
  return (
    <section id="art">
      <div className="container mx-auto h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade">
            {goodLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src={"/images/check.png"}
                  alt={"check"}
                  width={17}
                  height={17}
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <Image
            src={"/images/cup-2.png"}
            alt="cup"
            width={200}
            height={100}
            className="fade-on absolute opacity-0  top-96 right-2 -rotate-[7deg]"
          />
          <div className="cocktail-img">
            <Image
              src="/images/under-img.jpg"
              alt="cocktail"
              className="abs-center masked-img size-full object-contain"
              width={500}
              height={500}
            />
          </div>

          <ul className="space-y-4 will-fade">
            {featureLists.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Image
                  src={"/images/check.png"}
                  alt={"check"}
                  width={17}
                  height={17}
                />
                <p>{feature}</p>
              </li>
            ))}
          </ul>
          <Image
            src={"/images/drink4.png"}
            alt="cup"
            width={200}
            height={100}
            className="fade-on absolute opacity-0 top-44 left-2"
          />
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Sip-Worthy Perfection</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>
              This isn’t just a drink. It’s a carefully crafted moment made just
              for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
