// stories/LoginCard.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import LoginCard from "./LoginCard";
import "./LoginCard.css"; // Ensure this import is present

const meta: Meta<typeof LoginCard> = {
  title: "Components/Card/LoginCard",
  component: LoginCard,
};

export default meta;

type Story = StoryObj<typeof LoginCard>;

export const Default: Story = {
  args: {
    handleLogin: (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log("Login submitted");
    },
  },
};
