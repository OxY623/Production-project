import webpack from "webpack";
import {buildWebpackConfig} from "./config/build/buildWebpackConfig"; // Функция для создания конфигурации Webpack
import {BuildEnv, BuildPaths} from "./config/build/types/config"; // Типы для переменных окружения и путей
import path from "path"; // Модуль для работы с путями

// Экспортируем функцию, которая принимает переменные окружения (env)
export default (env: BuildEnv) => {
  // Определяем пути для основных файлов и директорий проекта
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"), // Путь к точке входа приложения
    build: path.resolve(__dirname, "./build"), // Путь к директории сборки
    html: path.relative(__dirname, "./public/index.html"), // Путь к HTML-шаблону
    src: path.relative(__dirname, "./src"), // Путь к исходникам проекта
  };

  // Определяем режим сборки: 'development' или 'production'
  const mode = env.mode || "development"; // По умолчанию используется 'development'

  // Определяем порт для DevServer (по умолчанию 3000)
  const PORT = env.port || 3000;

  // Флаг, указывающий, что сборка выполняется в режиме разработки
  const isDev = mode === "development";

  // Генерируем конфигурацию Webpack с помощью вспомогательной функции
  const config: webpack.Configuration = buildWebpackConfig({
    mode, // Режим сборки
    paths, // Пути к файлам и директориям
    isDev, // Флаг для режима разработки
    port: PORT, // Порт для DevServer
  });

  // Возвращаем готовую конфигурацию Webpack
  return config;
};
