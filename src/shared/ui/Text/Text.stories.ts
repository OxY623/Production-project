import type {Meta, StoryObj} from "@storybook/react";
import {Text, TextTheme} from "./Text";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

const meta: Meta<typeof Text> = {
  title: "shared/Text",
  component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Light: Story = {
  args: {
    text: "Test Text",
    title: "Test Title",
  },
};

export const LightOnlyTitle: Story = {
  args: {
    title: "Test Title",
  },
};

export const Error: Story = {
  args: {
    title: "Test Title",
    text: "Test Text",
    theme: TextTheme.ERROR,
  },
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    text: "Test Text",
    title: "Test Title",
  },
};

export const DarkOnlyTitle: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    title: "Test Title",
  },
};

export const DarkOnlyText: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    text: "Test Text",
  },
};

export const DarkError: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    text: "Test Text",
    title: "Test Title",
    theme: TextTheme.ERROR,
  },
};
