import React, { useState } from 'react';
import { ButtonNew, Popup, Title, Form, Label, Input, Button } from './buttons.styled';


const NovoServico = () => {
  const [open, setOpen] = useState(false);
  const [desc, setDesc] = useState('');
  const [valor, setValor] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const novoServico = {
      desc: desc,
      valor: valor,
    };
    const servicos = JSON.parse(localStorage.getItem('servicos') || '[]');
    servicos.push(novoServico);
    localStorage.setItem('servicos', JSON.stringify(servicos));
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <ButtonNew onClick={handleClick}>Novo Serviço</ButtonNew>
      {open && (
        <Popup>
          <Title>Novo Serviço</Title>
          <Form>
            <Label htmlFor="desc">Descrição</Label>
            <Input type="text" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
            <Label htmlFor="valor">Valor</Label>
            <Input type="text" id="valor" value={valor} onChange={(e) => setValor(e.target.value)}/>
          </Form>
          <Button onClick={handleSubmit}>Adicionar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovoServico;
