/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'teal-500': '#1AABA9',
        'blueGray-800': '#082449'
      }
    },
  },
  plugins: [],
};
