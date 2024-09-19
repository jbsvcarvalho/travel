import type { Meta, StoryObj } from "@storybook/react";
import FilterList from "./components/filters/filterList";
import { IoHomeOutline } from "react-icons/io5";

const meta = {
  title: "Filter/List",
  component: FilterList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FilterList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [{ id: 1, icon: IoHomeOutline, text: "casa", number: 12 }],
  },
};
