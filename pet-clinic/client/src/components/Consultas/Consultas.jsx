import React from 'react';
import * as style from './consultas.styled';

function ConsultaList() {
  const consultas = JSON.parse(localStorage.getItem('consultas')) || [];

  return (
    <style.TableContainer>
      <style.Table>
          <style.HeaderRow>
            <style.Cell>Data</style.Cell>
            <style.Cell>Servico</style.Cell>
            <style.Cell>Veterinário</style.Cell>
            <style.Cell>Hora</style.Cell>
          </style.HeaderRow>
        
        {consultas.map((consulta, index) => (
          <style.Row key={index}>
            <style.Cell>{new Date(consulta.data).toLocaleDateString('pt-BR')}</style.Cell>
            <style.Cell>{consulta.servico}</style.Cell>
            <style.Cell>{consulta.veterinario}</style.Cell>
            <style.Cell>{consulta.hora}</style.Cell>
          </style.Row>
        ))}
      
      </style.Table>
    </style.TableContainer>

  );
}

export default ConsultaList;
