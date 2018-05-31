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
    'no-console': 'off',

    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],

    'arrow-body-style': ['error', 'as-needed'],

    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],

    'no-param-reassign': ['error', { props: false }],

    'comma-dangle': 'off',

    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
      },
    ],

    'react-app/jsx-a11y/href-no-hash': 'off',

    'class-methods-use-this': 'off',

    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
  },

  plugins: ['prettier', 'jsx-a11y', 'react'],
};
