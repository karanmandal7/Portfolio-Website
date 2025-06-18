/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
    'spin-slow': 'spin 6s linear infinite',
    'spin-slower': 'spin 10s linear infinite'
  },
  transitionProperty: {
    'scale-opacity': 'transform, opacity'
  },
  fontFamily: {
  heading: ['Orbitron', 'sans-serif'],
  body: ['Manrope', 'sans-serif']
}


    },
  },
  darkMode: 'class',
  plugins: [],
}
