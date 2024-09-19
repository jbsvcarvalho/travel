import type { Meta, StoryObj } from "@storybook/react";
import FilterProperty from "./components/filters/filterProperty";

const meta = {
  title: "Filter/Property",
  component: FilterProperty,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FilterProperty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [{ id: 1, labelOne: 5, labelTwo: 145 }],
  },
};
