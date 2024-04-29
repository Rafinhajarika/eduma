/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
   
    extend: {
      fontFamily:{
        'Roboto':['Roboto'],
        'Roboto_Slab':['Roboto Slab'],
        'Inter':['Inter', 'sans-serif']
      },
      screens: {
        '3xl': '1800px',
      },
      boxShadow:{
        "6xl":['0px 2px 16px 0px rgba(0, 0, 0, 0.1)']
      }
    },
  },
  plugins: [],
}