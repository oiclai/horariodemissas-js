"use client";

import React from 'react';
import { useSearch } from '../context/searchstate';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar por igreja, zona, horário, dia, turno ou bairro."
      />
    </div>
  );
};

export default SearchBar;