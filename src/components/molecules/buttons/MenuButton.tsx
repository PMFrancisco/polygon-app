import React from "react";
import { Button } from "../../atoms/Button";

interface MenuButtonProps {
  onClick: () => void;
  isSelected: boolean;
  children: React.ReactNode;
}

export const MenuButton: React.FC<MenuButtonProps> = ({
  onClick,
  isSelected,
  children,
}) => (
  <Button
    onClick={onClick}
    className={`px-6 py-2 ${
      isSelected ? "bg-[#54399f85] text-[#D0C0FF]" : "text-white"
    }`}
  >
    {children}
  </Button>
);
