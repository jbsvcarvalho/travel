import type { Meta, StoryObj } from "@storybook/react";
import { IoArrowForward } from "react-icons/io5";


import ButtonCuston from "./components/buttons/buttonCustom";

const meta = {
  title: "Button/Custom",
  component: ButtonCuston,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonCuston>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Saber mais",
    icon: IoArrowForward
  },
};
