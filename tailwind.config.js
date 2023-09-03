/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "teal-500": "#1AABA9",
        "blueGray-800": "#082449",
        colorMain: "#314288",
        colorMain2: "#D0D5EB",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "gradient-starter": "linear-gradient(to bottom, #CBD1EB , #fff)",
      },
    },
  },
  plugins: [require("flowbite")],
};
