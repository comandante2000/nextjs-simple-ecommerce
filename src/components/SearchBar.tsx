"use client";

import React from 'react';

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={search}
      onChange={(e) => onSearchChange(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded w-full"
    />
  );
};

export default SearchBar;
