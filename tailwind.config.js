/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  safelist: [
    'm-4', 'p-6', 'md:mr-10', // jaisi classes tumhe ensure karni ho ki purge na ho
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
