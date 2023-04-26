import React from 'react';
import NovoPet from '../../components/Buttons/NovoPet';
import NovaConsulta from '../../components/Buttons/NovaConsulta'
import AnimalList from '../../components/CardAnimal/CardAnimal';
import ConsultaList from '../../components/Consultas/Consultas';
import { ClienteCard, ClienteConsultas, ClienteButtons} from './cliente.styled';
import  Cabecalho from '../../components/Header/Header'

export default function Cliente() {
  return (
    <>
      <Cabecalho name="Pedro Neves"/>
      <ClienteCard>
        <AnimalList />
        <ClienteConsultas>
          <ConsultaList />
        </ClienteConsultas>
        <ClienteButtons>      
          <NovoPet />
          <NovaConsulta />
        </ClienteButtons>
      </ClienteCard>
      
    </>
  )
}
