import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}',
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // animation: {
      //   display: "inline-flex";  
      //   marquee: "marquee linear infinite",
      // },
      // keyframes: {
      //   marquee: {
      //     "0%": { transform: "translateX(100%)" },
      //     "100%": { transform: "translateX(-100%)" },
      //   },
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        times: ['Times New Roman', 'Times', 'serif'],
        asriel: ['Asriel', 'Times New Roman', 'Times', 'serif'],
        hefeng: ['HefengShudao', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
