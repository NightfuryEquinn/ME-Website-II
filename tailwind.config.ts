import type { Config } from "tailwindcss";
import animated from 'tailwindcss-animated';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "red": "#C1115A",
      "light-pink": "#E13A6A",
      "pale-pink": "#E46A87",
      "pink": "#F72585",
      "dark-purple": "#4D004F",
      "purple": "#7209B7",
      "dark-blue": "#08173D",
      "deep-blue": "#03274c",
      "blue": "#3A0CA3",
      "light-blue": "#4361EE",
      "sky-blue": "#4CC9F0",
      "black": "#161A1D",
      "white": "#DEE2E6",
    },
    extend: {
      screens: {
        "3xl": "1920px",
      }
    },
  },
  plugins: [
    animated
  ],
} satisfies Config;
