import React from 'react';
import NovoPet from '../../components/Buttons/NovoPet';
import NovaConsulta from '../../components/Buttons/NovaConsulta'
import AnimalList from '../../components/CardAnimal/cardAnimal';
import ConsultaList from '../../components/Consultas/consultas';
import { HomeCard, HomeConsultas, HomeButtons} from './home.styled';

export default function Home() {
  return (
    <>
      <HomeCard>
        <AnimalList />
        <HomeConsultas>
          <ConsultaList />
        </HomeConsultas>
        <HomeButtons>      
          <NovoPet />
          <NovaConsulta />
        </HomeButtons>
      </HomeCard>
      
    </>
  )
}
