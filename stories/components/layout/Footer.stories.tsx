import type { Meta, StoryObj } from '@storybook/react';
import Footer from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Layout/Footer',
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    email: 'info@xyzbank.com',
    year: 2024,
    backgroundColor: '#3b82f6', // Default background color
    textColor: 'white', // Default text color
  },
};

// Example of a custom variant
export const CustomFooter: Story = {
  args: {
    email: 'support@xyzbank.com',
    year: 2024,
    backgroundColor: '#1d4ed8', // Custom background color
    textColor: 'yellow', // Custom text color
  },
};
