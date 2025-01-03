/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jest-environment-jsdom", // Используем jsdom для тестирования
  clearMocks: true, // Очищаем моковые данные между тестами
  coveragePathIgnorePatterns: ["\\node_modules\\", "\\dist\\"], // Игнорируем папки
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"], // Разрешённые расширения модулей
  moduleDirectories: ["node_modules"], // Где искать модули
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}], // Трансформация TypeScript файлов с ts-jest
  },
  rootDir: "../../", // Корень проекта
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^app/(.*)$": "<rootDir>/src/app/$1",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js",
  },
  testMatch: ["<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)"], // Шаблон поиска тестовых файлов
};
