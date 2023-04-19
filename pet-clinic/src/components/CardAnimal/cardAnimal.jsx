import React, { useState } from 'react';
import './cardAnimal.css';

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
    <div>
      <ul class="animal">
        {animalData.map(animal => (
          <li class="animal-list" key={animal.id} onClick={() => handleAnimalClick(animal)}>
            {animal.name}
          </li>
        ))}
      </ul>
      {selectedAnimal && (
        <AnimalCard animal={selectedAnimal} />
      )}
    </div>
  );
}

export default AnimalList;

function AnimalCard({ animal }) {
  return (
    <div class="card-animal">
        <div class="card-animal__inicial">
            <img src="../src/assets/pataDog.png" alt="pata animal" />
            <h2>{animal.name}</h2>    
        </div>
        <ul class="card-animal__infos">
            <li>Espécie: {animal.species}</li>
            <li>Raça: {animal.raca}</li>
            <li>Idade: {animal.idade}</li>
            <li>Sexo: {animal.sexo}</li>
        </ul>
    </div>
  );
}