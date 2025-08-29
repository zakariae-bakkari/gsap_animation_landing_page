import Hero from '@src/components/hero';
import { Navbar } from '@src/components/navbar';
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh"></div>
    </main>
  );
}
