/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        monsterrat: ["Montserrat Alternates"],
        raleway:["Raleway"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

