module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif']
      },
      colors:{
        'nav': '#404053',
        'theme': '#3F3FFF',
        'secondary': '#9191A4',
        'body': '#17171F',
        'blue': '#A3A3FF',
        'input': '#2A2A35',
        'input-border': '#565666',
        'bookmark-purple': '#5267Df',
        'bookmark-red': '#FA5959',
        'bookmark-blue': '#242A45',
        'bookmark-grey': '#9194A2',
        'bookmark-white': '#f7f7f7'
      },
      fontSize: {
        xs: '.7rem',
        base: '1rem',
        xbase: '1.2rem'
      }
    },
  },
  plugins: [],
}
