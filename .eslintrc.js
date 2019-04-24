module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
  },
};
