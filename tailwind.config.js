/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html"
  ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {colors: {
      blue: {
        800: '#1877F2',
        700: '#2851A3',
        600: '#3b5998',
        500: '#8b9dc3',
        300: '#dfe3ee',
      },
      gray: {
        100: '#f3f4f6',
        600: '#4b5563',
      },
      green: {
        500: '#34d399',
        600: '#059669',
        700: '#047857',
      },
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "Arial", "sans-serif"],
    },
    gridTemplateColumns: {
      '70/30': '70% 30%',
    },
  },
},
plugins: [],
};