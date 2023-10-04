/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#919191",
        light__gray: "#9a9a9a",
      },
      width: {
        55: "55%",
        40: "40%",
        4: "1rem",
      },
      height: {
        "70vh": "70vh",
        "90vh": "90vh",
        "90%": "90%",
      },
      padding: {
        3: "3px",
        1.7: "1.75rem",
      },
      margin: {
        half: "50%",
      },
      fontSize: {
        2.7: "2.7rem",
        1.5: "1.5rem",
        1.8: "1.8rem",
      },
      fontFamily: {
        custom: ["font-family: 'Public Sans', sans-serif"],
      },
    },
    screens: {
      sm: "320px",
      x2sm: "425px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    colors: {
      blue: "#000F9F",
      white: "#fff",
    },
  },
  plugins: [],
};
