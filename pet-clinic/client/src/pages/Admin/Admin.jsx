import React from 'react';
import NovoVet from '../../components/Buttons/NovoVet';
import NovoServico from '../../components/Buttons/NovoServico';
import { Container, AdminButtons} from './admin.styled';
import  CabecalhoAdmin from '../../components/Header/Header_admin'
import CardClientes from '../../components/CardClientes/CardClientes';
import CardVeterinarios from '../../components/CardVeterinarios/CardVeterinarios';

export default function Admin() {
  return (
    <>
      <CabecalhoAdmin name="Admin"/>
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
