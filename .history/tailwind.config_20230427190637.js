/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#6a917a',
        secondary: '#F3EFE0',
        tertiary: '#FFF6BF',
        mainBackground: '222222',
        'black-100': '#100d25',
        'black-200': '#090325',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35'
      },
      screens: {
        xs: '450px'
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
      }
    }
  },
  plugins: []
};