import type {Meta, StoryObj} from "@storybook/react";
import LoadingSpinner from "./LoadingSpinner";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

const meta: Meta<typeof LoadingSpinner> = {
  title: "shared/LoadingSpinner",
  component: LoadingSpinner,
  args: {
    to: "/",
  },
};

export default meta;
type Story = StoryObj<typeof LoadingSpinner>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {},
};
