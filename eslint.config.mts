import reactHooks from 'eslint-plugin-react-hooks'
import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import json from '@eslint/json'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  js.configs.recommended,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': reactHooks as any,
      prettier
    },
    languageOptions: {
      globals: globals.browser
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactHooks.configs.recommended.rules,

      // React 17+ não precisa importar React no JSX
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Prettier
      'prettier/prettier': 'error'
    }
  },

  json.configs.recommended,

  // Desativa conflitos de regras entre ESLint e Prettier
  prettierConfig,

  // Permite usar "any" no arquivo de configuração
  {
    files: ['eslint.config.*'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
])
