// @ts-check
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'
import reactDOM from 'eslint-plugin-react-dom'
import tseslint from 'typescript-eslint'
import a11y from 'eslint-plugin-jsx-a11y'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      a11y.flatConfigs.strict,
      js.configs.recommended,
      reactDOM.configs.strict,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      reactX.configs['recommended-typescript'],
      tseslint.configs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
])