import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        surface: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          800: "#1C1917",
          900: "#141413",
          950: "#0C0A09",
        },
        charcoal: {
          800: "#222222",
          900: "#141414",
          950: "#0A0A0A",
        },
        stone: {
          50: "#FAFAF9",
          100: "#F5F5F4",
          200: "#E7E5E4",
          300: "#D6D3D1",
          400: "#A8A29E",
          500: "#78716C",
          600: "#57534E",
          700: "#44403C",
          800: "#292524",
          900: "#1C1917",
        }
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "-apple-system", "sans-serif"],
        cormorant: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
      },
      letterSpacing: {
        widest_editorial: "0.22em",
        wide_editorial: "0.14em",
      },
      lineHeight: {
        relaxed_editorial: "1.8",
      }
    },
  },
  plugins: [],
};
export default config;
