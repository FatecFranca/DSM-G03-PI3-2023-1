import React, { useState } from 'react';
import * as style from './cardAnimal.styled';

const animalData = JSON.parse(localStorage.getItem('pets')) || [];

function AnimalList() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  
  function handleAnimalClick(pets) {
    setSelectedAnimal(pets);
  }

  return (
    <style.Animal>
      <style.AnimalList>
        {animalData.map(pets => (
          <style.AnimalListItem>
            <style.AnimalListInput type="radio" id={pets.nome} name="animais" value={pets.nome} onChange={() => handleAnimalClick(pets)} />
            <style.AnimalListLabel htmlFor={pets.nome}>{pets.nome}</style.AnimalListLabel>
          </style.AnimalListItem>
        ))}
      </style.AnimalList>
      {selectedAnimal && (
        <AnimalCard pets={selectedAnimal} />
      )}
    </style.Animal>
  );
}

function AnimalCard({ pets }) {
  return (
    <style.CardAnimal>
        <style.CardAnimalInicial>
            <img src="../src/assets/pataDog.png" alt="pata animal" />
            <h2>{pets.nome}</h2>    
        </style.CardAnimalInicial>
        <style.CardAnimalInfos>
          <style.CardAnimalTitle>
            Informações:   
            <a>Editar</a>
          </style.CardAnimalTitle>
          <style.CardAnimalInfoList>
            <style.CardAnimalInfoItem><strong>Espécie:</strong> {pets.especie}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Raça:</strong> {pets.raca}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Idade:</strong> {pets.idade}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Sexo:</strong> {pets.sexo}</style.CardAnimalInfoItem>
          </style.CardAnimalInfoList>
        </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}

export default AnimalList;
