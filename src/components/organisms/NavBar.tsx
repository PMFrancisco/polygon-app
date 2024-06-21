import { AnonUser } from "../atoms/AnonUser";
import { SearchBar } from "../molecules/SearchBar";

export const NavBar = () => {
  return (
    <div className="flex bg-black h-20">
      <img className="p-5" src="\images\polygonLogo.png" alt="an infinity symbol made with hexagons in color purple, followed by the name of the app, polygon" />
      <SearchBar />
      <AnonUser />
    </div>
  );
};
