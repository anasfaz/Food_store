/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Grote: ['Bricolage Grotesque', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
};
