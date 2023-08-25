/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts, tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'teal-500': '#1AABA9',
        'blueGray-800': '#082449',
        'teal-600': '#1BB2B2',
        'orange-piala': '#FF9620',
        'white-gray' : '#ECF5F5',
        'black-blue' : '#082449',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        light: 300,
      },
      keyframes: {
        bounceCustom: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
          '50%': { transform: 'translateY(-60px)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' },
        },
      },
      animation: {
        bounceCustom: 'bounceCustom 2.5s infinite',
        ping: 'ping 2s infinite'
      },
      backgroundImage: {
        'linear-darkblue' : 'linear-gradient(215deg, #082449 0%, #134587 27.49%, #0C3872 55.10%, #082449 100%)'
      },
      screens: {
        'hd': '1920px'
      }
    },
  },
  plugins: [],
};
