import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import ButtonScore from "./components/buttons/buttonScore";

const meta = {
  title: "Button/Store",
  component: ButtonScore,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ButtonScore>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    number: 3.2,
    score: "Excellent",
    review: "234"
  },
};
