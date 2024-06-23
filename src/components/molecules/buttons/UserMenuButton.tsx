import React from 'react';
import { Button } from '../../atoms/Button';

interface MenuButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const UserMenuButton: React.FC<MenuButtonProps> = ({ onClick, children }) => (
  <Button
    onClick={onClick}
    className="block p-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-center"
  >
    {children}
  </Button>
);
