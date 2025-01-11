import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i, // Исключаем .module.scss файлы
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: false, // Обычные SCSS файлы не используют модули
        },
      },
      "sass-loader",
    ],
  };
}
