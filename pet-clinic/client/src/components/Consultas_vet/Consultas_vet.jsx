import React, { useState, useEffect } from "react";

import * as style from "./consultas_vet.styled";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import UploadExame from "../InputUploadExame/UploadExame";

import {
  CardDataVet,
  CardHoraVetVet,
  CardPetVet,
  CardMotivoVet,
  LabelVet,
  CardVet,
  LabelTitleVet,
  TableContainer,
  Upload,
} from "../Buttons/buttons.styled";

import http from "../../db/http";

function ConsultaList_vet(props) {
  const [consultas, setConsultas] = useState([]);
  const [modalUpload, setModalUpload] = useState(false);
  const [consulta_id, setConsulta_id] = useState();

  const handleChangeConsulta_id = (value) => {
    setConsulta_id(value);
    setModalUpload(true);
  };

  const CardConsulta = ({ consulta }) => {
    return (
      <>
        <CardVet>
          <CardDataVet>
            <LabelVet>{consulta.date_time} </LabelVet>
          </CardDataVet>
          <CardHoraVetVet>
            <LabelVet>{consulta.date_time} </LabelVet>
          </CardHoraVetVet>
          <CardPetVet>
            <LabelVet>{consulta.pet_id} </LabelVet>
          </CardPetVet>
          <CardMotivoVet>
            <LabelVet>{consulta.motivo} </LabelVet>
          </CardMotivoVet>
          <Upload>
            <span onClick={() => handleChangeConsulta_id(consulta._id)}>
              <FileDownloadIcon />
            </span>
          </Upload>
        </CardVet>
      </>
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
    <style.TableContainer>
      <TableContainer>
        <LabelTitleVet>CONFIRA SUAS CONSULTAS DO DIA</LabelTitleVet>
        <style.Table>
          <style.HeaderRow>
            <style.Cell>Data</style.Cell>
            <style.Cell>Hora</style.Cell>
            <style.Cell>Pet</style.Cell>
            <style.Cell>Motivo</style.Cell>
            <style.Cell>Upload Exames</style.Cell>
          </style.HeaderRow>
          {Array.isArray(consultas) ? (
            consultas.map((consulta) => (
              <CardConsulta key={consulta._id} consulta={consulta} />
            ))
          ) : (
            <p>Nenhuma consulta encontrada.</p>
          )}
        </style.Table>
      </TableContainer>
      <UploadExame
        isOpen={modalUpload}
        consulta_id={consulta_id}
        setIsOpen={setModalUpload}
      />
    </style.TableContainer>
  );
}

export default ConsultaList_vet;
