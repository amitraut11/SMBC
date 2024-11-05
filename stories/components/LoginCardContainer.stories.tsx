import React, { ReactNode } from 'react';
import { Meta, StoryObj } from '@storybook/react';

// Include `children` in the prop type definition
interface LoginCardContainerProps {
  backgroundColor: string;
  width: string;
  padding: string;
  children?: ReactNode; // Allow children to be optional
}

const LoginCardContainer: React.FC<LoginCardContainerProps> = ({
  backgroundColor,
  width,
  padding,
  children, // Destructure the children prop
}) => (
  <div style={{ backgroundColor, width, padding, borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
    {children} {/* Render the children here */}
  </div>
);

const meta: Meta<typeof LoginCardContainer> = {
  title: 'Components/LoginCardContainer',
  component: LoginCardContainer,
  argTypes: {
    backgroundColor: { control: 'color', defaultValue: '#333' },
    width: { control: 'text', defaultValue: '300px' },
    padding: { control: 'text', defaultValue: '20px' },
  },
};

export default meta;

export const Default: StoryObj<typeof LoginCardContainer> = {
  args: {
    backgroundColor: '#333',
    width: '300px',
    padding: '20px',
    children: 'Login Form Content', // Example child content
  },
};
