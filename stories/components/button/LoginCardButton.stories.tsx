// stories/LoginCardButton.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";

// Define the component
export const LoginCardButton: React.FC<{
  backgroundColor: string;
  textColor: string;
  label: string;
}> = ({ backgroundColor, textColor, label }) => (
  <button
    style={{
      backgroundColor,
      color: textColor,
      padding: "5px 10px",
      borderRadius: "5px",
    }}
  >
    {label}
  </button>
);

// Meta configuration
const meta: Meta<typeof LoginCardButton> = {
  title: "Components/Button/LoginCardButton",
  component: LoginCardButton,
  argTypes: {
    backgroundColor: { control: "color", defaultValue: "#28a745" },
    textColor: { control: "color", defaultValue: "#fff" },
    label: { control: "text", defaultValue: "Go" },
  },
};

export default meta;

// Default story with order property set to 0
export const Default: StoryObj<typeof LoginCardButton> = {
  args: {
    backgroundColor: "#28a745",
    textColor: "#fff",
    label: "Go",
  },
};

// Add the order property to ensure it's the first story
Default.parameters = {
  order: 0, // Set the order to 0 to make it first
};
