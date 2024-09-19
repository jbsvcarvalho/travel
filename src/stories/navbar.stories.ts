import type { Meta, StoryObj } from "@storybook/react";
import Navbar from "./components/navbar/navbar";

import icon from '../assets/Logo.png'

const meta = {
  title: "NavBar/Navbar",
  component: Navbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    start: "",
    end: ""
  },
};
