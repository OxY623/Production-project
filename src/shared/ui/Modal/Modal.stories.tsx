import type {Meta, StoryObj} from "@storybook/react";
import {Modal} from "./Modal";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import {Theme} from "app/providers/ThemeProviders/ui/ThemeContext";

const meta: Meta<typeof Modal> = {
  title: "shared/Modal",
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Light: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum, odit dolorem quis dolores porro laborum, velit perspiciatis voluptate a perferendis repellat! Saepe similique, qui nemo labore deserunt cupiditate! Libero.",
    isOpen: true,
  },
};

export const Dark: Story = {
  parameters: {theme: Theme.DARK},
  decorators: [ThemeDecorator],
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eum, odit dolorem quis dolores porro laborum, velit perspiciatis voluptate a perferendis repellat! Saepe similique, qui nemo labore deserunt cupiditate! Libero.",
    isOpen: true,
  },
};
