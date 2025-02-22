import webpack, {RuleSetRule} from "webpack";
import {BuildPaths} from "../build/types/config";
import path from "path";
import {buildCssLoader} from "../build/loaders/buildCssLoader";
import {buildCssModuleLoader} from "../build/loaders/buildCssModuleLoader";

export default ({config}: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.resolve = config.resolve || {};
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": paths.src, // добавляем общий алиас
    entities: path.resolve(paths.src, "entities"), // алиас для entities
  };

  config.plugins?.push(
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
    }),
  );

  config.module = config.module || {rules: []};
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return {...rule, exclude: /\.svg$/i};
    }

    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  // config?.module?.rules = config.module.rules.filter(
  //   (rule: RuleSetRule) => !rule.test?.toString().includes("svg"),
  // );

  // // Добавляем новую обработку SVG
  // config.module.rules.push({
  //   test: /\.svg$/,
  //   use: ["@svgr/webpack"],
  // });

  config.module?.rules?.push(buildCssLoader(true));
  config.module?.rules?.push(buildCssModuleLoader(true));

  return config;
};
