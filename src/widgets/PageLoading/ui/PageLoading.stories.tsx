import type {Meta, StoryObj} from "@storybook/react";
import {PageLoading} from "./PageLoading";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof PageLoading> = {
  title: "widget/PageLoading",
  component: PageLoading,
};

export default meta;
type Story = StoryObj<typeof PageLoading>;

// Основные истории

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {},
};
