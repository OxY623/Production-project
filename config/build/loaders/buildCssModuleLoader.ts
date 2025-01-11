import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssModuleLoader(isDev: boolean) {
  return {
    test: /\.module\.s[ac]ss$/i, // Обрабатываем только .module.scss файлы
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes(".module.")), // Должен использоваться только для .module.scss файлов
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:8]", // Имя класса для модулей
          },
        },
      },
      "sass-loader",
    ],
  };
}
