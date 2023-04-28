import React from 'react';
import NovoPet from '../../components/Buttons/NovoPet';
import NovaConsulta from '../../components/Buttons/NovaConsulta'
import ClienteList from '../../components/CardClientes/ClienteList';
import ConsultaList from '../../components/Consultas/Consultas';
import { AdminCard, AdminConsultas, AdminButtons} from './admin.styled';
import  Cabecalho from '../../components/Header/Header'

export default function Admin() {
  return (
    <>
      <Cabecalho name="Pedro Neves"/>
      <AdminCard>
        <ClienteList />
        <AdminConsultas>
          <ConsultaList />
        </AdminConsultas>
        <AdminButtons>      
          <NovoPet />
          <NovaConsulta />
        </AdminButtons>
      </AdminCard>
      
    </>
  )
}
