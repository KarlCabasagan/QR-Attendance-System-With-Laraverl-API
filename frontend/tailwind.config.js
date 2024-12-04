/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#4d4d4d',
      'lightgray': '#D3D3D3',
      'purple': '#402E7A',
      'lightpurple': '#9747FF',
      'bgcolor': '#E5E4E2',
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

