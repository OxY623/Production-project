import type {Meta, StoryObj} from "@storybook/react";
import AboutPage from "./AboutPage";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof AboutPage> = {
  title: "page/AboutPage",
  component: AboutPage,
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

// Основные истории

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {},
};
