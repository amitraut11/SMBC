// src/components/LoginCardButton.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const LoginCardButton: React.FC<{ backgroundColor: string; textColor: string; label: string }> = ({
  backgroundColor,
  textColor,
  label,
}) => (
  <button style={{ backgroundColor, color: textColor, padding: '5px 10px', borderRadius: '5px' }}>
    {label}
  </button>
);

const meta: Meta<typeof LoginCardButton> = {
  title: 'Components/LoginCardButton',
  component: LoginCardButton,
  argTypes: {
    backgroundColor: { control: 'color', defaultValue: '#28a745' },
    textColor: { control: 'color', defaultValue: '#fff' },
    label: { control: 'text', defaultValue: 'Go' },
  },
};

export default meta;

export const Default: StoryObj<typeof LoginCardButton> = {
  args: {
    backgroundColor: '#28a745',
    textColor: '#fff',
    label: 'Go',
  },
};
