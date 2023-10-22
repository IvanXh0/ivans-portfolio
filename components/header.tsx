"use client";

import { links } from "@/lib/data";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import useActiveStore from "@/store/active.store";

export default function Header() {
  const {
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick,
  } = useActiveStore();

  return (
    <motion.header
      className="absolute inset-x-0 top-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <nav
        className="flex items-center justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <motion.div
          className="flex gap-x-3 sm:gap-x-5 md:gap-x-6 lg:gap-x-10"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.hash}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-teal-500 hover:underline-offset-4 hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
}
