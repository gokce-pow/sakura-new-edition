module.exports = {
  root: true,

  env: {
    node: true,
  },

  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],

  parserOptions: {
    parser: 'babel-eslint',
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ]
}

/*

module.exports = {
  env: {
    es6: true,
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
  },
  plugins: ['prettier'],
}
*/
