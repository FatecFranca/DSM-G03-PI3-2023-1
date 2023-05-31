import React from 'react';
import NovoVet from '../../components/Buttons/NovoVet';
import NovoServico from '../../components/Buttons/NovoServico';
import { Container, AdminButtons} from './admin.styled';
import  Cabecalho from '../../components/Header/Header'
import CardClientes from '../../components/CardClientes/CardClientes';
import CardVeterinarios from '../../components/CardVeterinarios/CardVeterinarios';

export default function Admin() {
  return (
    <>
      <Cabecalho name="Admin"/>
      <Container>
      <AdminButtons>
      <CardClientes />
        <CardVeterinarios />
      </AdminButtons>  
        <AdminButtons>  
          <NovoServico />    
          <NovoVet />
        </AdminButtons>
      </Container>
      
    </>
  )
}
