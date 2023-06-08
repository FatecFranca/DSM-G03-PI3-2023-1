import React, { useState, useEffect } from 'react';
import NovoPet from '../../components/Buttons/NovoPet';
import NovaConsulta from '../../components/Buttons/NovaConsulta';
import ConsultaList_vet from '../../components/Consultas_vet/Consultas_vet';
import { ClienteCard, ClienteConsultas, ClienteButtons} from './veterinario.styled';
import  Cabecalho_veterinario from '../../components/Header/Header_veterinario';
import SearchComponent from '../../components/Search/Search';
import AnimalList_vet from '../../components/CardAnimal_vet/CardAnimal_vet';
import http from '../../db/http';

export default function Veterinario() {
  const [selectedOption, setSelectedOption] = useState('Date');
  const [nomeVeterinario, setNomeVeterinario] = useState('');

  useEffect(() => {

    const fetchVeterinario = async () => {

      try{
        const token = localStorage.getItem('token_API');
        const response = await http.get('/vet', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
  
        // 
        console.log('Response:', response)
        setNomeVeterinario(response.data.response.nome)
  
      } catch(error){
        console.log(error)
      }

    }

    fetchVeterinario()

  }, []);

  return (
    <>
      <Cabecalho_veterinario name={nomeVeterinario}/>
      <ClienteCard> 
    
        <ClienteConsultas>
          <SearchComponent onSelectOption={setSelectedOption}  />
          {selectedOption === 'Date' ? (
            <ConsultaList_vet />
          ) : (
            <AnimalList_vet />
          )}
        </ClienteConsultas>

        <ClienteButtons>      
          <NovoPet />
          <NovaConsulta />
        </ClienteButtons>
        
      </ClienteCard>
    </>
  )
}
