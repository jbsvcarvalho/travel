import type { Meta, StoryObj } from "@storybook/react";
import FilterPrice from "./components/filters/filterPrice";

const meta = {
  title: "Filter/Price",
  component: FilterPrice,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    border: { control: "text" },
  },
} satisfies Meta<typeof FilterPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [{ id: 1, labelOne: 2, labelTwo: 145 }],
  },
};
