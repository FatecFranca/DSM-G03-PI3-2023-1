import React, { useState, useEffect } from "react";
import NovoPet from "../../components/Buttons/NovoPet";
import NovaConsulta from "../../components/Buttons/NovaConsulta";
import ConsultaList_vet from "../../components/Consultas_vet/Consultas_vet";
import {
  ClienteCard,
  ClienteConsultas,
  ClienteButtons,
  Align,
} from "./veterinario.styled";
import Cabecalho_veterinario from "../../components/Header/Header_veterinario";
import SearchComponent from "../../components/Search/Search";
import AnimalList_vet from "../../components/CardAnimal_vet/CardAnimal_vet";
import http from "../../db/http";

export default function Veterinario() {
  const [selectedOption, setSelectedOption] = useState("Date");
  const [nomeVeterinario, setNomeVeterinario] = useState("");
  const [data, setData] = useState(formatDate());

  function formatDate() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const fetchVeterinario = async () => {
      try {
        const token = localStorage.getItem("token_API");
        const response = await http.get("/vet", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        //
        console.log("Response nome veterinário:", response);
        setNomeVeterinario(response.data.response.nome);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVeterinario();
  }, []);

  return (
    <>
      <Cabecalho_veterinario name={nomeVeterinario} />
      <ClienteCard>
        {/* <ClienteButtons> */}
        {/* Implementar criar novo pet no futuro */}
        {/* <NovoPet /> */}
        {/* <NovaConsulta /> */}
        {/* </ClienteButtons> */}
        {/* <ClienteConsultas> */}
        {/* <SearchComponent
            onSelectOption={setSelectedOption}
            setData={setData}
          /> */}
        {/* <ClienteButtons> */}
        {/* Implementar criar novo pet no futuro */}
        {/* <NovoPet /> */}
        {/* <NovaConsulta /> */}
        {/* </ClienteButtons> */}
        <ClienteConsultas>
          {/* //           <SearchComponent
//             onSelectOption={setSelectedOption}
//             setData={setData}
          /> */}
          <Align>
            {/* Implementar filtro por PET no futuro*/}
            {/* {selectedOption === 'Date' ? (
              <ConsultaList_vet />
            ) : (
              <AnimalList_vet />
            )} */}

            <ConsultaList_vet data={data} />
          </Align>
        </ClienteConsultas>
      </ClienteCard>
    </>
  );
}
