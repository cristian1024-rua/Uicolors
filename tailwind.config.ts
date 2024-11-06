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

        'cristian': {
        '50': '#edfcfe',
        '100': '#d1f6fc',
        '200': '#a9ecf8',
        '300': '#6fddf1',
        '400': '#38c8e5',
        '500': '#11a8c9',
        '600': '#1187a9',
        '700': '#156c89',
        '800': '#1a5870',
        '900': '#1a4a5f',
        '950': '#0b3041',
        },
    
      },
    },
  },
  plugins: [],
};
export default config;
