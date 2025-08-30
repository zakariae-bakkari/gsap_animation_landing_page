"use client";
import { cocktailLists } from "@src/constants";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Cocktails() {
  useGSAP(() => {
    const parallaxTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 30%",
        end: "bottom 80%",
        scrub: true,
      },
    });

    parallaxTimeline
      .from("#c-left-leaf", {
        x: -100,
        y: 100,
      })
      .from("#c-right-leaf", {
        x: 100,
        y: 100,
      });
  }, []);
  return (
    <section id="cocktails" className="noisy">
      <Image
        src={"/images/cocktail-left-leaf.png"}
        alt="leaf"
        width={200}
        height={200}
        id="c-left-leaf"
      />
      <Image
        src={"/images/cocktail-right-leaf.png"}
        alt="leaf"
        width={200}
        height={200}
        id="c-right-leaf"
      />
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails</h2>
          <ul>
            {cocktailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="md:me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}{" "}
                  </p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="loved">
          <h2>Most popular cocktails</h2>
          <ul>
            {cocktailLists.map((cocktail) => (
              <li key={cocktail.name}>
                <div className="me-28">
                  <h3>{cocktail.name}</h3>
                  <p>
                    {cocktail.country} | {cocktail.detail}{" "}
                  </p>
                </div>
                <span>{cocktail.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
