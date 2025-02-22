import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";
import {ButtonSize, ThemeButton} from "./Button.types";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
  },
};

export const Clear: Story = {
  args: {
    children: "Clear Button",
    theme: ThemeButton.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Clear Inverted Button",
    theme: ThemeButton.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Button",
    theme: ThemeButton.OUTLINE,
  },
};

export const OutlineL: Story = {
  args: {
    children: "Outline L Button",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L,
  },
};

export const OutlineXL: Story = {
  args: {
    children: "Outline XL Button",
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL,
  },
};

export const Background: Story = {
  args: {
    children: "Background Button",
    theme: ThemeButton.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Background Inverted Button",
    theme: ThemeButton.BACKGROUND_INVERTED,
  },
};

export const SquareM: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareXL: Story = {
  args: {
    children: ">",
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
  },
};

export const Disabled: Story = {
  args: {
    children: ">",
    theme: ThemeButton.OUTLINE,
    disabled: true,
  },
};

export const PrimaryDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Primary Dark",
  },
};

export const ClearDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Clear Dark",
    theme: ThemeButton.CLEAR,
  },
};

export const OutlineDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Outline Dark",
    theme: ThemeButton.OUTLINE,
  },
};
