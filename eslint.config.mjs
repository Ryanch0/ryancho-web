import storybook from "eslint-plugin-storybook";

import {dirname} from 'path'
import {fileURLToPath} from 'url'
import {FlatCompat} from '@eslint/eslintrc'
import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname
})

const eslintConfig = [
    ...compat.extends('next/core-web-vitals', 'next/typescript'),
    // Recommended JavaScript rules
    js.configs.recommended,
    // Recommended TypeScript rules
    ...tseslint.configs.recommended,
    // User custom rules and settings
    {
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            'unused-imports': unusedImports
        },
        rules: {
            'max-depth': ['error', 2], // Limit block nesting levels to 2
            'padding-line-between-statements': [
                'error',
                {blankLine: 'always', prev: '*', next: 'return'}, // Always blank line before return
                {blankLine: 'always', prev: '*', next: 'if'}, // Always blank line before if
                {blankLine: 'always', prev: 'function', next: '*'}, // Blank line after function
                {blankLine: 'always', prev: '*', next: 'function'} // Blank line before function
            ],
            'no-restricted-syntax': [
                'error',
                {
                    selector: 'TSInterfaceDeclaration',
                    message: 'Interface 대신 type 을 사용하세요.'
                },
                {
                    selector: 'VariableDeclaration[kind="let"]',
                    message: 'let 대신 const 를 사용하세요.'
                },
                {
                    selector: 'VariableDeclaration[kind="var"]',
                    message: 'var 대신 const 를 사용하세요.'
                },
                {
                    selector: 'SwitchStatement',
                    message: 'switch 대신 if 를 사용하세요.'
                },
                {
                    selector: 'IfStatement[alternate]',
                    message: 'else 대신 early return 을 사용하세요.'
                }
            ],
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            'prefer-const': 'error',

            'react-hooks/rules-of-hooks': 'error',
            'react-hooks/exhaustive-deps': 'warn',
            'react-refresh/only-export-components': [
                'warn',
                {allowConstantExport: true}
            ],

            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    },
    // Consolidated ignore patterns from both configs
    {
        ignores: [
            'dist/**',
            'build/**',
            'node_modules/**',
            '*.config.js',
            '*.config.ts',
            'vite.config.*',
            'vitest.config.*',
            '.next/**',
            'out/**',
            'next-env.d.ts'
        ]
    },
    ...storybook.configs["flat/recommended"]
]

export default eslintConfig
