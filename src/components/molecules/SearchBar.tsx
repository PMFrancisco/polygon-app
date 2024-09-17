import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useSearch } from "../../context/SearchContext";

export const SearchBar: React.FC = () => {
  const { query, setQuery } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="hidden md:flex items-center justify-center p-4 w-full">
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="border rounded-full w-full px-4 py-2 bg-[#1C141E] text-sm text-white pl-10"
          placeholder="Buscar por canción, disco o cuenta."
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
};
