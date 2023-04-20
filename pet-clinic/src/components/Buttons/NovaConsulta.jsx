import React, { useState } from 'react';
import { ButtonNew, Popup, Form, Label, Input, Select, Option, Button } from './buttons.styled';

const NovaConsulta = () => {

  const [open, setOpen] = useState(false);
  const [data, setdata] = useState('');
  const [servico, setServico] = useState('');
  const [veterinario, setVeterinario] = useState('');
  const [hora, setHora] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const novaConsulta = {
      data: data,
      servico: servico,
      veterinario: veterinario,
      hora: hora,
    };
    const consultas = JSON.parse(localStorage.getItem('consultas') || '[]');
    consultas.push(novaConsulta);
    localStorage.setItem('consultas', JSON.stringify(consultas));
    handleClose();
  };


  return (
    <>
      <ButtonNew onClick={handleClick}>Nova Consulta</ButtonNew>
      {open && (
        <Popup>
          <h1>Nova Consulta</h1>
          <Form>
            <Label htmlFor="data">Data</Label>
            <Input type="date" id="data" value={data} onChange={(e) => setdata(e.target.value)} />
            <Label htmlFor="servico">Servico</Label>
            <Select id="servico" value={servico} onChange={(e) => setServico(e.target.value)}>
              <Option value="">Selecione uma opção</Option>
              <Option value="banhoTosa">Banho & Tosa</Option>
              <Option value="banho">Banho</Option>
              <Option value="consultaRotina">Consulta de Rotina</Option>
              <Option value="consultaEmergencia">Consulta de Emergencia</Option>
              <Option value="vacinacao">Vacina</Option>
            </Select>
            <Label htmlFor="veterinario">Veterinario</Label>
            <Select id="veterinario" value={veterinario} onChange={(e) => setVeterinario(e.target.value)}>
              <Option value="">Selecione uma opção</Option>
              <Option value="oswaldoPeixoto">Dr. Oswaldo Peixoto</Option>
              <Option value="pauloCoelho">Dr. Paulo Coelho</Option>
              <Option value="anaSilva">Dra. Ana Silva</Option>
            </Select>
            <Label htmlFor="hora">Hora</Label>
            <Input type="time" id="hora" value={hora} onChange={(e) => setHora(e.target.value)} />
          </Form>
          <Button onClick={handleSubmit}>Adicionar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovaConsulta;
