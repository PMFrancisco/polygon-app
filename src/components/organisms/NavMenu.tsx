import React, { useState } from "react";
import { MenuButton } from "../molecules/buttons/MenuButton";

export const NavMenu: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("Home");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="hidden lg:flex space-x-1">
      {["Home", "Descubrir", "Favoritos"].map((buttonName) => (
        <MenuButton
          key={buttonName}
          onClick={() => handleButtonClick(buttonName)}
          isSelected={selectedButton === buttonName}
        >
          {buttonName}
        </MenuButton>
      ))}
    </div>
  );
};
