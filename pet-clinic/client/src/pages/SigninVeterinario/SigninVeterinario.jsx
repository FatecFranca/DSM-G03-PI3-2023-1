import style from './styleSigninVeterinario.module.css'

//toastify
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { useState, useEffect } from "react"

import { useNavigate } from 'react-router-dom'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import DogVeterinario from '../../components/Animacao/DogVeterinario/DogVeterinario'

//axios
import http from "../../db/http";

const SigninVeterinario = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const [loading, setLoading] = useState(false);

  const signinSubmit = async () => {

    try {
      const response = await http.post("/vet/login", {
        email,
        senha: password,
      });

      navigate("/veterinario");
      localStorage.setItem("token_API", JSON.stringify(response.data.token));
      localStorage.setItem("crmv_API", JSON.stringify(response.data.crmv));

      console.log(response);
      
    } catch (error) {

      if(error.response){

        if(error.response.data.error === "Senha incorreta."){
          toast.error('Senha incorreta. Por favor, verifique a Senha digitada.', {
            className: "error-toast",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        } else if (error.response.data.error === "Email não encontrado.") {
          toast.error('Email não encontrado. Por favor, verifique o Email digitado.', {
            className: "error-toast",
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            
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
      }

      console.log(error);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email | !password) {
      return toast.warn('Preencha todos os campos', {
        className: "error-toast",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    } else {
      signinSubmit();
    }
  };

  useEffect(() => {
    if (!loading && localStorage.getItem("token_API") !== null) {
      navigate("/veterinario");
    }
  }, [loading, navigate]);

  return (
    <>
    <ToastContainer />
    <div className={style.pageLogin}>
      <div className={style.animacao}>
        <DogVeterinario />
      </div>
      <div className={style.login}>
        <div className={style.cabecalho}>
          <label className={style.labelText}>Seja Bem-Vindo,</label>
          <label className={style.labelTitulo}>Doutor</label>
        </div>
        <div className={style.form}>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError("")]}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => [setPassword(e.target.value), setError("")]}
          />
          <label className={style.labelError}>{error}</label>
          <Button
            Text="Entrar"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default SigninVeterinario