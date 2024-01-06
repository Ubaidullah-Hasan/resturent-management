/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1320': '82.5rem', // 1320px max-w-screen-xl
      },
      aspectRatio: {
        'potrate': '4 / 5',
      },
      fontFamily: {
        'cinzel': 'Cinzel'
      },
      colors: {
        'primary': '#D1A054'
      }
    },
  },
  plugins: [require("daisyui")],
}

