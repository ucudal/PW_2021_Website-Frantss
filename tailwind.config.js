module.exports = {
  purge: ['docs/*.html'],
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
    extend: {
      inset: {
        '1/2': '50%',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover'],
      borderWidth: ['hover'],
    },
  },
  plugins: [],
};
