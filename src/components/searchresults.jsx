"use client";
import React from 'react';
import { useSearch } from '@/context/searchstate';

const SearchResults = () => {
  const { filteredMissas } = useSearch();

  return (
    <div>
      {filteredMissas.length > 0 ? (
        <ul>
          {filteredMissas.map((missa, index) => (
            <li key={index}>
              {missa.local} - {missa.zona} - {missa.horario_time} - {missa.dia_semana} - {missa.turno} - {missa.bairro}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma horário encontradao.</p>
      )}
    </div>
  );
};

export default SearchResults;