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
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: ['**/tests/**.js', '/mock/**/**.js', '**/**.test.js'],
      },
    ],
  },
  settings: {
    polyfills: ['URL'],
  },
};
