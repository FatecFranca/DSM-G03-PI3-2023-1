import React from 'react';
import { useEffect, useState } from 'react';
import NovoPet from '../../components/Buttons/NovoPet';
import NovaConsulta from '../../components/Buttons/NovaConsulta';
import AnimalList from '../../components/CardAnimal/CardAnimal';
import ConsultaList from '../../components/Consultas/Consultas';
import { ClienteCard, ClienteConsultas, ClienteButtons} from './cliente.styled';
import  CabecalhoCliente from '../../components/Header/Header_cliente';


export default function Cliente() {

  // URL 
  const baseURL = 'http://localhost:3333/api';

  // API functions
  const [nomeCliente, setNomeCliente] = useState('');

  useEffect(() => {

    const token = localStorage.getItem('token_API');

    if (token) {
      // Fazer uma requisição para obter os dados do cliente
      fetch(`${baseURL}/cliente`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(response => response.json())
      .then(data => {
        setNomeCliente(data.response.nome);
      })
      .catch(error => {
        console.error('Erro ao obter os dados do cliente:', error);
      });
    }
  }, []);

  return (
    <>
      <CabecalhoCliente name={nomeCliente}/>
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
