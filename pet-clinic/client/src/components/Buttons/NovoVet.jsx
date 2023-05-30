import React, { useState } from 'react';
import { ButtonNew, Popup, Title, Form, Label, Input, Button } from './buttons.styled';

//utils
import { validateEmail, validatePassword, validateCpf } from '../../Utils/regex'

const NovoVet = () => {
  const [open, setOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [crmv_ce, setCrmv_ce] = useState('');

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const novoPet = {
      nome: nome,
      email: email,
      senha: senha,
      cpf: cpf,
      crmv_ce: crmv_ce,
    };
    const vets = JSON.parse(localStorage.getItem('vets') || '[]');
    vets.push(novoPet);
    localStorage.setItem('vets', JSON.stringify(vets));
    handleClose();
    window.location.reload();
  };

  return (
    <>
      <ButtonNew onClick={handleClick}>Novo Veterinário</ButtonNew>
      {open && (
        <Popup>
          <Title>Novo Veterinário</Title>
          <Form>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            <Label htmlFor="email">Email</Label>
            <Input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <Label htmlFor="cpf">CPF</Label>
            <Input type="text" id="cpf" value={cpf} onChange={(e) => setCpf(e.target.value)} />
            <Label htmlFor="crmv_ce">Crmv-ce</Label>
            <Input type="text" id="crmv_ce" value={crmv_ce} onChange={(e) => setCrmv_ce(e.target.value)}/>
            <Label htmlFor="senha">Senha</Label>
            <Input type="password" id="senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            <Label htmlFor="confSenha">Confirmar a Senha</Label>
            <Input type="password" id="confSenha" value={confSenha} onChange={(e) => setConfSenha(e.target.value)} />
          </Form>
          <Button onClick={handleSubmit}>Adicionar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovoVet;
