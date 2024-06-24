import React, { useState } from "react";
import { MenuButton } from "../molecules/buttons/MenuButton";

export const HighlightsMenu: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("Music");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex space-x-1">
      {["Music", "Collectibles", "Utility"].map((buttonName) => (
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
