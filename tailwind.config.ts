import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand palette — derived from brief: deep blue (trust), green (growth),
        // orange (action). Tuned to specific hexes rather than tailwind defaults.
        ink: "#0A1A2F",        // deep blue-black, hero/background anchor
        deep: "#0F2A4A",       // deep blue
        royal: "#1B4D8C",      // primary blue
        sky: "#3B82C4",        // lighter accent blue
        leaf: "#1E8A5B",       // primary green
        mint: "#34B27B",       // lighter green
        ember: "#F2731C",      // orange CTA
        emberlite: "#FF8A3D",
        sand: "#F6F8FA",       // light gray surface
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-18px)" } },
        "float-slow": { "0%,100%": { transform: "translateY(0) rotate(0deg)" }, "50%": { transform: "translateY(-26px) rotate(6deg)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float-slow 11s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
