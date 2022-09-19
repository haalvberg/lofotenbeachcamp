/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,tsx}',
    './pages/**/*.{html,js}',
    './index.html',
    './components/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      sans: ['Sora', 'sans-serif'],
      serif: ['Just Another Hand', 'serif'],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '4rem',
        sm: '4rem',
        md: '6rem',
      }
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