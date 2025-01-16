import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.{js,mjs,cjs,ts}"], 
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // Disable the unused vars rule
    },
    ignores: [
      // Add your ignore patterns here
      'node_modules/',
      'build/',
      'dist/',
      // etc...
    ]
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  ...tseslint.configs.recommended,
];
