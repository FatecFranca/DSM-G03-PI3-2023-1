import React, { useEffect, useState } from 'react';
import * as style from './cardAnimal.styled';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';
import http from '../../db/http';

function AnimalList() {
  const [petsData, setPetsData] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Buscando pets na API
  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const token = localStorage.getItem('token_API');

        if (token) {
          const response = await http.get('/pet', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setPetsData(response.data);
        } else {
          // Lógica para lidar com a ausência do token
        }
      } catch (error) {
        console.error(error);
        // Lógica para lidar com o erro da requisição
      }
    };

    fetchPetsData();
  }, []);
  
  function handleAnimalClick(pets) {
    setSelectedAnimal(pets);
  }

  return (
    <style.Animal>
      <style.AnimalList>
        {petsData.map(pets => (
          <style.AnimalListItem key={pets._id}>
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

  const handleEditClick = async () => {
    try {
      const token = localStorage.getItem('token_API');
  
      if (token) {
        // Lógica para abrir um formulário de edição com os dados do pet
  
        // Exemplo de requisição PUT para atualizar os dados do pet
        const response = await http.put(`/pet/${pets.id}`, { /* dados atualizados do pet */ }, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(response.data);
        // Lógica para lidar com a resposta da API
      } else {
        // Lógica para lidar com a ausência do token
      }
    } catch (error) {
      console.error(error);
      // Lógica para lidar com o erro da requisição
    }
  };
  
  const handleDeleteClick = async () => {
    try {
      const token = localStorage.getItem('token_API');
  
      if (token) {
        // Exemplo de requisição DELETE para deletar o pet
        const response = await http.delete(`/pet/${pets._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(response.data);
        
        // Lógica para lidar com a resposta da API
        toast.success('Pet deletado com sucesso!');

        // Recarregar a página após um pequeno atraso
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Tempo em milissegundos antes de recarregar a página
      } else {
        // Lógica para lidar com a ausência do token
      }
    } catch (error) {
      console.error(error);
      // Lógica para lidar com o erro da requisição
    }
  };

  return (
    <style.CardAnimal>
        <style.CardAnimalInicial>
            <img src="../src/assets/pataDog.png" alt="pata animal" />
            <h2>{pets.nome}</h2>    
        </style.CardAnimalInicial>
        <style.CardAnimalInfos>
          <style.CardAnimalTitle>
            Informações:
            <div>
            <span onClick={handleDeleteClick}><DeleteIcon /></span>
            <span onClick={handleEditClick}><EditIcon /></span>
            </div>   
          </style.CardAnimalTitle>
          <style.CardAnimalInfoList>
            <style.CardAnimalInfoItem><strong>Espécie:</strong> {pets.especie}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Raça:</strong> {pets.raca}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Idade:</strong> {pets.idade}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Sexo:</strong> {pets.sexo}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Peso:</strong> {pets.peso} kg</style.CardAnimalInfoItem>
          </style.CardAnimalInfoList>
        </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}

export default AnimalList;
