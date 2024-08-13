"use client";

import React from 'react';

interface SortSelectProps {
  sort: string;
  onSortChange: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ sort, onSortChange }) => {
  return (
    <select
      value={sort}
      onChange={(e) => onSortChange(e.target.value)}
      className="mb-4 p-2 border border-gray-300 rounded w-full"
    >
      <option value="price">Sort by Price</option>
      <option value="rating">Sort by Rating</option>
    </select>
  );
};

export default SortSelect;
