import React, { useState } from 'react';
import * as style from './clienteList.styled';

const clienteData = JSON.parse(localStorage.getItem('users_db')) || [];

function ClienteList() {
  const [selectedCliente, setSelectedCliente] = useState(null);
  
  function handleClienteClick(users_db) {
    setSelectedCliente(users_db);
  }

  return (
    <style.Animal>
      <style.AnimalList>
        {clienteData.map(users_db => (
          <style.AnimalListItem>
            <style.AnimalListInput type="radio" id={users_db.email} name="animais" value={users_db.email} onChange={() => handleClienteClick(users_db)} />
            <style.AnimalListLabel htmlFor={users_db.email}>{users_db.email}</style.AnimalListLabel>
          </style.AnimalListItem>
        ))}
      </style.AnimalList>
      {selectedCliente && (
        <ClienteCard users_db={selectedCliente} />
      )}
    </style.Animal>
  );
}

function ClienteCard({ users_db }) {
  return (
    <style.CardAnimal>
        <style.CardAnimalInicial>
            <img src="../src/assets/pataDog.png" alt="pata animal" />
            <h2>{users_db.email}</h2>    
        </style.CardAnimalInicial>
        <style.CardAnimalInfos>
          <style.CardAnimalTitle>
            Informações:   
            <a>Editar</a>
          </style.CardAnimalTitle>
          <style.CardAnimalInfoList>
            <style.CardAnimalInfoItem><strong>Email:</strong> {users_db.email}</style.CardAnimalInfoItem>
            <style.CardAnimalInfoItem><strong>Senha:</strong> {users_db.password}</style.CardAnimalInfoItem>
          </style.CardAnimalInfoList>
        </style.CardAnimalInfos>
    </style.CardAnimal>
  );
}

export default ClienteList;
