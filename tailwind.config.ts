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
      white: "#ffffff",
      dark:{
        light: "#5a7184",
        hard: "#0D2436",
        soft: "#184B56",
        spansoft: '#FF9F6D',
        pinkHard: '#be5cbb',
        pinkLight: '#f4daf2'
      },
     },
     fontFamily: {
      oepnsans: ["'Open Sans'", "sans-serif"],
      roboto: ["'Roboto'", "sans-serif"],

     },
    },
  },
  plugins: [require("@tailwindcss/typography"),require("daisyui")],
  daisyui: {
    themes: [], // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
   preffix: 'd-'
  },

};
