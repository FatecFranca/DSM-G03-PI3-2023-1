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
    window.location.reload();
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
              <Option value="Banho & Tosa">Banho & Tosa</Option>
              <Option value="Banho">Banho</Option>
              <Option value="Consulta de Rotina">Consulta de Rotina</Option>
              <Option value="Consulta de Emergencia">Consulta de Emergencia</Option>
              <Option value="Vacina">Vacina</Option>
            </Select>
            <Label htmlFor="veterinario">Veterinario</Label>
            <Select id="veterinario" value={veterinario} onChange={(e) => setVeterinario(e.target.value)}>
              <Option value="">Selecione uma opção</Option>
              <Option value="Dr. Oswaldo Peixoto">Dr. Oswaldo Peixoto</Option>
              <Option value="Dr. Paulo Coelho">Dr. Paulo Coelho</Option>
              <Option value="Dra. Ana Silva">Dra. Ana Silva</Option>
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
