import type {Meta, StoryObj} from "@storybook/react";
import {LoginForm} from "./LoginForm";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";
import {ReduxDecorator} from "shared/config/storybook/ReduxDecorator/ReduxDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";

const meta: Meta<typeof LoginForm> = {
  title: "features/LoginForm",
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const LightLoginForm: Story = {
  args: {},
  decorators: [ReduxDecorator],
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ReduxDecorator, ThemeDecorator],
  args: {},
};
