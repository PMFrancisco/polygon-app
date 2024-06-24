import React from "react";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  type?: string
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className = "",
  children,
}) => (
  <button onClick={onClick} className={`focus:outline-none rounded-full ${className}`}>
    {children}
  </button>
);
