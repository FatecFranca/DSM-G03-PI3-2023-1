import React, { useState } from 'react';

//utils
import { validatetime } from "../../Utils/regex";

import {
  ButtonNew,
  Popup,
  Title,
  Form,
  Label,
  Input,
  InputJornada,
  InputJornadaCheck,
  Button,
  ButtonJornada,
  PopupJornada,
  Domingo,
  Segunda,
  Terca,
  Quarta,
  Quinta,
  Sexta,
  Sabado,
  LabelJornada
} from './buttons.styled';

//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// axios
import http from "../../db/http";

const NovoVet = () => {

  const [open, setOpen] = useState(false);
  const [openJornada, setOpenJornada] = useState(false);

  //STATE DE VALUE VETERINARIO
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [crmv, setCrmv] = useState("");
  const [celular, setCelular] = useState("");
  const [jornada, setJornada] = useState({
    domingo: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    },
    segunda: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    },
    terca: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    },
    quarta: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    },
    quinta: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    },
    sexta: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    },
    sabado: {
      isActive: false,
      horaInicio: "",
      horaFim: ""
    }
  });


  //ABRIR E FECHAR MODAL DA CADASTRO VETERINARIO
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpenJornada(false);
    setOpen(false);

    //Limpar campos
    setNome('')
    setCpf('')
    setEmail('')
    setPassword('')
    setPasswordConf('')
    setCelular('')
    setCrmv('')
    setJornada({
      domingo: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      },
      segunda: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      },
      terca: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      },
      quarta: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      },
      quinta: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      },
      sexta: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      },
      sabado: {
        isActive: false,
        horaInicio: "",
        horaFim: ""
      }
    });
  };

  //ABRIR E FECHAR MODAL DA JORNADA VETERINARIO
  const handleClickJornada = () => {
    setOpenJornada(true);
  };

  const handleCloseJornada = () => {
    setOpenJornada(false);
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
        crmv,
        jornada
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

      handleClose()
      handleCloseJornada()

    } catch (error) {

      if (error.response) {

        const { data } = error.response

        if (data.err === 'CPF inválido') {
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
      !celular |
      !jornada
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
    ) { }

    //SE TUDO ESTIVER OK ELE CADASTRA O USUÁRIO
    if (registerSubmit()) {
      return;
    }
  };

  const handleCheckboxChange = (day, e) => {

    setJornada((prevJornada) => ({
      ...prevJornada,
      [day]: {
        ...prevJornada[day],
        isActive: e.target.checked
      }
    }));
  };

  const handleHoraInicioChange = (day, e) => {

    const time = e.target.value;

    if (validatetime.test(time)) {
      const formattedTime = time.replace(/^(\d{2})(\d{2})$/, "$1:$2");
      setJornada((prevJornada) => ({
        ...prevJornada,
        [day]: {
          ...prevJornada[day],
          horaInicio: formattedTime
        }
      }));

    } else {
      console.log("Formato de hora inválido");
    }

  };

  const handleHoraFimChange = (day, e) => {

    const time = e.target.value;

    if (validatetime.test(time)) {
      const formattedTime = time.replace(/^(\d{2})(\d{2})$/, "$1:$2");
      setJornada((prevJornada) => ({
        ...prevJornada,
        [day]: {
          ...prevJornada[day],
          horaFim: formattedTime
        }
      }));

    } else {
      console.log("Formato de hora inválido");
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

            <ButtonJornada onClick={handleClickJornada}>Defina a Jornada de Trabalho</ButtonJornada>
            {openJornada && (
              <PopupJornada>
                <Title>Jornada de Trabalho</Title>

                <Domingo>
                  <InputJornadaCheck
                    type="checkbox"
                    id='domingo'
                    checked={jornada.domingo.isActive}
                    onChange={(e) => handleCheckboxChange("domingo", e)}
                  />
                  <LabelJornada htmlFor="domingo">Domingo</LabelJornada>
                  <InputJornada
                    type="text"
                    id='domingo'
                    value={jornada.domingo.horaInicio}
                    onChange={(e) => handleHoraInicioChange("domingo", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='domingo'
                    value={jornada.domingo.horaFim}
                    onChange={(e) => handleHoraFimChange("domingo", e)}
                    placeholder="Fim"
                  />
                </Domingo>


                <Segunda>
                  <InputJornadaCheck
                    type="checkbox"
                    id='segunda'
                    checked={jornada.segunda.isActive}
                    onChange={(e) => handleCheckboxChange("segunda", e)}
                  />
                  <LabelJornada htmlFor="segunda">Segunda</LabelJornada>
                  <InputJornada
                    type="text"
                    id='segunda'
                    value={jornada.segunda.horaInicio}
                    onChange={(e) => handleHoraInicioChange("segunda", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='segunda'
                    value={jornada.segunda.horaFim}
                    onChange={(e) => handleHoraFimChange("segunda", e)}
                    placeholder="Fim"
                  />
                </Segunda>

                <Terca>
                  <InputJornadaCheck
                    type="checkbox"
                    id='terca'
                    checked={jornada.terca.isActive}
                    onChange={(e) => handleCheckboxChange("terca", e)}
                  />
                  <LabelJornada htmlFor="terca">Terça</LabelJornada>
                  <InputJornada
                    type="text"
                    id='terca'
                    value={jornada.terca.horaInicio}
                    onChange={(e) => handleHoraInicioChange("terca", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='terca'
                    value={jornada.terca.horaFim}
                    onChange={(e) => handleHoraFimChange("terca", e)}
                    placeholder="Fim"
                  />
                </Terca>


                <Quarta>
                  <InputJornadaCheck
                    type="checkbox"
                    id='quarta'
                    checked={jornada.quarta.isActive}
                    onChange={(e) => handleCheckboxChange("quarta", e)}
                  />
                  <LabelJornada htmlFor="quarta">Quarta</LabelJornada>
                  <InputJornada
                    type="text"
                    id='quarta'
                    value={jornada.quarta.horaInicio}
                    onChange={(e) => handleHoraInicioChange("quarta", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='quarta'
                    value={jornada.quarta.horaFim}
                    onChange={(e) => handleHoraFimChange("quarta", e)}
                    placeholder="Fim"
                  />
                </Quarta>

                <Quinta>
                  <InputJornadaCheck
                    type="checkbox"
                    id='quinta'
                    checked={jornada.quinta.isActive}
                    onChange={(e) => handleCheckboxChange("quinta", e)}
                  />
                  <LabelJornada htmlFor="quinta">Quinta</LabelJornada>
                  <InputJornada
                    type="text"
                    id='quinta'
                    value={jornada.quinta.horaInicio}
                    onChange={(e) => handleHoraInicioChange("quinta", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='quinta'
                    value={jornada.quinta.horaFim}
                    onChange={(e) => handleHoraFimChange("quinta", e)}
                    placeholder="Fim"
                  />
                </Quinta>

                <Sexta>
                  <InputJornadaCheck
                    type="checkbox"
                    id='sexta'
                    checked={jornada.sexta.isActive}
                    onChange={(e) => handleCheckboxChange("sexta", e)}
                  />
                  <LabelJornada htmlFor="sexta">Sexta</LabelJornada>
                  <InputJornada
                    type="text"
                    id='sexta'
                    value={jornada.sexta.horaInicio}
                    onChange={(e) => handleHoraInicioChange("sexta", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='sexta'
                    value={jornada.sexta.horaFim}
                    onChange={(e) => handleHoraFimChange("sexta", e)}
                    placeholder="Fim"
                  />
                </Sexta>

                <Sabado>
                  <InputJornadaCheck
                    type="checkbox"
                    id='sabado'
                    checked={jornada.sabado.isActive}
                    onChange={(e) => handleCheckboxChange("sabado", e)}
                  />
                  <LabelJornada htmlFor="sabado">Sábado</LabelJornada>
                  <InputJornada
                    type="text"
                    id='sabado'
                    value={jornada.sabado.horaInicio}
                    onChange={(e) => handleHoraInicioChange("sabado", e)}
                    placeholder="Início"
                  />
                  <InputJornada
                    type="text"
                    id='sabado'
                    value={jornada.sabado.horaFim}
                    onChange={(e) => handleHoraFimChange("sabado", e)}
                    placeholder="Fim"
                  />
                </Sabado>

                <Button onClick={handleCloseJornada}>Fechar</Button>
              </PopupJornada>
            )}
          </Form>
          <Button onClick={handleSignup}>Cadastrar</Button>
          <Button onClick={handleClose}>Fechar</Button>
        </Popup>
      )}
    </>
  );
}

export default NovoVet;
