/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./docs/**/*.{vue,js,ts,jsx,tsx,md}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#10BB76",
        primary: "#10BB76",
        secondary: "#0A141E",
        black: "#0A141E",
        white: "#ffffff",
        darkGreen: "#1F8F69",
        "gray-one": "#1F8F69",
        "gray-two": "#616161",
        "light-gray-one": "#F0F3F6",
        "light-gray-two": "#E0E2E4",
        "blue-green": "#00A0B4",
        blue: "#009DE3",
        red: "#FA1919",
        purple: "#8E3BE0",
        orange: "#FFAA1F",
      },
    },
  },
  plugins: [],
};
