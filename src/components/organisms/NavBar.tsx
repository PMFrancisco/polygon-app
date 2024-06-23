import { SearchBar } from "../molecules/SearchBar";
import { UploadButton } from "../molecules/buttons/UploadButton";
import { AvatarMenu } from "./AvatarMenu";
import { NavMenu } from "./NavMenu";

export const NavBar: React.FC = () => {
  return (
    <div className="flex items-center h-20">
      <img className="p-5" src="\images\polygonLogo.png" alt="an infinity symbol made with hexagons in color purple, followed by the name of the app, polygon" />
      <SearchBar />
      <NavMenu />
      <UploadButton />
      <AvatarMenu />
    </div>
  );
};
