module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
  './assets/**/*.{js,jsx,ts,tsx,vue}',
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        body: ['Lato']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
