/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "white",
        dark: "black",
      },
      fontSize: {
        navLg: "17px",
      },
      borderWidth: {
        b3: "3px",
      },
      fontFamily: {
        abril: ["abril", "serif"],
        optima: ["optima", "serif"],
      },
    },
  },
  plugins: [],
};
