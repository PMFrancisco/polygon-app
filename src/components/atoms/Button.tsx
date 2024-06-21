import React from 'react';

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, className = '', children }) => (
  <button onClick={onClick} className={`focus:outline-none ${className}`}>
    {children}
  </button>
);
