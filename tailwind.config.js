module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'main-back': "url('./publicbg.png')",
       })
    },
   
  },
  variants: {
    extend: {},
  },
      
plugins: [
  // ...
  require('tailwindcss'),
  // ...
],
}
