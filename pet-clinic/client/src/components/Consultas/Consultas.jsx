import React from "react";
import { useEffect, useState } from "react";
import * as style from "./consultas.styled";
import http from "../../db/http";

function ConsultaList(props) {
  const [consultasData, setConsultasData] = useState([]);
  const [petsData, setPetsData] = useState([]);
  const [vetsName, setVetsName] = useState([]);

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

          const res = response.data.response;

          setConsultasData(response.data.response);

          // const vets = [];

          // response.data.response.map(async (consulta, index) => {
          //   await getNameVet(consulta.vet_id).then(
          //     (res) => (vets[index] = res)
          //   );
          // });
          // setVetsName(vets);
          // console.log(vets);

          const vetsPromises = response.data.response.map((consulta) =>
            getNameVet(consulta.vet_id)
          );
          const vets = await Promise.all(vetsPromises);
          setVetsName(vets);
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

  const getNameVet = async (vet_id) => {
    const token = localStorage.getItem("token_API");
    try {
      const { data } = await http.get(`/cliente/vet/${vet_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data.response.nome;
    } catch (error) {
      console.error(error);
      // Lógica para lidar com o erro da requisição
    }
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

        {consultasData.map((consulta, index) => {
          return (
            <style.Row key={consulta._id}>
              <style.Cell>{formatDateTime(consulta.date_time)}</style.Cell>
              <style.Cell>{consulta.motivo}</style.Cell>
              <style.Cell>{`Dr. ${vetsName[index]}`}</style.Cell>
              <style.Cell>{props.petName}</style.Cell>
            </style.Row>
          );
        })}
      </style.Table>
    </style.TableContainer>
  );
}

export default ConsultaList;
