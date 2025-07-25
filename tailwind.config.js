module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        forest: '#355C3A',
        moss: '#A3C09A',
        earth: '#7F674C'
      },
      fontFamily: {
        sans: ['Montserrat', 'Arial', 'sans-serif'],
        humor: ['Comic Sans MS', 'Comic Sans', 'cursive'] // For humorous touches
      },
      backgroundImage: {
        'forest': "url('/forest-bg.jpg')"
      }
    },
  },
  plugins: [],
}