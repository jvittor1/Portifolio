/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-shadow": "rgba(0, 0, 0, 0.1) 0px 4px 8px",
      },

      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0) rotate(15deg)" },
          "50%": { transform: "translateY(-14px) rotate(15deg)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },

      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },

      // backgroundImage: {
      //   "image-background": "url('/src/assets/background.png')",
      // },
    },
  },
  plugins: [],
  safelist: ["text-gradient"],
};
