import type { Meta, StoryObj } from "@storybook/react";
import FilterProgress from "./components/filters/filterProgress";

const meta = {
  title: "Filter/Progress",
  component: FilterProgress,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FilterProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [{ percentage: 9, label: "Bom", number: 234 }],
  },
};
