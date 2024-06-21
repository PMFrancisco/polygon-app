import React from 'react';

interface MenuButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const UserMenuButton: React.FC<MenuButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
  >
    {children}
  </button>
);
