/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'off-white': '#E0E0E0', // A subtle off-white
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        'dm-serif': ['"DM Serif Display"', 'serif'],
      },
    },
  },
  plugins: [],
}
