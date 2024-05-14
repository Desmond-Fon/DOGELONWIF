/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E0872F",
        secondary: "#A55200",
      },
      rotate: {
        1: "7deg",
        3: "20deg",
        2: "14deg",
        4: "12deg",
      },
    },
  },
  plugins: [],
};

