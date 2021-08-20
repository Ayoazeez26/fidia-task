module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        fd: {
          bgt: "#F7FAFC",
          border: "#E3E8EE",
          text: "#3C4257",
          fb: "#D9DCE1",
          pur: "#635CFF",
          ft: "#1A1F36",
          acc: "#4F566B",
          foot: "#697386",
          blu: "#5469D4"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
