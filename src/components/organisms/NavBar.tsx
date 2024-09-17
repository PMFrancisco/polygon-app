import { SearchBar } from "../molecules/SearchBar";
import { UploadButton } from "../molecules/buttons/UploadButton";
import { AvatarMenu } from "./AvatarMenu";
import { NavMenu } from "./NavMenu";

export const NavBar: React.FC = () => {
  return (
    <div className="mx-10 flex justify-between items-center h-20">
      <img className="py-5 h-full brightness-50" src="\images\playButton.png" alt="an infinity symbol made with hexagons in color purple, followed by the name of the app, polygon" />
      <SearchBar />
      <NavMenu />
      <UploadButton />
      <AvatarMenu />
    </div>
  );
};
