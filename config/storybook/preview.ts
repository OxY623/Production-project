import type {Preview} from "@storybook/react";
// import "app/styles/index.scss";
import {Theme} from "../../src/app/providers/ThemeProviders/ui/ThemeContext";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator/StyleDecorator.tsx";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator.tsx";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator/RouterDecorator.tsx";
import {I18nDecorator} from "../../src/shared/config/storybook/i18nDecorator/i18nDecorator.tsx";

const preview: Preview = {
  parameters: {
    globals: {
      theme: Theme.LIGHT,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [StyleDecorator, I18nDecorator, ThemeDecorator, RouterDecorator],
};

export default preview;
