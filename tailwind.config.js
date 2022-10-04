/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html}"],
  purge: [ "public/**/*.html" ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        "primary-color": '#0079BA',
        "primary-color-alpha": '#0079bA8C',
        "primary-color-dark": '#052A39',
        "primary-color-light": '#33A7DE',
        "primary-text": '#C7EF00',
        "secondary-color": '#2F3B99',
        "light-gray": '#C4C4C4',
        gray: '#BBBBBB',
        "dark-gray": '#666666',
        white: '#FFFFFF',
        black: '#000000',
        "kenoby-color": '#011E60',
        "youx-color": '#B9114B',
      },
      height: {
        '128': '32rem'
      }
    },
  },
  plugins: [],
}