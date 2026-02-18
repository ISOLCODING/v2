/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fresh-blue': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc8fb',
          400: '#36adf7',
          500: '#0c92eb',
          600: '#0074c9',
          700: '#015da3',
          800: '#064f86',
          900: '#0b426f',
          950: '#072a4a',
        },
      },
      boxShadow: {
        'neumorph-light': '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff',
        'neumorph-dark': '5px 5px 15px #050505, -5px -5px 15px #151515',
        'neumorph-inset': 'inset 2px 2px 5px #050505, inset -2px -2px 5px #151515',
      }
    },
  },
  plugins: [],
}

