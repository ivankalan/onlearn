const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        violet: colors.violet,
        indigo: colors.indigo,
        blueGray: colors.blueGray,
      },
      fontFamily: {
        open: 'Open Sans',
        pop: 'Poppins',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
