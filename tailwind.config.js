/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
        roboto: ["Roboto", "serif"],
      },
      colors: {
        primary: "#11245A",
        secondary: "#38BDF8",
        accent: "#FACC15",
      },
    },
  },
  plugins: [require("daisyui")],
};
