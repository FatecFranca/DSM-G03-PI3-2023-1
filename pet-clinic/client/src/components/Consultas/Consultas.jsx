import React from "react";
import { useEffect, useState } from "react";
import * as style from "./consultas.styled";
import http from "../../db/http";

function ConsultaList(props) {
  const [consultasData, setConsultasData] = useState([]);
  const [petsData, setPetsData] = useState([]);

  const pet_id = props.petId;

  // Buscando consultas na API
  useEffect(() => {
    const fetchConsultaData = async () => {
      try {
        const token = localStorage.getItem("token_API");

        if (token) {
          const response = await http.get(`/consulta/cliente/${pet_id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setConsultasData(response.data.response);
        } else {
          // Lógica para lidar com a ausência do token
        }
      } catch (error) {
        console.error(error);
        // Lógica para lidar com o erro da requisição
      }
    };

    fetchConsultaData();
  }, [props.setPetId, props.petId]);

  // // Função para obter o nome do pet com base no ID
  // const getPetName = (petId) => {
  //   const pet = petsData.find((pet) => pet._id === petId);
  //   return pet ? pet.nome : "";
  // };
  //GET pets para mostrar nas options
  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const token = localStorage.getItem("token_API");

        if (token) {
          const response = await http.get(`/pet/${pet_id}`, {
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
  }, [props.setPetId, props.petId]);

  // // Função para obter o nome do veterinário com base no ID
  // const getVetName = (vetId) => {
  //   const vet = vetsData.find((vet) => vet._id === vetId);
  //   return vet ? vet.nome : "";
  // };

  // Função para formatar a data e hora no formato desejado
  const formatDateTime = (dateTime) => {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateTime).toLocaleString("pt-BR", options);
  };

  return (
    <style.TableContainer>
      <style.Table>
        <style.HeaderRow>
          <style.Cell>Data</style.Cell>
          <style.Cell>Serviço</style.Cell>
          <style.Cell>Veterinário</style.Cell>
          <style.Cell>Pet</style.Cell>
        </style.HeaderRow>

        {consultasData.map((consulta) => (
          <style.Row key={consulta.pet_id}>
            <style.Cell>{formatDateTime(consulta.date_time)}</style.Cell>
            <style.Cell>{consulta.motivo}</style.Cell>
            <style.Cell>{consulta.vet_id}</style.Cell>
            <style.Cell>{props.petName}</style.Cell>
          </style.Row>
        ))}
      </style.Table>
    </style.TableContainer>
  );
}

export default ConsultaList;
