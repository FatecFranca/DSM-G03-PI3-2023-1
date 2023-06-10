import React, { useEffect, useState } from 'react';
import { ButtonNew, Popup, Title, Form, Label, Input, Select, Option, Button } from './buttons.styled';
import { toast } from 'react-toastify';
import http from '../../db/http';

const NovaConsulta = () => {

  const [open, setOpen] = useState(false);
  const [data, setData] = useState('');
  const [motivo, setMotivo] = useState('');
  const [veterinario, setVeterinario] = useState(null);
  const [veterinarios, setVeterinarios] = useState([]);
  const [pet, setPet] = useState(null);
  const [petsData, setPetsData] = useState([]);

  // GET veterinarios para mostrar nas options 
  useEffect(() => {
    const fetchVeterinarios = async () => {
      try {
        const token = localStorage.getItem('token_API');

        if (token) {
          const response = await http.get('/cliente/vet', {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });

          setVeterinarios(response.data.vets);
        } else {
          // Lógica para lidar com a ausência do token
        }
      } catch (error) {
        console.error(error);
        // Lógica para lidar com o erro da requisição
      }
    };

    fetchVeterinarios();
  }, []);

  //GET pets para mostrar nas options
  useEffect(() => {
    const fetchPetsData = async () => {
      try {
        const token = localStorage.getItem('token_API');

        if (token) {
          const response = await http.get('/pet', {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          });

          setPetsData(response.data);
        } else {
          // Lógica para lidar com a ausência do token
        }
      } catch (error) {
        console.error(error);
        // Lógica para lidar com o erro da requisição
      }
    };

    fetchPetsData();
  }, []);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const novaConsulta = {
      date_time: data,
      motivo: motivo,
      vet_id: veterinario ? veterinario._id : null,
      pet_id: pet ? pet._id : null,
      user: "cliente",
    };
    try {
      const token = localStorage.getItem('token_API');
  
      if (token) {
        const response = await http.post('/consulta', novaConsulta, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(response.data);
        handleClose();
        toast.success('Consulta agendada com sucesso!');

        // Recarregar a página após um pequeno atraso
        setTimeout(() => {
          window.location.reload();
        }, 2000); // Tempo em milissegundos antes de recarregar a página
    
      } else {
        // Lógica para lidar com a ausência do token
        toast.warn("Acesso negado!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Houve um erro e a consulta nao foi agendada!");
      // Lógica para lidar com o erro da requisição
    }
  };


  return (
    <>
      <ButtonNew onClick={handleClick}>Nova Consulta</ButtonNew>
      {open && (
        <Popup>
          <Title>Nova Consulta</Title>
          <Form>
            <Label htmlFor="data">Data</Label>
            <Input type="datetime-local" id="data" value={data} onChange={(e) => setData(e.target.value)} />
            <Label htmlFor="motivo">Motivo</Label>
            <Select id="motivo" value={motivo} onChange={(e) => setMotivo(e.target.value)}>
              <Option value="">Selecione uma opção</Option>
              <Option value="Banho & Tosa">Banho & Tosa</Option>
              <Option value="Banho">Banho</Option>
              <Option value="Consulta de Rotina">Consulta de Rotina</Option>
              <Option value="Consulta de Emergencia">Consulta de Emergencia</Option>
              <Option value="Vacina">Vacina</Option>
            </Select>
            <Label htmlFor="veterinario">Veterinário</Label>
            <Select
              id="veterinario"
              value={veterinario ? veterinario._id : ''}
              onChange={(e) => {
                const selectedVeterinario = veterinarios.find(vet => vet._id === e.target.value);
                setVeterinario(selectedVeterinario);
              }}
            >
              <Option value="">Selecione uma opção</Option>
              {veterinarios.map((vet) => (
                <Option key={vet._id} value={vet._id}>{vet.nome}</Option>
              ))}
            </Select>
            <Label htmlFor="pet">Pet</Label>
            <Select
              id="pet"
              value={pet ? pet._id : ''}
              onChange={(e) => {
                const selectedPet = petsData.find(pet => pet._id === e.target.value);
                setPet(selectedPet);
              }}
            >
              <Option value="">Selecione uma opção</Option>
              {petsData.map((pet) => (
                <Option key={pet._id} value={pet._id}>{pet.nome}</Option>
              ))}
            </Select>
          </Form>
          <Button onClick={handleSubmit}>Adicionar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovaConsulta;
