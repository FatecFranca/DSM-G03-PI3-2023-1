import React from 'react';
import NovoVet from '../../components/Buttons/NovoVet';
import ClienteList from '../../components/CardClientes/ClienteList';
import ConsultaList from '../../components/Consultas/Consultas';
import { AdminCard, AdminConsultas, AdminButtons} from './admin.styled';
import  Cabecalho from '../../components/Header/Header'

export default function Admin() {
  return (
    <>
      <Cabecalho name="Pedro Neves"/>
      <AdminCard>
        <AdminConsultas>
          <ConsultaList />
        </AdminConsultas>
        <AdminButtons>      
          <NovoVet />
        </AdminButtons>
      </AdminCard>
      
    </>
  )
}
