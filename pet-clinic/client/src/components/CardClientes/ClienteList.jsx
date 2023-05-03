import React, { useState } from 'react';
import * as style from './clienteList.styled';

const clienteData = JSON.parse(localStorage.getItem('clientes')) || [];

function ClienteList() {
  const [selectedCliente, setSelectedCliente] = useState(null);
  
  function handleClienteClick(clientes) {
    setSelectedCliente(clientes);
  }

  return (
    <style.Animal>
      <style.AnimalList>
        {clienteData.map(clientes => (
          <style.AnimalListItem>
            <style.AnimalListInput type="radio" id={clientes.email} name="clientes" value={clientes.email} onChange={() => handleClienteClick(clientes)} />
            <style.AnimalListLabel htmlFor={clientes.email}>{clientes.email}</style.AnimalListLabel>
          </style.AnimalListItem>
        ))}
      </style.AnimalList>
      {selectedCliente && (
        <ClienteCard clientes={selectedCliente} />
      )}
    </style.Animal>
  );
}

function ClienteCard({ clientes }) {
  return (
    <style.CardAnimal>
        <style.CardAnimalInicial>
            <img src="../src/assets/pataDog.png" alt="pata animal" />
            <h2>{clientes.email}</h2>    
        </style.CardAnimalInicial>
        <style.CardAnimalInfos>
          <style.CardAnimalTitle>
            Informações:   
            <a>Editar</a>
          </style.CardAnimalTitle>
          <style.CardAnimalInfoList>
            <style.CardAnimalInfoItem><strong>Email:</strong> {clientes.email}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Senha:</strong> {clientes.password}</style.CardAnimalInfoItem>
          </style.CardAnimalInfoList>
        </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}

export default ClienteList;
