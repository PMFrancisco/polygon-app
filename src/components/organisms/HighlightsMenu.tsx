import { useState } from "react";
import { MenuButton } from "../molecules/buttons/MenuButton";

export const HighlightsMenu: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState("Canción");

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="flex space-x-1">
      {["Canción", "Discos"].map((buttonName) => (
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
