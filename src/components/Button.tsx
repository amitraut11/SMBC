import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
  color: string;
  size: "small" | "large";
};

export const Button = ({ label, onClick, color, size }: ButtonProps) => {
  const buttonStyle = {
    backgroundColor: color,
    padding: size === "large" ? "12px 24px" : "8px 16px",
    fontSize: size === "large" ? "16px" : "14px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "#fff",
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};
