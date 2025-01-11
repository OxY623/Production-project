import {Decorator} from "@storybook/react";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";
import "C:/Users/fuzzy/Desktop/Project_app/src/app/styles/index.scss";
import React from "react";

export const ThemeDecorator: Decorator = (Story, context) => {
  const theme =
    (context.parameters.theme as Theme) ||
    (context.parameters.globals.theme as Theme) ||
    Theme.LIGHT;
  return (
    <div className={`app ${theme}`}>
      <Story />
    </div>
  );
};

export default ThemeDecorator;
