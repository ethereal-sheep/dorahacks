import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "w-200": "200% 100%",
      },
      backgroundPosition: {
        "x--100": "-100% center",
        "x-100": "100% center",
      },
      screens: {
        sm: "512px",
      },
    },
  },
  plugins: [],
} satisfies Config;
