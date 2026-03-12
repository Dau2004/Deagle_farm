/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#c80000',
        'brand-dark': '#a00000',
      },
      fontFamily: {
        fredoka: ['"Fredoka"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
