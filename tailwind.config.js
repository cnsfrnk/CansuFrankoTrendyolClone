/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{

        TrndKirmizi:'#9D4516',
        TrndYesil:'#2E6937',
        TrndPembe:'#C63B45',
        TrndSari:'#F3F3F3',
        TrndMercan: '#F46A3A'
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
