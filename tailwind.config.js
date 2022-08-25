/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
      serif: ['Just Another Hand', 'serif'],
    },
    extend: {
      colors: {
        'sunset': '#FFD400',
      },
    },
  },
  plugins: [],
}