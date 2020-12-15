module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'google',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'semi': 'off',
    'indent': 'off',
    'comma-dangle': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'off',
    'newline-per-chained-call': 'off',
    'object-shorthand': 'off',
    'new-cap': 'off',
    'require-jsdoc': 'off',
    'no-trailing-spaces': 'off',
    'object-curly-spacing': 'off',
    'no-global-assign': 'off',
    'max-len': [
      'error', 100,
    ],
  },
}
