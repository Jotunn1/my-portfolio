// import Image from "next/image";
// import styles from "./page.module.css";

import About from "@/components/sections/about";
import Hero from "@/components/sections/hero";
import Skills from "@/components/sections/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}
