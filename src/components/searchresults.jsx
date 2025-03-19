"use client";
import React from 'react';
import { useSearch } from '@/context/searchstate';

const SearchResults = () => {
  const { filteredMissas } = useSearch();

  return (
    <div className='layout'>
      {filteredMissas.length > 0 ? (
        <ul>
          {filteredMissas.map((missa, index) => (
            <li key={index}>
              {missa.local} - {missa.zona} - {missa.horario_time} - {missa.dia_semana} - {missa.turno} - {missa.bairro}
            </li>
          ))}
        </ul>
      ) : (
        <p>Pesquise uma igreja.</p>
      )}
    </div>
  );
};

export default SearchResults;