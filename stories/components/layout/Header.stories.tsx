// stories/components/layout/Header.stories.tsx

import { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

const meta: Meta<typeof Header> = {
  title: 'Components/Layout/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    onTabClick: (tab: string) => console.log(`Tab clicked: ${tab}`),
    backgroundColor: '#3b82f6', // Default background color
    textColor: 'white', // Default text color
  },
};

export const CustomHeader: Story = {
  args: {
    onTabClick: (tab: string) => console.log(`Tab clicked: ${tab}`),
    backgroundColor: '#1d4ed8', // Custom background color
    textColor: 'yellow', // Custom text color
  },
};
