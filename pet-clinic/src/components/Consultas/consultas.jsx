import React from 'react';
import './consultas.css';

function ConsultaList() {
  const consultas = [
    {
      data: '12/04/2023',
      motivo: 'Consulta de rotina',
      veterinario: 'Dr. Oswaldo Peixoto',
      hora: '14:00',
      local: 'PetClinic - Franca',
    },
    {
      data: '15/05/2023',
      motivo: 'Avaliação de cirurgia',
      veterinario: 'Dr. Paulo Coelho',
      hora: '10:30',
      local: 'Clínica Vet Center',
    },
    {
      data: '27/06/2023',
      motivo: 'Vacinação',
      veterinario: 'Dra. Ana Silva',
      hora: '16:45',
      local: 'Pet Shop Avenida',
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Motivo</th>
          <th>Veterinário Responsável</th>
          <th>Hora</th>
          <th>Local</th>
        </tr>
      </thead>
      <tbody>
        {consultas.map((consulta, index) => (
          <tr key={index}>
            <td>{consulta.data}</td>
            <td>{consulta.motivo}</td>
            <td>{consulta.veterinario}</td>
            <td>{consulta.hora}</td>
            <td>{consulta.local}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ConsultaList;
