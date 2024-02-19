/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      lg: '950px',
      md: '650px',
      sm: '550px'
    },
    extend: {
      fontFamily: {
        sans: [['"Nunito Sans"']]
      },
      gridTemplateColumns: {
        'auto-fill': 'repeat(auto-fill, minmax(240px, 1fr))'
      }
    },
    colors: {
      'dark-blue': 'hsl(209, 23%, 22%)', // Dark Mode Elements
      'very-dark-blue': {
        DEFAULT: 'hsl(207, 26%, 17%)', // Dark Mode Background
        text: 'hsl(200, 15%, 8%)' // Light Mode Text
      },
      'dark-gray': 'hsl(0, 0%, 52%)', // Light Mode Input
      'very-light-gray': 'hsl(0, 0%, 98%)', // Light Mode Background
      white: 'hsl(0, 0%, 100%)' // Dark Mode Text & Light Mode Elements
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
