/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "Roboto": ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        blink: {
          'to': { visibility: 'hidden'}
        }
      },
      animation: {
        blink: 'blink 1s steps(5, start) infinite'
      }
    },
  },
  plugins: [],
}
