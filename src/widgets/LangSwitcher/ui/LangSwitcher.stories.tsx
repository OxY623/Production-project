import type {Meta, StoryObj} from "@storybook/react";
import {LangSwitcher} from "./LangSwitcher";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof LangSwitcher> = {
  title: "widget/LangSwitcher",
  component: LangSwitcher,
};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;

// Основные истории

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {},
};
