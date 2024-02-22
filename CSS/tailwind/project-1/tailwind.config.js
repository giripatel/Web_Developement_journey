/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lato : [
          '"Lato"','sans-serif'
        ],
        kode : ['"Kode Mono"', 'monospace','sans-serif']
      }
    },
  },
  plugins: [],
}