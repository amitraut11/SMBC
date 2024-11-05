// stories/LoginCardText.tsx
import React from 'react';

interface LoginCardTextProps {
  text: string;
  textColor: string;
  fontSize: string;
}

const LoginCardText: React.FC<LoginCardTextProps> = ({ text, textColor, fontSize }) => {
  return (
    <h2 style={{ color: textColor, fontSize }}>
      {text}
    </h2>
  );
};

export default LoginCardText;
