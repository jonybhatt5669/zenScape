/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#242425',
        secondary: '#6d6d6d',
        neutral: '#f3f3f3',
      },
    },
  },
  plugins: [],
};
