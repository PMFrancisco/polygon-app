import { SearchProvider } from "../../context/SearchContext";
import { NavBar } from "../organisms/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <SearchProvider>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow mx-10">
          <Outlet />
        </div>
      </div>
    </SearchProvider>
  );
};
