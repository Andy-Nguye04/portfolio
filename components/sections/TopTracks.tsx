"use client";

import { motion } from "framer-motion";
import { links } from "@/data/links";
import TrackRow from "@/components/cards/TrackRow";

const rowVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.1 },
  }),
};

export default function TopTracks() {
  return (
    <section className="flex flex-col gap-4">
      {/* Section header */}
      <div className="flex flex-col gap-1">
        <h2 className="text-white font-bold text-2xl">Quick Links</h2>
        <p className="text-[#B3B3B3] text-xs">Find me everywhere</p>
      </div>

      {/* Track list container */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="rounded-lg overflow-hidden"
        style={{ backgroundColor: "#121212" }}
      >
        {links.map((link, i) => (
          <motion.div key={link.id} custom={i} variants={rowVariants}>
            <TrackRow link={link} isLast={i === links.length - 1} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
