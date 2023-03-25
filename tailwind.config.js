/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.html'],
  theme: {
    extend: {
      colors: {
        primary: '#2E5CFF',
        secondary:'#172E80',
        offWhite:'#FBFBFB',
        Milk:'#FEF7F1',
        Slate_gray:'#777777',
        card1:'#F4F6FF',
        card2:'#FEF7F1',
        card3:'#F4F6FF',
      },
      fontFamily: {
        body: ['Source Sans Pro, sans-serif']
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
      
    },
  },
  plugins: [],
}
