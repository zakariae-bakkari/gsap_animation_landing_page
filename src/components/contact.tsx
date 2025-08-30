"use client"
import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "@src/constants"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { SplitText } from "gsap/dist/SplitText"

gsap.registerPlugin(ScrollTrigger, SplitText);

export const Contact = () => {
   
   useGSAP(()=> {
      const h2split = new SplitText("#contact h2", {
         type: "words,chars",
      });
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: "#contact",
            start: "top center"
         },
         ease: "power1.inOut"
      });

      tl.from(h2split.words,{
         yPercent: 100,
         opacity: 0,
         stagger: 0.05,
      } ).from("#contact h3, #contact p, .icons",{
         yPercent: 100,
         opacity: 0,
         stagger: 0.1,
      }).from("#f-right-leaf, #f-left-leaf",{
         yPercent: 100,
         opacity: 0,
         stagger: 0.1,
      });
   }, [])
   return (
      <footer id="contact">
      <Image width={100} height={100} src="/images/footer-right-leaf.png" alt="leaf-right" id="f-right-leaf" />
      <Image width={100} height={100} src="/images/footer-left-leaf.png" alt="leaf-left" id="f-left-leaf" />
      
      <div className="content">
        <h2>Where to Find Us</h2>
        
        <div>
         <h3>Visit Our Bar</h3>
         <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
        </div>
        
        <div>
         <h3>Contact Us</h3>
         <p>(555) 987-6543</p>
         <p>hello@jsmcocktail.com</p>
        </div>
        
        <div>
         <h3>Open Every Day</h3>
         {openingHours.map((time) => (
           <p key={time.day}>
            {time.day} : {time.time}
           </p>
         ))}
        </div>
        
        <div>
         <h3>Socials</h3>
         
         <div className="flex-center gap-5">
           {socials.map((social) => (
            <a
               key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Image width={20} height={20} src={social.icon} alt={social.icon} className="icons" />
            </a>
           ))}
         </div>
        </div>
      </div>
     </footer>
   )
}