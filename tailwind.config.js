module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fd: {
          bgt: "#F7FAFC"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
