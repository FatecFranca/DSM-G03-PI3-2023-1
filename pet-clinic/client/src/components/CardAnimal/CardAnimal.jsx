import React, { useEffect, useState } from "react";
import * as style from "./cardAnimal.styled";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import http from "../../db/http";
import ConsultaList from "../Consultas/Consultas";

function AnimalList(props) {
  const [petsData, setPetsData] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // Buscando pets na API
  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const token = localStorage.getItem("token_API");

        if (token) {
          const response = await http.get("/pet", {
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
    props.setPetId(pets?._id);
    props.setPetName(pets?.nome);
  }

  return (
    <style.Animal>
      <style.AnimalList>
        {petsData.map((pets) => (
          <style.AnimalListItem key={pets._id}>
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
          </style.AnimalListItem>
        ))}
      </style.AnimalList>
      {selectedAnimal && <AnimalCard pets={selectedAnimal} />}
    </style.Animal>
  );
}

function AnimalCard({ pets }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPet, setEditedPet] = useState({ ...pets });

  const handleEditClick = async () => {
    try {
      const token = localStorage.getItem("token_API");

      if (token) {
        if (isEditing) {
          // Lógica para salvar as alterações do pet
          const response = await http.put(`/pet/${editedPet._id}`, editedPet, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          // Lógica para lidar com a resposta da API

          setIsEditing(false); // Sai do modo de edição após salvar
        } else {
          setIsEditing(true); // Entra no modo de edição ao clicar no botão Editar
        }
      } else {
        // Lógica para lidar com a ausência do token
      }
    } catch (error) {
      console.error(error);
      // Lógica para lidar com o erro da requisição
    }
  };

  const handleInputChange = (e) => {
    setEditedPet((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleDeleteClick = async () => {
    try {
      const token = localStorage.getItem("token_API");

      if (token) {
        // Exemplo de requisição DELETE para deletar o pet
        const response = await http.delete(`/pet/${pets._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(response.data);

        // Lógica para lidar com a resposta da API
        toast.success("Pet deletado com sucesso!");

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
            <span onClick={handleDeleteClick}>
              <DeleteIcon />
            </span>
            <span onClick={handleEditClick}>
              <EditIcon />
            </span>
          </div>
        </style.CardAnimalTitle>
        <style.CardAnimalInfoList>
          <style.CardAnimalInfoItem>
            <strong>Espécie:</strong> {pets.especie}
          </style.CardAnimalInfoItem>
          <style.CardAnimalInfoItem>
            <strong>Raça:</strong> {pets.raca}
          </style.CardAnimalInfoItem>
          {isEditing ? (
            <style.InputEdit
              type="text"
              name="idade"
              placeholder="Nova idade"
              // value={editedPet.idade}
              onChange={handleInputChange}
            />
          ) : (
            <style.CardAnimalInfoItem>
              <strong>Idade:</strong> {editedPet.idade} anos
            </style.CardAnimalInfoItem>
          )}
          <style.CardAnimalInfoItem>
            <strong>Sexo:</strong> {pets.sexo}
          </style.CardAnimalInfoItem>
          {isEditing ? (
            <style.InputEdit
              type="text"
              name="peso"
              placeholder="Novo peso"
              // value={editedPet.peso}
              onChange={handleInputChange}
            />
          ) : (
            <style.CardAnimalInfoItem>
              <strong>Peso:</strong> {editedPet.peso} kg
            </style.CardAnimalInfoItem>
          )}
        </style.CardAnimalInfoList>
      </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}

export default AnimalList;
