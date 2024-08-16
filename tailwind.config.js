/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0D3B66', // Navy Blue
          light: '#1B4F72',   // Lighter Blue
          dark: '#0B2D51',    // Darker Blue
        },
        secondary: {
          DEFAULT: '#FAF0CA', // Cream
          light: '#FFF7E0',   // Light Cream
          dark: '#F0E1B4',    // Darker Cream
        },
        tertiary: {
          DEFAULT: '#F4D35E', // Warm Yellow
          light: '#F7E189',   // Light Yellow
          dark: '#C9A943',    // Golden Brown
        },
      },
    }
  },
  plugins: [],
}