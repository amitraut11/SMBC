import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "src/components/Button";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Button",
  component: Button,
  tags: ["docsPage"],
  argTypes: {
    label: {
      control: { type: "text" },
    },
    onClick: {
      action: "clicked",
    },
    color: {
      control: { type: "color" },
    },
    size: {
      control: { type: "radio" },
      options: ["small", "large"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args:https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Hello Button",
    color: "#ff5722",
    size: "large",
  },
};
