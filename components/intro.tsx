"use client";

import Image from "next/image";
import { ModelCanvas } from "./3Dmodel";
import { motion } from "framer-motion";
import Link from "next/link";
import useActiveStore from "@/store/active.store";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/inView";

export default function Intro() {
  const { setActiveSection, setTimeOfLastClick } = useActiveStore();

  const { ref } = useSectionInView("Home", 0.8);
  return (
    <motion.section
      ref={ref}
      id="home"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full h-[60vh] mb-[12rem] md:mb-0 mx-auto mt-12 scroll-mt-[100rem]"
    >
      <div className="absolute inset-0 max-w-7xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-x-5 md:items-start ">
        <div className="mb-10 mt-4 text-xl font-medium !leading-[1.5] sm:text-xl text-slate-900 px-9 md:px-0 flex-1">
          <div className="p-5 flex items-center justify-center">
            <div className="hover:scale-105 transition">
              <Image
                src="/ivan.jpeg"
                alt="Ivan"
                width={100}
                height={100}
                className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              />
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="font-bold">Hey there, I&apos;m Ivan,</span> your
            friendly neighborhood{" "}
            <span className="font-bold">full-stack developer.</span> I get a
            kick out of building cool websites and apps. By day, I&apos;m a{" "}
            <span className="font-bold">
              Software Developer at Pabau Clinic Software
            </span>
            , cooking up code magic. When the sun sets, you&apos;ll find me
            sharing my tech wisdom as an{" "}
            <span className="font-bold">
              Assistant Lecturer at Seavus Education and Development Center
            </span>
            . Welcome to my corner of the web. Let&apos;s dive into my digital
            playground!
          </motion.h1>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 mt-5 md:mt-2 text-sm font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
            }}
          >
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact me here{" "}
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack "
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack"
              href="https://www.linkedin.com/in/ivan-apostolovski-22b361211/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.15rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
              href="https://github.com/IvanXh0"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </motion.div>
        </div>
        <div className="w-full h-full hidden md:flex items-center justify-center flex-1">
          <ModelCanvas />
        </div>
      </div>
    </motion.section>
  );
}
