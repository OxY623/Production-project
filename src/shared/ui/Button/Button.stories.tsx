import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";
import {ThemeButton} from "./Button.types";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: {control: "color"}, // Возможность менять цвет фона через Storybook
    theme: {
      control: "radio",
      options: Object.values(ThemeButton), // Автоматически генерирует список тем из ThemeButton
    },
    onClick: {action: "clicked"}, // Добавляем действие для клика
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Основные истории

// История с базовыми параметрами
export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

// История с темой "CLEAR"
export const Clear: Story = {
  args: {
    children: "Clear Button",
    theme: ThemeButton.CLEAR,
  },
};

// История с темой "OUTLINE"
export const Outline: Story = {
  args: {
    children: "Outline Button",
    theme: ThemeButton.OUTLINE,
  },
};

// История с темой Dark
export const PrimaryDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Primary Dark",
  },
};

// История с темой Dark
export const ClearDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Clear Dark",
    theme: ThemeButton.CLEAR,
  },
};

// История с темой Dark
export const OutlineDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Outline Dark",
    theme: ThemeButton.OUTLINE,
  },
};
