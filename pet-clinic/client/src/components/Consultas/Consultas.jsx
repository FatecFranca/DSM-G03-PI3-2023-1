import React from "react";
import { useEffect, useState } from "react";
import * as style from "./consultas.styled";
import http from "../../db/http";

function ConsultaList(props) {
  const [consultasData, setConsultasData] = useState([]);

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

          setConsultasData(response.data);
          console.log(response);
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

  return (
    <style.TableContainer>
      <style.Table>
        <style.HeaderRow>
          <style.Cell>Data</style.Cell>
          <style.Cell>Servico</style.Cell>
          <style.Cell>Veterinário</style.Cell>
          <style.Cell>Hora</style.Cell>
        </style.HeaderRow>

        {/* {consultasData.map(consulta => (
          <style.Row key={consulta._id}>
            <style.Cell>{new Date(consulta.date_time).toLocaleDateString('pt-BR')}</style.Cell>
            <style.Cell>{consulta.motivo}</style.Cell>
            <style.Cell>{consulta.vet_id}</style.Cell>
            <style.Cell>{consulta.pet_id}</style.Cell>
          </style.Row>
        ))} */}
      </style.Table>
    </style.TableContainer>
  );
}

export default ConsultaList;
