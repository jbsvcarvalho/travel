import type { Meta, StoryObj } from "@storybook/react";
import { PiShoppingCartSimpleFill } from "react-icons/pi";


import ButtonCart from "./components/buttons/buttonCart";

const meta = {
  title: "Button/Cart",
  component: ButtonCart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
} satisfies Meta<typeof ButtonCart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 9,
    icon: PiShoppingCartSimpleFill,
  },
};
