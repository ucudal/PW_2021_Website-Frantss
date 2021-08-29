module.exports = {
  purge: ['./docs/**/*.html', './docs/**/*.js'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#20123a',
      secondary: '#ff7e00',
      tertiary: '#fff',
    },
    fill: theme => ({
      primary: theme('colors.primary'),
      secondary: theme('colors.secondary'),
      tertiary: theme('colors.tertiary'),
    }),
    textColor: theme => theme('colors'),
  },
  variants: {
    extend: {
      fill: ['hover'],
    },
  },
  plugins: [],
};
