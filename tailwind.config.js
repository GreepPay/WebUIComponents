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
        primary: "#10BB76",
        secondary: "#0A141E",
        black: "#0A141E",
        white: "#ffffff",
        'dark-green': "#1F8F69",
        'very-light-gray': "#999999",
        "gray-one": "#1F8F69",
        "gray-two": "#616161",
        "light-gray-one": "#F0F3F6",
        "light-gray-two": "#E0E2E4",
        "blue-green": "#00A0B4",
        // blue: "#009DE3",
        // red: "#FA1919",
        // purple: "#8E3BE0",
        // orange: "#FFAA1F",
      },
    },
    screens: {
      xs: {
        max: "330px",
      },
      // => @media (min-width: 320px) { ... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      mdlg: "1030px",
      // => @media (min-width: 1030px) { ... }

      lg: "1580px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
