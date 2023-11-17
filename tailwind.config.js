/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      width: {
        '1000': '1400px',

        'card': '16vw',
        'div': '73vw',

      },
      left: {
        'bit': '450px',
      },
      maxWidth: {
        'wid': '1450px',
      },
      minWidth: {
        'wid': '1000px',
        'card': '150px',
      },
      height:
      {
        '41': '170px',
        'side': '92vh'

      },
      top: {
        'bit': '50px',
      }
    },
  },
  plugins: [],
}