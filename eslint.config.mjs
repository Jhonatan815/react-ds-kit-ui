import js from '@eslint/js'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import hooks from 'eslint-plugin-react-hooks'
import testingLibrary from 'eslint-plugin-testing-library'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: [
      'packages/ui/dist/**', // Ignora el dist de tu paquete ui
    ],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      globals: {
        React: true,
        JSX: true,
        window: 'readonly',
        document: 'readonly',
        alert: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        describe: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': hooks,
      'jsx-a11y': jsxA11y,
      'testing-library': testingLibrary,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  prettierConfig,
]
