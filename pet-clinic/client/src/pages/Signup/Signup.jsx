//CSS
import style from "./styleSignup.module.css";

//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//react
import { useState, useEffect } from "react";

//router
import { Link, useNavigate } from "react-router-dom";

//utils
import {
  validateText,
  validateEmail,
  validatePassword,
  validateNumero
} from "../../Utils/regex";

//components
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import DogSignin from "../../components/Animacao/DogSignin/DogSignin";

// axios
import http from "../../db/http";

const Signup = () => {
  //STATE DE VALUE CLIENTE
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  //STATE DE VALUE ENDERECO
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  //STATE DE ERROR CLIENTE
  const [inputNomeErr, setInputNomeErr] = useState(false);
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPasswordErr, setInputPasswordErr] = useState(false);
  const [error, setError] = useState("");

  //STATE DE ERROR ENDERECO
  const [inputNumeroErr, setInputNumeroErr] = useState(false);
  const [inputCidadeErr, setInputCidadeErr] = useState(false);
  const [inputEstadoErr, setInputEstadoErr] = useState(false);

  const navigate = useNavigate();

  //VALIDAÇÃO FORA DO INPUT
  const onBlurHandler = (e) => {
    switch (e.target.name) {

      //CLIENTE
      case "nome":
        if (!validateText.test(nome) && nome.trim() !== "") {
          return setInputNomeErr(true);
        } else {
          return setInputNomeErr(false);
        }

      case "email":
        if (!validateEmail.test(email) && email.trim() !== "") {
          return setInputEmailErr(true);
        } else {
          return setInputEmailErr(false);
        }

      case "password":
        if (!validatePassword.test(password) && password.trim() !== "") {
          return setInputPasswordErr(true);
        } else {
          return setInputPasswordErr(false);
        }

      //ENDERECO
      case "numero":
        if (!validateNumero.test(numero) && numero.trim() !== "") {
          return setInputNumeroErr(true);
        } else {
          return setInputNumeroErr(false);
        }

      case "cidade":
        if (!validateText.test(cidade) && cidade.trim() !== "") {
          return setInputCidadeErr(true);
        } else {
          return setInputCidadeErr(false);
        }

      case "estado":
        if (!validateText.test(estado) && estado.trim() !== "") {
          return setInputEstadoErr(true);
        } else {
          return setInputEstadoErr(false);
        }
    }
  };

  //MENSAGEM DE ERRO DO INPUT
  useEffect(() => {
    //CLIENTE
    if (!validateText.test(nome) && nome.trim() !== "") {
      return setInputNomeErr(true);
    } else {
      setInputNomeErr(false);
    }

    if (validateEmail.test(email) || email.trim() === "") {
      setInputEmailErr(false);
    }

    if (validatePassword.test(password) || password.trim() === "") {
      setInputPasswordErr(false);
    }

    //ENDERECO
    if (!validateNumero.test(numero) && numero.trim() !== "") {
      return setInputNumeroErr(true);
    } else {
      setInputNumeroErr(false);
    }

    if (!validateText.test(cidade) && cidade.trim() !== "") {
      return setInputCidadeErr(true);
    } else {
      setInputCidadeErr(false);
    }

    if (!validateText.test(estado) && estado.trim() !== "") {
      return setInputEstadoErr(true);
    } else {
      setInputEstadoErr(false);
    }
  }, [nome, email, password, numero, cidade, estado]);

  //API
  const registerSubmit = async () => {

    try {
      const response = await http.post("/cliente", {
        nome,
        cpf,
        email,
        senha: password,
        endereco: { cep, rua, numero, bairro, cidade, estado }
      });


      navigate('/')
      console.log(response);


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

        } else if (data.err === "CEP inválido") {
          toast.error('CEP inválido. Por favor, verifique o CEP digitado.', {
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

        } else if (data.error === "Este email ou CPF já está em uso.") {
          toast.error('Este email ou CPF já está em uso. Por favor, escolha outro.', {
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

  //CADASTRADO DE USUÁRIO
  const handleSignup = (e) => {
    e.preventDefault();

    //RETORNA ERRO CASO FALTAR UM CAMPO PARA PREENCHER
    if (
      !email |
      !passwordConf |
      !password |
      !nome |
      !cpf |
      !cep |
      !rua |
      !numero |
      !bairro |
      !cidade |
      !estado
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
      inputNomeErr &&
      inputEmailErr &&
      inputPasswordErr &&
      cep &&
      rua &&
      numero &&
      bairro &&
      cidade &&
      estado &&
      inputNumeroErr &&
      inputCidadeErr &&
      inputEstadoErr
    ) {}

    //SE TUDO ESTIVER OK ELE CADASTRA O USUÁRIO
    if (registerSubmit()) {
      return;
    }
  };

  return (
    <>
      <ToastContainer />
      <div className={style.pageCadastro}>
        <form className={style.cadastro} onSubmit={handleSignup}>
          <label className={style.label1}>
            Preencha os campos abaixo para se Cadastrar
          </label>
          <div className={style.formulario}>
            <div className={style.inputPessoa}>
              <Input
                name="nome"
                type="text"
                placeholder="Nome completo"
                required
                value={nome}
                onChange={(e) => [setNome(e.target.value), setError("")]}
                onBlur={onBlurHandler}
              />
              <div>
                {inputNomeErr && (
                  <p className={style.labelError}>Digite um nome válido</p>
                )}
              </div>
              <Input
                name="cpf"
                type="text"
                placeholder="CPF"
                required
                value={cpf}
                onChange={(e) => [setCpf(e.target.value), setError("")]}
              />
              <div>
              </div>
              <Input
                name="email"
                type="email"
                placeholder="E-mail"
                required
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError("")]}
                onBlur={onBlurHandler}
              />
              <div>
                {inputEmailErr && (
                  <p className={style.labelError}>Digite um e-mail válido</p>
                )}
              </div>
              <Input
                name="password"
                type="password"
                placeholder="Senha"
                required
                value={password}
                onChange={(e) => [setPassword(e.target.value), setError("")]}
                onBlur={onBlurHandler}
              />
              <div>
                {inputPasswordErr && (
                  <p className={style.labelError}>
                    Deve ter 6+ caracteres, 1 letra e 1 número
                  </p>
                )}
              </div>
              <Input
                type="password"
                placeholder="Confirme sua Senha"
                required
                value={passwordConf}
                onChange={(e) => [
                  setPasswordConf(e.target.value),
                  setError(""),
                ]}
                onBlur={onBlurHandler}
              />
            </div>

            <div className={style.inputEndereco}>
              <Input
                name="cep"
                type="text"
                placeholder="CEP"
                required
                value={cep}
                onChange={(e) => [setCep(e.target.value), setError("")]}
              />
              <div>
              </div>
              <Input
                name="rua"
                type="text"
                placeholder="Rua"
                required
                value={rua}
                onChange={(e) => [setRua(e.target.value), setError("")]}
              />
              <div>
              </div>
              <Input
                name="numero"
                type="text"
                placeholder="Numero"
                required
                value={numero}
                onChange={(e) => [setNumero(e.target.value), setError("")]}
                onBlur={onBlurHandler}
              />
              <div>
                {inputNumeroErr && (
                  <p className={style.labelError}>
                    Somente numeros, no máximo até 6 digitos
                  </p>
                )}
              </div>
              <Input
                name="bairro"
                type="text"
                placeholder="Bairro"
                required
                value={bairro}
                onChange={(e) => [setBairro(e.target.value), setError("")]}
              />
              <div>
              </div>
              <Input
                name="cidade"
                type="text"
                placeholder="Cidade"
                required
                value={cidade}
                onChange={(e) => [setCidade(e.target.value), setError("")]}
                onBlur={onBlurHandler}
              />
              <div>
                {inputCidadeErr && (
                  <p className={style.labelError}>Não pode conter numeros</p>
                )}
              </div>
              <Input
                name="estado"
                type="text"
                placeholder="Estado"
                required
                value={estado}
                onChange={(e) => [setEstado(e.target.value), setError("")]}
                onBlur={onBlurHandler}
              />
              <div>
                {inputEstadoErr && (
                  <p className={style.labelError}>Não pode conter numeros</p>
                )}
              </div>
            </div>
          </div>
          <label className={style.labelError}>{error}</label>
          <Button Text="Cadastrar-se" onClick={handleSignup} />
          <label className={style.label2}>Já tem uma conta?</label>
          <Link to="/" className={style.link}>
            &nbsp;Acesse aqui
          </Link>
        </form>

        <div className={style.animacao}>
          <DogSignin />
        </div>
      </div>
    </>
  );
};

export default Signup;
