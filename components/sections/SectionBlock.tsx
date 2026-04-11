"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionBlockProps {
  title: string;
  children?: ReactNode;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function SectionBlock({ title, children }: SectionBlockProps) {
  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col gap-4"
    >
      <h2 className="text-xl font-semibold text-white">{title}</h2>
      {children}
    </motion.section>
  );
}
