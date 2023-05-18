import React, { useState } from 'react';
import NovoPet from '../../components/Buttons/NovoPet';
import NovaConsulta from '../../components/Buttons/NovaConsulta';
import ConsultaList_vet from '../../components/Consultas_vet/Consultas_vet';
import { ClienteCard, ClienteConsultas, ClienteButtons} from './veterinario.styled';
import  Cabecalho_veterinario from '../../components/Header/Header_veterinario';
import SearchComponent from '../../components/Search/Search';
import AnimalList_vet from '../../components/CardAnimal_vet/CardAnimal_vet';

export default function Cliente() {
  const [selectedOption, setSelectedOption] = useState('Date');

  return (
    <>
      <Cabecalho_veterinario name="Cássio"/>
      <ClienteCard>
        <ClienteButtons>      
          <NovoPet />
          <NovaConsulta />
        </ClienteButtons>
        <ClienteConsultas>
          <SearchComponent onSelectOption={setSearchInput}  />
          {selectedOption === 'Date' ? (
            <ConsultaList_vet />
          ) : (
            <AnimalList_vet />
          )}
        </ClienteConsultas>
      </ClienteCard>
    </>
  )
}
