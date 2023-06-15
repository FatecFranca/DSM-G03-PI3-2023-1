import React, { useState, useEffect } from "react";
import axios from "axios";
import * as style from "./consultas_vet.styled";

import {
  CardUsers,
  CardEmailVet,
  CardButton,
  CardMapVet,
  CardCrmv,
  ButtonNewAdmin,
  LabelMap,
  CardUsersEmail,
  PopupAdmin,
  TitleAdmin,
  LabelAdmin,
  ButtonAdmin,
  CardAdmin,
} from "../Buttons/buttons.styled";

import http from "../../db/http";

function ConsultaList_vet(props) {
  const [consultas, setConsultas] = useState([]);

  const CardConsulta = ({ consulta }) => {
    return (
      <CardAdmin>
        <CardUsersEmail>
          <CardUsers>
            <LabelAdmin>{consulta.date_time} </LabelAdmin>
          </CardUsers>
          <CardEmailVet>
            <LabelAdmin>{consulta.date_time} </LabelAdmin>
          </CardEmailVet>
          <CardCrmv>
            <LabelAdmin>{consulta.pet_id} </LabelAdmin>
          </CardCrmv>
          <CardCrmv>
            <LabelAdmin>{consulta.motivo} </LabelAdmin>
          </CardCrmv>
        </CardUsersEmail>
      </CardAdmin>
    );
  };

  function getCurrentDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }
    return day + "/" + month + "/" + year;
  }

  //  Buscando consultas na API

  useEffect(() => {
    fetchConsultas();
    const intervalId = setInterval(fetchConsultas, 90000);

    return () => {
      clearInterval(intervalId);
    };
  }, [props.data]);

  const fetchConsultas = async () => {
    try {
      const token = localStorage.getItem("token_API");
      const date = getCurrentDate();
      console.log(date);

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const body = {
        date: date,
      };

      const response = await http.get(`/consulta/vet/${date}`, {
        headers,
      });

      setConsultas(response.data.response);
      console.log("Response Data:", response.data.response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <style.ContainerAll>
      <style.TableContainer>
        <style.Table>
          <style.HeaderRow>
            <style.Cell>Data</style.Cell>
            <style.Cell>Hora</style.Cell>
            <style.Cell>Pet</style.Cell>
            <style.Cell>Motivo</style.Cell>
          </style.HeaderRow>
          {Array.isArray(consultas) ? (
            consultas.map((consulta) => (
              <CardConsulta key={consulta._id} consulta={consulta} />
            ))
          ) : (
            <p>Nenhuma consulta encontrada.</p>
          )}
        </style.Table>
      </style.TableContainer>
    </style.ContainerAll>
  );
}

export default ConsultaList_vet;
