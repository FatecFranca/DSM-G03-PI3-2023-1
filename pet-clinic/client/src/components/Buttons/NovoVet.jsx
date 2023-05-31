import React, { useState } from 'react';

import { ButtonNew, Popup, Title, Form, Label, Input, Button } from './buttons.styled';

//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// axios
import http from "../../db/http";

const NovoVet = () => {

  const [open, setOpen] = useState(false);

  //STATE DE VALUE VETERINARIO
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [crmv, setCrmv] = useState("");
  const [celular, setCelular] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);

    //Limpar campos
    setNome('')
    setCpf('')
    setEmail('')
    setPassword('')
    setPasswordConf('')
    setCelular('')
    setCrmv('')
  };

//API
const registerSubmit = async () => {

  try {
    const response = await http.post("/vet", {
      nome,
      cpf,
      email,
      senha: password,
      celular, 
      crmv
    });

    console.log(response);
    toast.success('Veterinário cadastrado com sucesso', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    setOpen(false)

  } catch (error) {

    if(error.response){

      const { data } = error.response

      if(data.err === 'CPF inválido'){
        toast.error('CPF inválido. Verifique o CPF digitado.', {
          className: "error-toast",
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } else if (data.err === "celular inválido") {
        toast.error('Celular inválido. Por favor, verifique o Celular digitado.', {
          className: "error-toast",
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } else if (data.err === "nome inválido") {
        toast.error('Nome inválido. Por favor, verifique o Nome digitado.', {
          className: "error-toast",
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } else if (data.err === "email inválido") {
        toast.error('Email inválido. Por favor, verifique o Email digitado.', {
          className: "error-toast",
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } else if (data.err === "senha inválida") {
        toast.error('Senha inválido. Por favor, verifique a Senha digitada.', {
          className: "error-toast",
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });

      } else if (data.error === "Este email, CPF ou CRMV já está em uso.") {
        toast.error('Email, CPF ou CRMV já está em uso. Por favor, verifique e escolha outro.', {
          className: "error-toast",
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }

    } else {
      toast.info('Erro de conexão. Entre contato com o suporte.', {
        className: "error-toast",
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    
    }
    console.log(error);
  }
};

//CADASTRADO DE VETERINÁRIO
const handleSignup = (e) => {
  e.preventDefault();

  //RETORNA ERRO CASO FALTAR UM CAMPO PARA PREENCHER
  if (
    !email |
    !passwordConf |
    !password |
    !nome |
    !cpf |
    !crmv |
    !celular
  ) {
    return toast.warn('Preencha todos os campos', {
      className: "error-toast",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  //RETORNA ERRO CASO A CONFIRMAÇÃO DE SENHA FOR DIFERENTE DA SENHA
  if (password !== passwordConf) {
    return toast.warn('As senhas precisam ser iguais', {
      className: "error-toast",
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  if (
    nome &&
    cpf &&
    email &&
    password &&
    passwordConf &&
    crmv &&
    celular
  ) {}

  //SE TUDO ESTIVER OK ELE CADASTRA O USUÁRIO
  if (registerSubmit()) {
    return;
  }
};

  return (
    <>
    <ToastContainer />
      <ButtonNew onClick={handleClick}>Novo Veterinário</ButtonNew>
      {open && (
        <Popup>
          <Title>Novo Veterinário</Title>
          <Form onSubmit={handleSignup}>
            <Label htmlFor="nome">Nome</Label>
            <Input 
              type="text" 
              id="nome" 
              value={nome} 
              onChange={(e) => setNome(e.target.value)} 
            />
            <Label htmlFor="email">Email</Label>
            <Input 
              type="text" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label htmlFor="cpf">CPF</Label>
            <Input 
              type="text" 
              id="cpf" 
              value={cpf}
              onChange={(e) => setCpf(e.target.value)} 
            />
            <Label htmlFor="celular">Celular</Label>
            <Input 
              type="text" 
              id="celular" 
              value={celular} 
              onChange={(e) => setCelular(e.target.value)}
            />
            <Label htmlFor="crmv_ce">Crmv-ce</Label>
            <Input 
              type="text" 
              id="crmv_ce" 
              value={crmv} 
              onChange={(e) => setCrmv(e.target.value)}
            />
            <Label htmlFor="senha">Senha</Label>
            <Input 
              type="password" 
              id="senha" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />
            <Label htmlFor="confSenha">Confirmar a Senha</Label>
            <Input 
              type="password" 
              id="confSenha" 
              value={passwordConf} 
              onChange={(e) => setPasswordConf(e.target.value)} 
            />
          </Form>
          <Button onClick={handleSignup}>Cadastrar</Button>
          <Button onClick={handleClose}>Cancelar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovoVet;
