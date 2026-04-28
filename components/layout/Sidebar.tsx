"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { House, Search, Library, Plus } from "lucide-react";
import SnakeModal from "@/components/modals/SnakeModal";

const navItems = [
  { href: "/", icon: House, label: "Home" },
  { href: "/projects", icon: Library, label: "Library" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [snakeOpen, setSnakeOpen] = useState(false);

  return (
    <>
    <SnakeModal open={snakeOpen} onClose={() => setSnakeOpen(false)} />
    <aside className="hidden md:flex fixed top-0 left-0 h-screen w-[72px] bg-black flex-col items-center py-6 z-20">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="mb-8"
      >
        <div className="w-9 h-9 rounded-full bg-spotify-green flex items-center justify-center">
          <svg viewBox="0 0 24 24" fill="black" className="w-5 h-5">
            <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424a.622.622 0 01-.857.207c-2.348-1.435-5.304-1.76-8.785-.964a.623.623 0 01-.277-1.215c3.809-.87 7.077-.496 9.712 1.115a.623.623 0 01.207.857zm1.223-2.722a.78.78 0 01-1.072.257c-2.687-1.652-6.785-2.131-9.965-1.166a.78.78 0 01-.973-.519.781.781 0 01.519-.972c3.632-1.102 8.147-.568 11.234 1.328a.78.78 0 01.257 1.072zm.105-2.835c-3.223-1.914-8.54-2.09-11.618-1.156a.935.935 0 11-.543-1.79c3.532-1.072 9.404-.865 13.115 1.338a.936.936 0 01-1.31 1.291l.356.317z" />
          </svg>
        </div>
      </motion.div>

      {/* Nav icons */}
      <nav className="flex flex-col items-center gap-2 flex-1">
        {navItems.map(({ href, icon: Icon, label }, i) => {
          const isActive = pathname === href;
          return (
            <motion.div
              key={href}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * i + 0.2, duration: 0.3 }}
            >
              <Link
                href={href}
                title={label}
                className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                  isActive ? "text-white" : "text-spotify-muted hover:text-white"
                }`}
              >
                <Icon size={22} />
              </Link>
            </motion.div>
          );
        })}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.3 }}
        >
          <button
            title="Search"
            onClick={() => setSnakeOpen(true)}
            className="flex items-center justify-center w-10 h-10 rounded-lg transition-colors text-spotify-muted hover:text-white"
          >
            <Search size={22} />
          </button>
        </motion.div>
      </nav>

      {/* Add playlist */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        title="Add playlist"
        className="flex items-center justify-center w-10 h-10 rounded-lg text-spotify-muted hover:text-white transition-colors"
      >
        <Plus size={22} />
      </motion.button>
    </aside>
    </>
  );
}
