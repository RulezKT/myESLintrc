module.exports = {
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },

  rules: {
    'no-console': 0,

    'no-plusplus': [
      'error', { "allowForLoopAfterthoughts": true }
    ],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],

  },

  plugins: ['prettier'],
};
