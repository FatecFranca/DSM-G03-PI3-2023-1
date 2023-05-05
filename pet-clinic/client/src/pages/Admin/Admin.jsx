import React from 'react';
import NovoVet from '../../components/Buttons/NovoVet';
import NovoServico from '../../components/Buttons/NovoServico';
import ClienteList from '../../components/CardClientes/ClienteList';
import { Container, Title, AdminButtons} from './admin.styled';
import  Cabecalho from '../../components/Header/Header'

export default function Admin() {
  return (
    <>
      <Cabecalho name="Pedro Neves"/>
      <Container>
        <Title>Clientes:</Title>
        <AdminButtons>  
          <NovoServico />    
          <NovoVet />
        </AdminButtons>
      </Container>
      
    </>
  )
}
