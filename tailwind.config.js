/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Bricolage Grotesque', '"Helvetica Neue"', 'sans-serif'], // Default sans font
      },
      colors: {
        primary: '#0A2540', // Add the custom default font color
      },
      textColor: {
        DEFAULT: '#0A2540', // Set the default text color
      },

    },
  },
  plugins: [],
}
