const path = require("path");

/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  globals: {
    __IS_DEV__: true,
  },
  testTimeout: 60000,
  testEnvironment: "jest-environment-jsdom", // Используем jsdom для тестирования
  clearMocks: true, // Очищаем моковые данные между тестами
  coveragePathIgnorePatterns: ["\\node_modules\\", "\\dist\\"], // Игнорируем папки
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // Разрешённые расширения модулей
  moduleDirectories: ["node_modules"], // Где искать модули
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}], // Трансформация TypeScript файлов с ts-jest
  },
  // setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  modulePaths: ["<rootDir>/src"],
  rootDir: "../../", // Корень проекта
  setupFilesAfterEnv: ["<rootDir>config/jest/setupTests.ts"],
  moduleNameMapper: {
    "\\.svg": path.resolve(__dirname, "jestEmptyComponent.tsx"),
    "\\.(css|scss)$": path.resolve(__dirname, "styleMock.ts"),
    "^entities/(.*)$": "<rootDir>/src/entities/$1",
    "^shared/(.*)$": "<rootDir>/src/shared/$1",
    "^widgets/(.*)$": "<rootDir>/src/widgets/$1",
    "^app/(.*)$": "<rootDir>/src/app/$1",
    // "\\.s?css$": "identity-obj-proxy",
  },
  testMatch: ["<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"], // Шаблон поиска тестовых файлов
};
