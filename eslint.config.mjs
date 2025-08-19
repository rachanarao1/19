import js from '@eslint/js';
<<<<<<< HEAD

export default [
  {
    ...js.configs.recommended,
    files: ['**/*.js'],
  }
];

=======

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: js.configs.recommended.languageOptions.globals
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ['error', 'always'],
      quotes: ['error', 'single']
    }
  }
];
>>>>>>> 8d9c138bbf25dfdc51b4e25272c854cbdf7a5ac6
