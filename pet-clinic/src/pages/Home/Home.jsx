import React from 'react';
import ButtonPet from '../../components/ButtonPet/buttonPet';
import BtnNovaConsulta from '../../components/BtnNovaConsulta/btnNovaConsulta'
import AnimalList from '../../components/CardAnimal/cardAnimal';
import ConsultaList from '../../components/Consultas/consultas';
import './Home.css';

export default function Home() {
  return (
    <>
      <div class="home">
        <div class="home__card">
          <AnimalList />
        </div>
        <div class="home__consultas">
          <ConsultaList />
        </div>
        <div class="home__buttons">      
          <ButtonPet />
          <BtnNovaConsulta />
        </div>
      </div>
      
    </>
  )
}
