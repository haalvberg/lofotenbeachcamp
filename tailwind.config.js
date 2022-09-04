/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
      serif: ['Just Another Hand', 'serif'],
    },
    container: {
      center: true,
      padding: '6rem',
    },
    extend: {
      colors: {
        'sunset': '#FFD400',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}