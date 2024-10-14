import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "src/components/footer";

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta = {
  title: "Example/Footer",
  component: Footer,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args:https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: "Hello Card Title",
    description: "This is a card",
  },
};
