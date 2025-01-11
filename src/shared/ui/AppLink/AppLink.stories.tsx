import type {Meta, StoryObj} from "@storybook/react";
import AppLink from "./AppLink";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";
import {AppLinkTheme} from "./AppLink.types";

// Метаданные Storybook для компонента Button
const meta: Meta<typeof AppLink> = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

// Основные истории

export const Primary: Story = {
  args: {
    children: "Test Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: "Test Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const Red: Story = {
  args: {
    children: "Test Text",
    theme: AppLinkTheme.RED,
  },
};

export const PrimaryDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Test Text",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const SecondaryDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Test Text",
    theme: AppLinkTheme.SECONDARY,
  },
};

export const RedDark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children: "Test Text",
    theme: AppLinkTheme.RED,
  },
};
