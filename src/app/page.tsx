import About from '@src/components/about';
import { Art } from '@src/components/art';
import Cocktails from '@src/components/cocktails';
import { Contact } from '@src/components/contact';
import Hero from '@src/components/hero';
import { Menu } from '@src/components/menu';
import { Navbar } from '@src/components/navbar';
import gsap from 'gsap';
import { ScrollTrigger,SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger,SplitText);

export default function Home() {
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
