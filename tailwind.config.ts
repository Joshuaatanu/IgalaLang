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
        keyframes: {
          shimmer: {
            '100%': {
              transform: 'translateX(100%)',
            },
          },
        },
        animation: {
          shimmer: 'shimmer 1.5s infinite',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    variants: {
      extend: {
        opacity: ['disabled'],
        cursor: ['disabled'],
        backgroundColor: ['disabled'],
      }
    }
  },
  plugins: [],
};
export default config;
