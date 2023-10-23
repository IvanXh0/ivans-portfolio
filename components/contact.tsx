"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/inView";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const loadingToast = toast.loading("Sending message...");

    const res = await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({ email, message }),
    });

    if (res.ok) {
      setLoading(false);
      setEmail("");
      setMessage("");
      toast.success("Message sent! I'll get back to you as soon as possible.");
      toast.dismiss(loadingToast);
    } else {
      toast.error("Something went wrong, please try again!");
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 ">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:ivan.apostolovski@gmail.com">
          ivan.apostolovski@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col" onSubmit={handleSubmit}>
        <input
          type="email"
          className="h-14 px-4 rounded-lg borderBlack"
          placeholder="Your email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 "
          placeholder="Your message..."
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button
          className="h-14 w-40 rounded-lg bg-black text-white hover:bg-opacity-90 transition-all"
          type="submit"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </motion.section>
  );
}
