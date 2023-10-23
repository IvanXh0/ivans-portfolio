"use client";

import React from "react";
import { experiences } from "@/lib/data";
import { motion } from "framer-motion";

type TimelineProps = (typeof experiences)[number];

function TimelineItem({ role, company, date, years }: TimelineProps) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 ">
      <motion.li
        className="mb-10 ml-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white " />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-black">
            {date}
          </span>
          <h3 className="text-lg font-semibold text-stone-900 ">{role}</h3>
          <div className="my-1 text-sm font-normal leading-none text-stone-400 ">
            {years}
          </div>
        </div>
        <p className="my-2 text-base font-normal text-stone-500 ">{company}</p>
      </motion.li>
    </ol>
  );
}

export default TimelineItem;
