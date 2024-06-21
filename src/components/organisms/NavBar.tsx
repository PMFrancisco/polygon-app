import { SearchBar } from "../molecules/SearchBar";
import { AvatarMenu } from "./AvatarMenu";

export const NavBar = () => {
  return (
    <div className="flex items-center bg-black h-20">
      <img className="p-5" src="\images\polygonLogo.png" alt="an infinity symbol made with hexagons in color purple, followed by the name of the app, polygon" />
      <SearchBar />
      <AvatarMenu />
    </div>
  );
};
