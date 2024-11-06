module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  root: true,
  overrides: [
    {
      files: 'src/**/*.spec.ts',
      plugins: ['@typescript-eslint/eslint-plugin', 'jest'],
      extends: ['plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:jest/recommended'],
    },
  ],
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
    'object-shorthand': ['warn'],
  },
};
