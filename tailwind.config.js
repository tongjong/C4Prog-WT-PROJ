/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
      "./assets/js/*.js"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: {
          DEFAULT: '#fff',
        },
        black: {
          DEFAULT: '#000',
        },
        coyoteBrown: {
          DEFAULT: '#916137',
        },
        ebony: {
          DEFAULT: '#171514',
        },
        copper: {
          DEFAULT: '#bf6537',
        },
        tigerOrange: {
          DEFAULT: '#e69549',
        }
      },
    },
  },
  plugins: [],
}

