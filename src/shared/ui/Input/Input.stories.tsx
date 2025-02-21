import type {Meta, StoryObj} from "@storybook/react";
import {Input} from "./Input";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

const meta: Meta<typeof Input> = {
  title: "shared/Input",
  component: Input,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Light: Story = {
  args: {
    placeholder: "Placeholder",
    value: "Value",
    autofocus: true,
    onChange: () => {},
    type: "text",
    label: "Label",
    id: "1",
  },
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    placeholder: "Placeholder",
    value: "Value",
    autofocus: true,
    onChange: () => {},
    type: "text",
    label: "Label",
    id: "1",
  },
};
