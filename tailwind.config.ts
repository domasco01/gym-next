import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        background: "#110317",
        standard: "#882BA4"
      },
    },
  },
  plugins: [],
} satisfies Config;
