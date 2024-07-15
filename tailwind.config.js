/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fuentPrincipal: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
},
};