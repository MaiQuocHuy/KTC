import React from "react";

const SearchFilter: React.FC<{
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  items: string[];
}> = ({ handleChangeSearch, search, items }) => {
  return (
    <section className="bg-gray-100 p-4 rounded-md">
      {/* Search filter */}
      <input
        type="text"
        onChange={handleChangeSearch}
        value={search}
        className="border border-gray-300 p-2 rounded-md"
      />
      <div className="flex flex-col gap-2 mt-2">
        {items
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div
              key={item}
              className="border border-gray-300 p-2 rounded-md bg-white"
            >
              {item}
            </div>
          ))}
      </div>
    </section>
  );
};

export default SearchFilter;
