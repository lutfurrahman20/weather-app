import React from 'react';

interface Props {
  city: string;
  setCity: (value: string) => void;
  handleSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ city, setCity, handleSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex gap-3">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter city name"
        className="px-4 py-2 rounded border border-gray-300 text-black focus:outline-none"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-blue-600 dark:bg-indigo-600 dark:hover:bg-cyan-500 text-white rounded hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
