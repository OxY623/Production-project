import type {Meta, StoryObj} from "@storybook/react";
import MainPage from "./MainPage";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";
import {ReduxDecorator} from "shared/config/storybook/ReduxDecorator/ReduxDecorator";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof MainPage> = {
  title: "page/MainPage",
  component: MainPage,
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof MainPage>;

// Основные истории

export const Light: Story = {
  decorators: [ReduxDecorator],
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator, ReduxDecorator],
  args: {},
};
