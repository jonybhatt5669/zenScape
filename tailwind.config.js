/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#3d3d3e',
          100: '#353536',
          200: '#2e2e2f',
          300: '#282829',
          400: '#242425', // Base
          500: '#1f1f20',
          600: '#1a1a1b',
          700: '#151516',
          800: '#101011',
          900: '#0a0a0b',
        },
        secondary: {
          50: '#9c9c9c',
          100: '#919191',
          200: '#858585',
          300: '#797979',
          400: '#6d6d6d', // Base
          500: '#616161',
          600: '#555555',
          700: '#494949',
          800: '#3d3d3d',
          900: '#313131',
        },
        neutral: {
          50: '#ffffff',
          100: '#fdfdfd',
          200: '#fbfbfb',
          300: '#f8f8f8',
          400: '#f3f3f3', // Base
          500: '#e6e6e6',
          600: '#d9d9d9',
          700: '#cccccc',
          800: '#bfbfbf',
          900: '#b3b3b3',
        },
      },
    },
  },
  plugins: [],
};
