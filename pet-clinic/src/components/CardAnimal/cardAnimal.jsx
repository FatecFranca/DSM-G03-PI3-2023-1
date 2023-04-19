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
    <div class="animal">
      <ul class="animal__ul">
        {animalData.map(animal => (
          <li>
            <input type="radio" id={animal.name} name="animais" value={animal.name} onChange={() => handleAnimalClick(animal)} />
            <label for={animal.name}>{animal.name}</label>
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
        <div class="card-animal__infos">
          <div class="card-animal__titulo">
            Informações:   
            <a>Editar</a>
          </div>
          <ul>
            <li><strong>Espécie:</strong> {animal.species}</li>
            <li><strong>Raça:</strong> {animal.raca}</li>
            <li><strong>Idade:</strong> {animal.idade}</li>
            <li><strong>Sexo:</strong> {animal.sexo}</li>
          </ul>
        </div>
    </div>
  );
}