import React, { useState } from 'react';
import { ButtonNew, Popup, Title, Form, Label, Input, Select, Option, Button } from './buttons.styled';
import { toast } from 'react-toastify';
import http from '../../db/http';

const NovoPet = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [peso, setPeso] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const novoPet = {
      nome: nome,
      especie: especie,
      raca: raca,
      idade: idade,
      sexo: sexo,
      peso: peso,
    };

    try {
      const token = localStorage.getItem('token_API');
  
      if (token) {
        const response = await http.post('/pet', novoPet, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log(response.data);
        handleClose();
        toast.success('Pet adicionado com sucesso!');

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
      toast.error("Houve um erro e o pet nao foi adicionado!");
      // Lógica para lidar com o erro da requisição
    }
};

  return (
    <>
      <ButtonNew onClick={handleClick}>Novo Pet</ButtonNew>
      {open && (
        <Popup>
          <Title>Novo Pet</Title>
          <Form>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Label htmlFor="especie">Especie</Label>
            <Select id="especie" value={especie} onChange={(e) => setEspecie(e.target.value)}>
              <Option value="">Selecione uma opção</Option>
              <Option value="Cachorro">Cachorro</Option>
              <Option value="Gato">Gato</Option>
              <Option value="Passaro">Pássaro</Option>
              <Option value="Outros">Outros</Option>
            </Select>
            <Label htmlFor="raca">Raça</Label>
            <Input type="text" id="raca" value={raca} onChange={(e) => setRaca(e.target.value)} />
            <Label htmlFor="idade">Idade</Label>
            <Input type="text" id="idade" value={idade} onChange={(e) => setIdade(e.target.value)} />
            <Label htmlFor="sexo">Sexo</Label>
            <Select id="sexo" value={sexo} onChange={(e) => setSexo(e.target.value)}>
              <Option value="">Selecione uma opção</Option>
              <Option value="Macho">Macho</Option>
              <Option value="Fêmea">Fêmea</Option>
            </Select>
            <Label htmlFor="peso">Peso (kg)</Label>
            <Input type="text" id="pseo" value={peso} onChange={(e) => setPeso(e.target.value)} />
          </Form>
          <Button onClick={handleSubmit}>Adicionar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovoPet;
