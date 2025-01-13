import type {Meta, StoryObj} from "@storybook/react";
import {Navbar} from "./Navbar";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

const meta: Meta<typeof Navbar> = {
  title: "widget/Navbar",
  component: Navbar,
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Основные истории

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {},
};