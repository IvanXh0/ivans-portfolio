"use client";
import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/inView";
import SectionHeading from "./section-heading";
import { skills } from "@/lib/data";

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  return (
    <motion.section
      ref={ref}
      id="skills"
      className="mt-20 mb-28 max-w-[53rem] text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-row gap-2 flex-wrap font-medium text-zinc-800">
        {skills.map((skill) => (
          <motion.li
            key={skill}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-black/5 px-5 py-3 rounded-xl font-medium"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
