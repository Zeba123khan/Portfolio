/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'e3e2db': '#E3E2DB',
        '0b0e0f': '#0B0E0F',
        'c7c4b7': '#C7C4B7',
        '4a4237': '#4A4237',
        'bb9553': '#BB9553',
        '877470': '#877470',
      },
    },
  },
  plugins: [],
}
