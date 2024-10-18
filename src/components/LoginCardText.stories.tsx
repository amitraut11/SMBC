// src/components/LoginCardText.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const LoginCardText: React.FC<{ text: string; textColor: string; fontSize: string }> = ({ text, textColor, fontSize }) => (
  <h2 style={{ color: textColor, fontSize }}>
    {text}
  </h2>
);

const meta: Meta<typeof LoginCardText> = {
  title: 'Components/LoginCardText',
  component: LoginCardText,
  argTypes: {
    text: { control: 'text', defaultValue: 'Please log in.' },
    textColor: { control: 'color', defaultValue: '#fff' },
    fontSize: { control: 'text', defaultValue: '14px' },
  },
};

export default meta;

export const Default: StoryObj<typeof LoginCardText> = {
  args: {
    text: 'Please log in.',
    textColor: '#fff',
    fontSize: '14px',
  },
};
