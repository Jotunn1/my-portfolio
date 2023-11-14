"use client";

import React from "react";
import SectionHeading from "@/components/sectionHeading";
import { motion } from "framer-motion";
import { useSectionScroll } from "@/hooks/useSectionScroll";

export default function About() {
  const { ref } = useSectionScroll("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a passionate React developer with two years of hands-on experience
        in web development. My journey has been fueled by a relentless pursuit
        of creating exceptional web applications. I thrive on exploring and
        implementing new features, embracing modern syntax to elevate the user
        experience. With an in-depth understanding of React, I am committed to
        crafting clean and efficient code that brings ideas to life. What sets
        me apart is my love for creating stunning UIs adorned with captivating
        animations. I believe in pushing the boundaries of design to deliver not
        just functionality but an immersive and visually striking user journey.
        Let's collaborate and turn ideas into extraordinary digital experiences!
      </p>
    </motion.section>
  );
}
