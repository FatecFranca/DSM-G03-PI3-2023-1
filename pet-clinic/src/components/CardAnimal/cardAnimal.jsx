import React, { useState } from 'react';
import * as style from './cardAnimal.styled';

const animalData = [
  { id: 1, name: 'Rex', species: 'Cachorro', raca: 'Pitbull', idade: '10', sexo: 'Macho' },
  { id: 2, name: 'Simba', species: 'Gato', raca: 'Vira-lata', idade: '3', sexo: 'Macho' },
  { id: 3, name: 'Pituca', species: 'Cachorro', raca: 'Fox Paulistinha', idade: '2', sexo: 'Fêmea' },
  { id: 4, name: 'Kyara', species: 'Cachorro', raca: 'Fox Paulistinha', idade: '11', sexo: 'Fêmea' },
];

function AnimalList() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  function handleAnimalClick(animal) {
    setSelectedAnimal(animal);
  }

  return (
    <style.Animal>
      <style.AnimalList>
        {animalData.map(animal => (
          <style.AnimalListItem>
            <style.AnimalListInput type="radio" id={animal.name} name="animais" value={animal.name} onChange={() => handleAnimalClick(animal)} />
            <style.AnimalListLabel for={animal.name}>{animal.name}</style.AnimalListLabel>
          </style.AnimalListItem>
        ))}
      </style.AnimalList>
      {selectedAnimal && (
        <AnimalCard animal={selectedAnimal} />
      )}
    </style.Animal>
  );
}

export default AnimalList;

function AnimalCard({ animal }) {
  return (
    <style.CardAnimal>
        <style.CardAnimalInicial>
            <img src="../src/assets/pataDog.png" alt="pata animal" />
            <h2>{animal.name}</h2>    
        </style.CardAnimalInicial>
        <style.CardAnimalInfos>
          <style.CardAnimalTitle>
            Informações:   
            <a>Editar</a>
          </style.CardAnimalTitle>
          <style.CardAnimalInfoList>
            <style.CardAnimalInfoItem><strong>Espécie:</strong> {animal.species}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Raça:</strong> {animal.raca}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Idade:</strong> {animal.idade}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Sexo:</strong> {animal.sexo}</style.CardAnimalInfoItem>
          </style.CardAnimalInfoList>
        </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}