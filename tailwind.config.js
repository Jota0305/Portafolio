/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{html,jsx}',
    './pages/**/*.{html,jsx}',
    './index.html',
    './src/**/*.{html,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        fuentPrincipal: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  },
darkMode: ["selector", '[data-mode="dark"]']
};