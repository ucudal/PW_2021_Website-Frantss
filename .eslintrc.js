module.export = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 2017,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
