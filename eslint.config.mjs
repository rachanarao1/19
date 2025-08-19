import js from '@eslint/js';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: js.configs.recommended.languageOptions.globals,
    },
    rules: {
      ...js.configs.recommended.rules,
      semi: ['error', 'always'],        // enforce semicolons
      quotes: ['error', 'single'],      // enforce single quotes
    },
  },
];
