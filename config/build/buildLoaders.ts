import webpack from "webpack";
import {BuildOptions} from "./types/config";
import {buildCssLoader} from "./loaders/buildCssLoader";
import {buildCssModuleLoader} from "./loaders/buildCssModuleLoader";

export function buildLoadersConfig({isDev}: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [["i18next-extract", {locales: ["ru", "en"], keyAsDefaultValue: true}]],
      },
    },
  };

  const cssLoader = buildCssLoader(isDev);

  const cssModuleLoader = buildCssModuleLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  return [babelLoader, typescriptLoader, cssLoader, cssModuleLoader, fileLoader, svgLoader];
}