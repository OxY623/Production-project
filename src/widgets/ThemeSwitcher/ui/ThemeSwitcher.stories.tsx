import type {Meta, StoryObj} from "@storybook/react";
import {ThemeSwitcher} from "./ThemeSwitcher";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof ThemeSwitcher> = {
  title: "widget/ThemeSwitcher",
  component: ThemeSwitcher,
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

// Основные истории

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {},
};
