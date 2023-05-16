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
// import useAuth from '../../hooks/useAuth'

//utils
import { validateText, validateEmail, validatePassword, validateCpf, validateCep, validateNumero } from '../../Utils/regex'

//components
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import DogSignin from '../../components/Animacao/DogSignin/DogSignin'

// axios
import http from '../../db/http'


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
  const [inputCpfErr, setInputCpfErr] = useState(false);
  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPasswordErr, setInputPasswordErr] = useState(false);
  const [error, setError] = useState("");

  //STATE DE ERROR ENDERECO
  const [inputCepErr, setInputCepErr] = useState(false);
  const [inputRuaErr, setInputRuaErr] = useState(false);
  const [inputNumeroErr, setInputNumeroErr] = useState(false);
  const [inputBairroErr, setInputBairroErr] = useState(false);
  const [inputCidadeErr, setInputCidadeErr] = useState(false);
  const [inputEstadoErr, setInputEstadoErr] = useState(false);

  const navigate = useNavigate()

  // const { signup } = useAuth()


  //VALIDAÇÃO FORA DO INPUT
  const onBlurHandler = (e) => {

    switch (e.target.name) {

      //CLIENTE
      case 'nome':
        if (!validateText.test(nome) && nome.trim() !== '') {
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

        //ENDERECO
      case 'cep':
        if (!validateCep.test(cep) && cep.trim() !== '') {
          return setInputCepErr(true);
        } else {
          return setInputCepErr(false);
        }

      case 'rua':
        if (!validateText.test(rua) && rua.trim() !== '') {
          return setInputRuaErr(true);
        } else {
          return setInputRuaErr(false);
        }
        
      case 'numero':
        if (!validateNumero.test(numero) && numero.trim() !== '') {
          return setInputNumeroErr(true);
        } else {
          return setInputNumeroErr(false);
        }

      case 'bairro':
        if (!validateText.test(bairro) && bairro.trim() !== '') {
          return setInputBairroErr(true);
        } else {
          return setInputBairroErr(false);
        }

      case 'cidade':
        if (!validateText.test(cidade) && cidade.trim() !== '') {
          return setInputCidadeErr(true);
        } else {
          return setInputCidadeErr(false);
        }

      case 'estado':
        if (!validateText.test(estado) && estado.trim() !== '') {
          return setInputEstadoErr(true);
        } else {
          return setInputEstadoErr(false);
        }
    }
  }

  //MENSAGEM DE ERRO DO INPUT
  useEffect(() => {

    //CLIENTE
    if (!validateText.test(nome) && nome.trim() !== '') {
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

    //ENDERECO
    if (!validateCep.test(cep) && cep.trim() !== '') {
      return setInputCepErr(true);
    } else {
      setInputCepErr(false);
    }

    if (!validateText.test(rua) && rua.trim() !== '') {
      return setInputRuaErr(true);
    } else {
      setInputRuaErr(false);
    }

    if (!validateNumero.test(numero) && numero.trim() !== '') {
      return setInputNumeroErr(true);
    } else {
      setInputNumeroErr(false);
    }

    if (!validateText.test(bairro) && bairro.trim() !== '') {
      return setInputBairroErr(true);
    } else {
      setInputBairroErr(false);
    }

    if (!validateText.test(cidade) && cidade.trim() !== '') {
      return setInputCidadeErr(true);
    } else {
      setInputCidadeErr(false);
    }

    if (!validateText.test(estado) && estado.trim() !== '') {
      return setInputEstadoErr(true);
    } else {
      setInputEstadoErr(false);
    }
    

  }, [nome, cpf, email, password, cep, rua, numero, bairro, cidade, estado]);


  //API
  const registerSubmit = async () => {

    await http({
      method: 'post',
      url: 'cliente',
      data:{
        nome, cpf, email, senha: password, cep, rua, numero, bairro, cidade, estado
      }
    })

    .then((response) => {
      console.log(response)
      navigate('/')
    })
    
    .catch((error) => {
      console.log(error)
    })
  }


  //CADASTRADO DE USUÁRIO
  const handleSignup = (e) => {
    e.preventDefault()

    //RETORNA ERRO CASO FALTAR UM CAMPO PARA PREENCHER
    if (!email | 
        !passwordConf | 
        !password | 
        !nome | 
        !cpf | 
        !cep | 
        !rua | 
        !numero | 
        !bairro | 
        !cidade | 
        !estado) {
      return setError("Preencha todos os campos")
    }

    //RETORNA ERRO CASO A CONFIRMAÇÃO DE SENHA FOR DIFERENTE DA SENHA
    if (password !== passwordConf) {
      return setError("As senhas precisam ser iguais")
    }

    // if (
    //   nome &&
    //   cpf &&
    //   email &&
    //   password &&
    //   passwordConf &&
    //   inputNomeErr &&
    //   inputCpfErr &&
    //   inputEmailErr &&
    //   inputPasswordErr &&
    //   cep &&
    //   rua &&
    //   numero &&
    //   bairro &&
    //   cidade &&
    //   estado &&
    //   inputCepErr &&
    //   inputRuaErr &&
    //   inputNumeroErr &&
    //   inputBairroErr &&
    //   inputCidadeErr &&
    //   inputEstadoErr
    // ) {

    // }

    //SE TUDO ESTIVER OK ELE CADASTRA O USUÁRIO
    if (registerSubmit()) {
      return
    }
  }


  return (
    <>
      <ToastContainer />
      <div className={style.pageCadastro}>
        <form className={style.cadastro} onSubmit={handleSignup}>
          <label className={style.label1}>Preencha os campos abaixo para se Cadastrar</label>
          <div className={style.formulario}>
            <div className={style.inputPessoa}>
            <Input
              name='nome'
              type="text"
              placeholder="Nome completo"
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
              {inputPasswordErr && <p className={style.labelError}>Deve ter 6+ caracteres, 1 letra e 1 número</p>}
            </div>
            <Input
              type="password"
              placeholder="Confirme sua Senha"
              required
              value={passwordConf}
              onChange={(e) => [setPasswordConf(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            </div>

            <div className={style.inputEndereco}>
            <Input
              name='cep'
              type="text"
              placeholder="CEP"
              required
              value={cep}
              onChange={(e) => [setCep(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputCepErr && <p className={style.labelError}>Digite um CEP válido</p>}
            </div>
            <Input
              name='rua'
              type="text"
              placeholder="Rua"
              required
              value={rua}
              onChange={(e) => [setRua(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputRuaErr && <p className={style.labelError}>Não pode conte numeros</p>}
            </div>
            <Input
              name='numero'
              type="text"
              placeholder="Numero"
              required
              value={numero}
              onChange={(e) => [setNumero(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputNumeroErr && <p className={style.labelError}>Somente numeros, no máximo até 6 digitos</p>}
            </div>
            <Input
              name='bairro'
              type="text"
              placeholder="Bairro"
              required
              value={bairro}
              onChange={(e) => [setBairro(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputBairroErr && <p className={style.labelError}>Não pode conter numeros e características especiais</p>}
            </div>
            <Input
              name='cidade'
              type="text"
              placeholder="Cidade"
              required
              value={cidade}
              onChange={(e) => [setCidade(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputCidadeErr && <p className={style.labelError}>Não pode conter numeros</p>}
            </div>
            <Input
              name='estado'
              type="text"
              placeholder="Estado"
              required
              value={estado}
              onChange={(e) => [setEstado(e.target.value), setError("")]}
              onBlur={onBlurHandler}
            />
            <div>
              {inputEstadoErr && <p className={style.labelError}>Não pode conter numeros</p>}
            </div>
            </div>
          </div>
          <label className={style.labelError}>{error}</label> 
           <Button
              Text="Cadastrar-se"
              onClick={handleSignup}
            />
            <label className={style.label2}>Já tem uma conta?</label>
            <Link to='/' className={style.link}>&nbsp;Acesse aqui</Link>
        </form>

        <div className={style.animacao}>
          <DogSignin />
        </div>
      </div>
    </>

  )
}

export default Signup