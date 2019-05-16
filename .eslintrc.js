module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'plugin:compat/recommended'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  plugins: ['prettier', 'react', 'compat'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/prop-types': 0,
    'import/no-unresolved': [2, { ignore: ['^@/', '^umi/'] }],
  },
  settings: {
    polyfills: ['URL'],
  },
};
