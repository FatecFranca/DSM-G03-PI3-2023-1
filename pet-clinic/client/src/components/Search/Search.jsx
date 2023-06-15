import React, { useState } from 'react';
import * as style from './search.styled';

const SearchComponent = ({ onSelectOption, setData }) => {
  const [searchOption, setSearchOption] = useState('Date');

  const handleSearchOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSearchOption(event.target.value);
    onSelectOption(selectedValue);
    setData({ searchOption: selectedValue, data: event.target.value });
  };

  return (
    <>
      <style.Container>
        <select value={searchOption} onChange={handleSearchOptionChange}>
          <option value="Date">Date</option>
          {/* Implementar filtro por PET no Futuro */}
          {/* <option value="Pet">Pet</option> */}
        </select>
        <input
          type={searchOption === 'Date' ? 'date' : 'text'}
          placeholder={
            searchOption === 'Date'
              ? 'Procure pela data'
              : 'Procure pelo nome do Pet'
          }
        />
        <button>Pesquisar</button>
      </style.Container>
    </>
  );
};

export default SearchComponent;