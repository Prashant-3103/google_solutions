/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
     colors: {
      primary: "#1565D8",
      dark:{
        light: "#5a7184",
        hard: "#0D2436",
        soft: "#184B56",
        spansoft: '#FF9F6D'
      },
     },
     fontFamily: {
      oepnsans: ["'Open Sans'", "sans-serif"],
      roboto: ["'Roboto'", "sans-serif"],

     },
    },
  },
  plugins: [],
};
