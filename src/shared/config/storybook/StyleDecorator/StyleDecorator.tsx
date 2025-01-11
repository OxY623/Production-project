import {Decorator} from "@storybook/react";
import "app/styles/index.scss";
import React from "react";

export const StyleDecorator: Decorator = (Story) => (
  <div>
    <Story />
  </div>
);

export default StyleDecorator;
