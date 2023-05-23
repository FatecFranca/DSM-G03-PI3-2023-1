import React, { useState } from 'react';
import * as style from './cardAnimal_vet.styled';

import pataDog from '../../assets/pataDog.png';
import pesquisar from '../../assets/pesquisar.png';
import add from '../../assets/add.png';

const animalData = JSON.parse(localStorage.getItem('pets')) || [];

function AnimalList_vet() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  function handleAnimalClick(pets) {
    setSelectedAnimal(pets);
  }

  // Sort the animalData array by name
  const sortedAnimalData = animalData.sort((a, b) => a.nome.localeCompare(b.nome));

  return (
    <>
      <style.Animal>
        <style.ContainerAll>
          <style.TableContainer>
            <style.Table>
              <style.HeaderRow>
                <style.Cell>Nome</style.Cell>
                <style.Cell>Histórico</style.Cell>
                <style.Cell>Nova Consulta</style.Cell>
              </style.HeaderRow>

              {sortedAnimalData.map((pets, index) => (
                <style.Row key={index}>
                  <style.Cell>
                    <style.AnimalListInput
                      type="radio"
                      id={pets.nome}
                      name="animais"
                      value={pets.nome}
                      onChange={() => handleAnimalClick(pets)}
                    />
                    <style.AnimalListLabel htmlFor={pets.nome}>
                      {pets.nome}
                    </style.AnimalListLabel>
                  </style.Cell>
                  <style.Cell>
                    <img src={pesquisar} alt="pesquisar" />
                  </style.Cell>
                  <style.Cell>
                    <img src={add} alt="add" />
                  </style.Cell>
                </style.Row>
              ))}
            </style.Table>
          </style.TableContainer>
        </style.ContainerAll>
      </style.Animal>

      <style.AnimalInfo>
        {selectedAnimal && <AnimalCard pets={selectedAnimal} />}
      </style.AnimalInfo>
    </>
  );
}

function AnimalCard({ pets }) {
  return (
    <style.CardAnimal>
      <style.CardAnimalInicial>
        <img src={pataDog} alt="pata animal" />
        <h2>{pets.nome}</h2>
      </style.CardAnimalInicial>
      <style.CardAnimalInfos>
        <style.CardAnimalTitle>
          Informações:
          <a>Editar</a>
        </style.CardAnimalTitle>
        <style.CardAnimalInfoList>
          <style.CardAnimalInfoItem>
            <strong>Espécie:</strong> {pets.especie}
          </style.CardAnimalInfoItem>
          <style.CardAnimalInfoItem>
            <strong>Raça:</strong> {pets.raca}
          </style.CardAnimalInfoItem>
          <style.CardAnimalInfoItem>
            <strong>Idade:</strong> {pets.idade}
          </style.CardAnimalInfoItem>
          <style.CardAnimalInfoItem>
            <strong>Sexo:</strong> {pets.sexo}
          </style.CardAnimalInfoItem>
        </style.CardAnimalInfoList>
      </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}

export default AnimalList_vet;
