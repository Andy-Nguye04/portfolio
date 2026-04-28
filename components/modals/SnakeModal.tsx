"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface SnakeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SnakeModal({ open, onClose }: SnakeModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="snake-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        >
          <motion.div
            key="snake-modal"
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" as const }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-spotify-dark rounded-2xl shadow-2xl overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-10 text-spotify-muted hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
            <iframe
              src="https://solitaires-online.com/snake/#id=47u07xxw2j,no-article,no-nav,no-ads,no-feedback"
              title="Snake"
              width={600}
              height={532}
              className="block"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
