import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/layout/Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;
6
export const Default: Story = {
  args: {
    onTabClick: (tab: string) => console.log(`Tab clicked: ${tab}`),
    backgroundColor: '#3b82f6', // Default background color
    textColor: 'white', // Default text color
  },
};

// Example of a custom variant
export const CustomHeader: Story = {
  args: {
    onTabClick: (tab: string) => console.log(`Tab clicked: ${tab}`),
    backgroundColor: '#1d4ed8', // Custom background color
    textColor: 'yellow', // Custom text color
  },
};
