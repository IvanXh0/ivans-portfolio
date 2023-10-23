"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/inView";
import SectionHeading from "./section-heading";
import { projectData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);
  return (
    <motion.section
      id="projects"
      ref={ref}
      className="mt-20 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectData.map((project) => (
          <React.Fragment key={project.name}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
}
