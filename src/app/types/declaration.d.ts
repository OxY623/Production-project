// declare module "*.module.scss" {
//   const classes: {[key: string]: string};
//   export default classes;
// }

declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classnames: IClassNames;
  export = classnames;
}

declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;

declare module "eslint-plugin-i18n" {
  const plugin: any;
  export default plugin;
}
