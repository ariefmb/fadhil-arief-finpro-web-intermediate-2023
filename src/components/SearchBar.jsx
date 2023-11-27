// SearchBar.js
import React, { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <form>
      <label
        for="default-search"
        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
          id="default-search"
          value={searchTerm}
          class="block w-full p-4 ps-10 text-sm   rounded-lg   bg-[#181818]  placeholder-gray-400 text-white "
          placeholder="Search Your Movies..."
        />
      </div>
    </form>
  );
};

export default SearchBar;
