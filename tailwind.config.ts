import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "spotify-green": "#1DB954",
        "spotify-black": "#191414",
        "spotify-dark": "#282828",
        "spotify-muted": "#B3B3B3",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: (u: Record<string, Record<string, string>>) => void }) {
      addUtilities({ ".scrollbar-none": { "-ms-overflow-style": "none", "scrollbar-width": "none" } });
    },
  ],
};
export default config;
