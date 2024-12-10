/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
         // dark mode
         'very-dark-blue': 'hsl(235, 21%, 11%)',
         'very-dark-desaturated-blue': 'hsl(235, 24%, 19%)',
         'light-grayish-blue': 'hsl(234, 39%, 85%)',
         'light-grayish-blue-hover': 'hsl(236, 33%, 92%)',
         'dark-grayish-blue': 'hsl(234, 11%, 52%)',
         'very-dark-grayish-blue': 'hsl(237, 14%, 26%)',
         // light mode
         'very-light-gray': 'hsl(0, 0%, 98%)',
         'very-light-grayish-blue': 'hsl(236, 33%, 92%)',
         'light-grayish-blue-light': 'hsl(233, 11%, 84%)',
         'dark-grayish-blue-light': 'hsl(236, 9%, 61%)',
         'very-dark-grayish-blue-light': 'hsl(235, 19%, 35%)',
         'custom-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
         'dark-bg': '#121212', // Dark background color
         'light-bg': '#ffffff',
         "text-custom-gradient":"linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))',
      },
      fontFamily:{
        josefin:['Josefin Sans','sans-serif']
      },
      screens: {
        // Custom breakpoint for 425px
        'l': '425px',
      },
    },
  },
  plugins: [],
}

