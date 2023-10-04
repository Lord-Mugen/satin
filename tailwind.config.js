/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#919191",
        light__gray: "#DBDCDD",
        blue: "#000F9F",
      },
      width: {
        55: "55%",
        50: "50%",
        40: "40%",
        4: "1rem",
      },
      height: {
        "70vh": "70vh",
        "95vh": "95vh",
        "90%": "90%",
        200: "200px",
        420: "420px",
        500: "500px",
        800: "800px",
      },
      padding: {
        3: "3px",
        1.7: "1.75rem",
      },
      margin: {
        half: "50%",
      },
      fontSize: {
        2.5: "2.5rem",
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
      xl: "1400px",
    },
  },
  plugins: [],
};
