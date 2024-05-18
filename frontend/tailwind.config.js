/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  theme: {

    fontFamily: {

      'sans': ['"Open Sans"', 'sans-serif'],

    'roboto': ['Roboto', 'sans-serif'],

      'poppins': ['Poppins', 'sans-serif'],
    },

    extend: {
      screens: {
        "1000px" : "1050px",
        "1100px" : "1110px",
        "800px" : "800px",
        "1300px" : "1300px",
        "400px" : "400px",
    },
  },
  },
  plugins: [],
}
