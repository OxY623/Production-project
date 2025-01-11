import type {Meta, StoryObj} from "@storybook/react";
import {Button} from "./Button";
import {ThemeButton} from "./Button.types";
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

// export const Outline: Story = {
//   args: {
//     children: "Outline Button",
//     theme: ThemeButton.OUTLINE,
//   },
// };

// export const PrimaryDark: Story = {
//   parameters: {theme: Theme.DARK},
//   decorators: [ThemeDecorator],
//   args: {
//     children: "Primary Dark",
//   },
// };

// export const ClearDark: Story = {
//   parameters: {theme: Theme.DARK},
//   decorators: [ThemeDecorator],
//   args: {
//     children: "Clear Dark",
//     theme: ThemeButton.CLEAR,
//   },
// };

export const OutlineDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Outline Dark",
    theme: ThemeButton.OUTLINE,
  },
};
