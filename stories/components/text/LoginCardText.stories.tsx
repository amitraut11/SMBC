// stories/LoginCardText.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import LoginCardText from './LoginCardText'; // Ensure this path is correct

const meta: Meta<typeof LoginCardText> = {
  title: 'Components/Text/LoginCardText',
  component: LoginCardText,
  argTypes: {
    text: { control: 'text', defaultValue: 'Please log in.' },
    textColor: { control: 'color', defaultValue: '#000' }, // Change default color to black
    fontSize: { control: 'text', defaultValue: '14px' },
  },
};

export default meta;

export const Default: StoryObj<typeof LoginCardText> = {
  args: {
    text: 'Please log in.',
    textColor: '#000', // Change to black for the Default story
    fontSize: '14px',
  },
};
