/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange':'#e46a26',
        'brand-yellow':'#f6cc42',
        'brand-light':'#fcfcfc',
        'brand-dark':'#111',
      }
    },
  },
  plugins: [],
}
