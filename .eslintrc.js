module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  rules: {
    'no-multi-spaces': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single'],
    'react/react-in-jsx-scope': 'off'
    ,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
