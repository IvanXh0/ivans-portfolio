"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/inView";
import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      id="about"
      ref={ref}
      className="mt-20 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After working as a{" "}
        <span className="font-medium">Team Lead and an IT Specialist</span> for
        more than 6 years, I decided to pursue my passion for software
        development. I enrolled in a bootcamp and studied{" "}
        <span className="font-medium">full-stack web development.</span>{" "}
        I&apos;ve always been a creative person, and web development enabled me
        to express myself the way I wanted to. My favorite part of programming
        is the{" "}
        <span className="font-medium">ability to solve complex problems.</span>{" "}
        My current working stack and skillset is:{" "}
        <span className="font-medium">
          JavaScript, TypeScript, React, Next.js, Angular, Node.js, NestJS,
          Express.js, MongoDB and PostgreSQL.
        </span>{" "}
        I&apos;m also a full time <span className="font-medium">NeoVim </span>
        enthusiast. In my free time, I&apos;m either playing sports or coding
        fun things such as this.
      </p>
    </motion.section>
  );
}
