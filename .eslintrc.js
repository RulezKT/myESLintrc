module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',

    'airbnb-base',

    'plugin:react/recommended',
    'plugin:react-app/recommended',
    'plugin:jsx-a11y/recommended',
  ],

  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },

  rules: {
    'no-console': 0,

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'always',
      },
    ],

    'react-app/jsx-a11y/href-no-hash': 'off',

    'class-methods-use-this': 'off',
  },

  plugins: ['prettier', 'jsx-a11y', 'react'],
};
