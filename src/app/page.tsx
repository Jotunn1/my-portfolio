// import Image from "next/image";
// import styles from "./page.module.css";

import SectionDivider from "@/components/section-divider";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
