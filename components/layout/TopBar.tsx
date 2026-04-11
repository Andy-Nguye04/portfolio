"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function TopBar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 md:left-[72px] right-0 md:right-[320px] h-16 z-10 flex items-center px-6 gap-4 transition-all duration-300 ${
        scrolled
          ? "bg-[#121212] shadow-lg shadow-black/50"
          : "bg-black/30 backdrop-blur-md"
      }`}
    >
      {/* Back / Forward */}
      <div className="flex items-center gap-1">
        <button
          onClick={() => router.back()}
          className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => router.forward()}
          className="w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Search — hidden on small screens */}
      <div className="hidden sm:flex flex-1 max-w-sm mx-auto relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-spotify-muted pointer-events-none" />
        <input
          type="text"
          placeholder="What do you want to play?"
          className="w-full bg-[#2A2A2A] rounded-full pl-9 pr-4 py-2 text-sm text-white placeholder:text-spotify-muted focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      {/* Avatar */}
      <button
        onClick={() => router.push("/about")}
        className="w-9 h-9 rounded-full bg-spotify-muted/40 hover:bg-spotify-muted/60 transition-colors overflow-hidden flex-shrink-0 ml-auto"
        title="Profile"
      >
        <div className="w-full h-full bg-spotify-dark" />
      </button>
    </header>
  );
}
