const typescript = require("@typescript-eslint/eslint-plugin");
const parser = require("@typescript-eslint/parser");
const eslintReact = require("eslint-plugin-react");
const eslintReactHooks = require("eslint-plugin-react-hooks");
const eslintJsxA11y = require("eslint-plugin-jsx-a11y");
const eslintPrettier = require("eslint-plugin-prettier");
const eslintConfigPrettier = require("eslint-config-prettier");
const eslintReactRefresh = require("eslint-plugin-react-refresh");
const eslintUnusedImports = require("eslint-plugin-unused-imports");
const i18n = require("eslint-plugin-i18n");

/** @type {require("eslint").Linter.FlatConfig[]} */
module.exports = [
  {
    files: ["src/**/*.{ts,tsx}"], // Для файлов TypeScript и React TypeScript
    languageOptions: {
      parser: parser, // Используем парсер для TypeScript
      parserOptions: {
        ecmaVersion: 2020, // ECMAScript 2020
        sourceType: "module", // Используем модули
        ecmaFeatures: {
          jsx: true, // Включаем поддержку JSX
        },
      },
    },
    plugins: {
      "@typescript-eslint": typescript,
      react: eslintReact,
      "react-hooks": eslintReactHooks,
      "jsx-a11y": eslintJsxA11y,
      prettier: eslintPrettier,
      "react-refresh": eslintReactRefresh,
      "unused-imports": eslintUnusedImports,
      i18n: i18n,
    },
    rules: {
      ...eslintPrettier.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "react-refresh/only-export-components": ["warn", {allowConstantExport: true}],
      "prefer-const": "error",
      "react/jsx-curly-brace-presence": ["warn", {props: "never", children: "never"}],
      "react/function-component-definition": ["warn", {namedComponents: "arrow-function"}],
      "react/self-closing-comp": ["error", {component: true, html: true}],
      "max-lines": ["warn", {max: 124}],
      "max-params": ["error", 3],
      "unused-imports/no-unused-imports": "warn", // Убирает неиспользуемые импорты
      "jsx-a11y/alt-text": ["warn"], // Правила доступности для изображений
      "i18next/no-literal-string": [
        "error",
        {
          markupOnly: true,
          ignoreAttribute: ["data-testid"],
        },
      ],
    },
    overrides: [
      {
        files: ["**/src/**/*.test.{ts,tsx}"],
        rules: {
          "i18next/no-literal-string": "off",
        },
      },
    ],
    ignores: [
      "node_modules/**", // Игнорировать папку node_modules
      "dist/**", // Игнорировать папку dist
      "src/**/*.test.ts", // Игнорировать тестовые файлы
      "src/**/*.test.tsx", // Игнорировать React-тесты
      "build/**",
      "coverage",
      "eslint.config.js",
    ],
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },
];
