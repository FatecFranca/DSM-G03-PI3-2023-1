import React from 'react';
import * as style from './consultas_vet.styled';

function ConsultaList_vet() {
  const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

  // Get the current date and time
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0); // Set the time to midnight

  // Filter the consultas array to get only the dates that are due to today
  const todayConsultas = consultas.filter((consulta) => {
    const consultaDate = new Date(consulta.data);
    consultaDate.setHours(0, 0, 0, 0); // Set the time to midnight

    return consultaDate.getTime() === currentDate.getTime();
  });

  return (
    <style.ContainerAll>
      <style.TableContainer>
        <style.Table>
          <style.HeaderRow>
            <style.Cell>Data</style.Cell>
            <style.Cell>Servico</style.Cell>
            <style.Cell>Veterinário</style.Cell>
            <style.Cell>Hora</style.Cell>
          </style.HeaderRow>

          {todayConsultas.map((consulta, index) => (
            <style.Row key={index}>
              <style.Cell>{new Date(consulta.data).toLocaleDateString('pt-BR')}</style.Cell>
              <style.Cell>{consulta.servico}</style.Cell>
              <style.Cell>{consulta.veterinario}</style.Cell>
              <style.Cell>{consulta.hora}</style.Cell>
            </style.Row>
          ))}
        </style.Table>
      </style.TableContainer>
    </style.ContainerAll>
  );
}

export default ConsultaList_vet;
