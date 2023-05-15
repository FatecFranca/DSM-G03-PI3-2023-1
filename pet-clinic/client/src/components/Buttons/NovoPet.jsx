import React, { useState } from 'react';
import { ButtonNew, Popup, Title, Form, Label, Input, Select, Option, Button } from './buttons.styled';

const NovoPet = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [especie, setEspecie] = useState('');
  const [raca, setRaca] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');

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
    };

  try {
    const response = await axios.post('/pets', novoPet);
    console.log(response.data);
    // Faça o que precisar com a resposta da API
  } catch (error) {
    console.error(error);
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
          </Form>
          <Button onClick={handleSubmit}>Adicionar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovoPet;
