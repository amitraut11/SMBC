// stories/LoginCardInput.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

const LoginCardInput: React.FC<{ placeholder: string; backgroundColor: string; borderColor: string; textColor: string }> = ({
  placeholder,
  backgroundColor,
  borderColor,
  textColor,
}) => (
  <input
    style={{
      backgroundColor,
      borderColor,
      color: textColor,
      padding: '5px',
      borderRadius: '5px',
      borderWidth: '1px',
      width: '150px',
    }}
    placeholder={placeholder}
  />
);

const meta: Meta<typeof LoginCardInput> = {
  title: 'Components/Input/LoginCardInput',
  component: LoginCardInput,
  argTypes: {
    placeholder: { control: 'text', defaultValue: 'Enter username' },
    backgroundColor: { control: 'color', defaultValue: '#fff' },
    borderColor: { control: 'color', defaultValue: '#ccc' },
    textColor: { control: 'color', defaultValue: '#000' },
  },
};

export default meta;

export const Default: StoryObj<typeof LoginCardInput> = {
  args: {
    placeholder: 'Enter username',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    textColor: '#000',
  },
};
