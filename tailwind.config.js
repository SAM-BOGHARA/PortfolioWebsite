/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#282828',
        secondary: '#ecc94b',
        // ...
      }
    },
  },
  plugins: [],
}
