//CSS
import style from './styleSignup.module.css'

//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//react
import { useState, useEffect } from "react"

//router
import { Link, useNavigate } from 'react-router-dom'

//context
import useAuth from '../../hooks/useAuth'

//utils
import { validateNome, validateEmail, validatePassword, validateCpf } from '../../Utils/regex'

//components
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import DogSignin from '../../components/Animacao/DogSignin/DogSignin'


const Signup = () => {

  //STATE DE VALUE
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  //STATE DE ERROR
  const [inputNomeErr, setInputNomeErr] = useState(false);
  const [inputCpfErr, setInputCpfErr] = useState(false);
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPasswordErr, setInputPasswordErr] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate()

  const { signup } = useAuth()

  //VALIDAÇÃO FORA DO INPUT
  const onBlurHandler = (e) => {

    switch (e.target.name) {

      case 'nome':
        if (!validateNome.test(nome) && nome.trim() !== '') {
          return setInputNomeErr(true);
        } else {
          return setInputNomeErr(false);
        }

      case 'cpf':
        if (!validateCpf.test(cpf) && cpf.trim() !== '') {
          return setInputCpfErr(true);
        } else {
          return setInputCpfErr(false);
        }

      case 'email':
        if (!validateEmail.test(email) && email.trim() !== '') {
          return setInputEmailErr(true);
        } else {
          return setInputEmailErr(false);
        }

      case 'password':
        if (!validatePassword.test(password) && password.trim() !== '') {
          return setInputPasswordErr(true);
        } else {
          return setInputPasswordErr(false);
        }
    }
  }

  //MENSAGEM DE ERRO DO INPUT
  useEffect(() => {
    if (!validateNome.test(nome) && nome.trim() !== '') {
      return setInputNomeErr(true);
    } else {
      setInputNomeErr(false);
    }

    if (!validateCpf.test(cpf) && cpf.trim() !== '') {
      return setInputCpfErr(true);
    } else {
      setInputCpfErr(false);
    }

    if (validateEmail.test(email) || email.trim() === '') {
      setInputEmailErr(false);
    }

    if (validatePassword.test(password) || password.trim() === '') {
      setInputPasswordErr(false);
    }

  }, [nome, cpf, email, password]);


  //CADASTRADO DE USUÁRIO
  const handleSignup = (e) => {
    e.preventDefault()

    //RETORNA ERRO CASO FALTAR UM CAMPO PARA PREENCHER
    if (!email | !passwordConf | !password | !nome | !cpf) {
      return setError("Preencha todos os campos")
    }

    // //VALIDA SE OS INPUTS ESTÃO CORRETOS DE ACORDO COM O REGEX
    // if (!validateNome.test(nome)) {
    //   return setInputNomeErr(true);
    // } else {
    //   setInputNomeErr(false);
    // }

    // // if (!validateCpf.test(cpf)) {
    // //   return setInputCpfErr(true);
    // // } else {
    // //   setInputCpfErr(false);
    // // }

    // if (!validateEmail.test(email)) {
    //   return setInputEmailErr(true);
    // } else {
    //   setInputEmailErr(false);
    // }

    // if (!validatePassword.test(password)) {
    //   return setInputPasswordErr(true);
    // } else {
    //   setInputPasswordErr(false);
    // }

    //RETORNA ERRO CASO A CONFIRMAÇÃO DE SENHA FOR DIFERENTE DA SENHA
    if (password !== passwordConf) {
      setError("As senhas não são iguais")
      return
    }

    if (
      nome &&
      cpf &&
      email &&
      password &&
      passwordConf &&
      inputNomeErr &&
      inputCpfErr &&
      inputEmailErr &&
      inputPasswordErr
    ) {

    }

    //SE TUDO ESTIVER OK ELE CADASTRA O USUÁRIO
    const res = signup(email, password) 

    if (res) {
      setError(res)
      return
    }

    alert("Usuário cadastrado com sucesso!")
    
    navigate("/")
  }


  return (
    <>
      <ToastContainer />
      <div className={style.pageCadastro}>
        <div className={style.cadastro}>
          <label className={style.label1}>Preencha os campos abaixo para se Cadastrar</label>
          <div className={style.cadastro2}>
            <Input
              name='nome'
              type="text"
              placeholder="Nome"
              required
              value={nome}
              onChange={(e) => [setNome(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputNomeErr && <p className={style.labelError}>Digite um nome válido</p>}
            </div>
            <Input
              name='cpf'
              type="text"
              placeholder="CPF"
              required
              value={cpf}
              onChange={(e) => [setCpf(e.target.value), setError("")]}
            onBlur={onBlurHandler}
            />
            <div>
              {inputCpfErr && <p className={style.labelError}>Digite um CPF válido</p>}
            </div>
            <Input
              name='email'
              type="email"
              placeholder="E-mail"
              required
              value={email}
              onChange={(e) => [setEmail(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputEmailErr && <p className={style.labelError}>Digite um e-mail válido</p>}
            </div>
            <Input
              name='password'
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => [setPassword(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputPasswordErr && <p className={style.labelError}>Sua senha deve ter 6+ caracteres, 1 letra e 1 número</p>}
            </div>
            <Input
              type="password"
              placeholder="Confirme sua Senha"
              required
              value={passwordConf}
              onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <label className={style.labelError}>{error}</label>
            <Button
              Text="Cadastrar-se"
              onClick={handleSignup}
            />
            <label className={style.label2}>Já tem uma conta?</label>
            <Link to='/' className={style.link}>&nbsp;Acesse aqui</Link>
          </div>
        </div>
        <div className={style.animacao}>
          <DogSignin />
        </div>
      </div>
    </>

  )
}

export default Signup