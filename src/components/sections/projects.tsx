"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { projectsData } from "@/utils/projects";
import Project from "@/components/project";
import { useSectionScroll } from "@/hooks/useSectionScroll";

export default function Projects() {
  const { ref } = useSectionScroll("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
