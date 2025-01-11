import {Decorator} from "@storybook/react";
import "C:/Users/fuzzy/Desktop/Project_app/src/app/styles/index.scss";
import "app/styles/index.scss";
import React from "react";

export const StyleDecorator: Decorator = (Story) => (
  <div>
    <Story />
  </div>
);

export default StyleDecorator;
