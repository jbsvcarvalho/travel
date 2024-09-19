import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import FilterCheckboxGroup from "./components/filters/filterCheckboxGroup";

const meta = {
  title: "Filter/Check",
  component: FilterCheckboxGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FilterCheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { id: "1", label: "Opção 1" },
      { id: "2", label: "Opção 2" },
      { id: "3", label: "Opção 3" },
    ],
    checkedItems: [],
    onChange: () => {},
  },
};
