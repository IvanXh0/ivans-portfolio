"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/inView";
import SectionHeading from "./section-heading";
import { experiences } from "@/lib/data";
import TimelineItem from "./timeline-item";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.5);
  return (
    <motion.section
      ref={ref}
      id="experience"
      className="mt-20 mb-28 scroll-mt-28"
    >
      <SectionHeading>Experience</SectionHeading>
      {experiences.map((experience, idx) => (
        <TimelineItem key={idx} {...experience} />
      ))}
    </motion.section>
  );
}
