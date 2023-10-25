"use client";

import { useState } from "react";
import { motion, Reorder } from "framer-motion";
import { useSectionInView } from "@/lib/inView";
import SectionHeading from "./section-heading";
import { skills as dataSkills } from "@/lib/data";

type SkillsProps = (typeof dataSkills)[number];

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.4);
  const [skills, setSkills] = useState<SkillsProps[]>(dataSkills);

  return (
    <motion.section
      ref={ref}
      id="skills"
      className="mt-20 mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <SectionHeading>My Skills</SectionHeading>
      <Reorder.Group
        values={skills}
        onReorder={setSkills}
        className="flex flex-row gap-2 flex-wrap font-medium text-zinc-800"
      >
        {skills.map((skill) => (
          <Reorder.Item
            key={skill}
            value={skill}
            drag
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.06, damping: 8 }}
            whileHover={{ scale: 1.1 }}
            className="border border-black/5 px-5 py-3 rounded-xl font-medium cursor-pointer"
          >
            {skill}
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </motion.section>
  );
}
