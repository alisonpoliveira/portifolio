import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  // Estados :hover só em dispositivos com mouse — evita "hover preso" ao tocar no celular.
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        bg: "#332B6B",
        deep: "#241D52",
        ink: "#FCFAFF",
        graphite: "#E6E0F5",
        muted: "#C4B9E0",
        line: "rgba(255, 255, 255, 0.2)",
        accent: {
          DEFAULT: "#FF9D6E",
          soft: "#FFCBA8",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
