module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 'off',
  },
  overrides: [
    {
      files: ['*.js'],
      rules: {
        'react/forbid-prop-types': 'off',
        'no-param-reassign': ['error', { props: false }],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': 'off',
      },
    },
  ],
};
