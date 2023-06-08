//CSS
import style from "./styleSignin.module.css";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//hooks
import { useState, useEffect } from "react";

//router
import { Link, useNavigate } from "react-router-dom";

//components
import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import DogSignup from "../../components/Animacao/DogSignup/DogSignup";

import Loading from '../../components/Loading/Loading'

// axios
import http from "../../db/http";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  //API
  const signinSubmit = async () => {
    try {

      setLoading(true); // Iniciar o carregamento

      const response = await http.post("/cliente/login", {
        email,
        senha: password,
      });

      localStorage.clear("token_API");

      localStorage.setItem("token_API", JSON.stringify(response.data.token));
      localStorage.setItem("URL", JSON.stringify(response.config.url));

      navigate("/cliente");

      console.log(response)

    } catch (error) {
      if (error.response) {
        if (error.response.data.error === "Senha incorreta.") {
          toast.error(
            "Senha incorreta. Por favor, verifique a Senha digitada.",
            {
              className: "error-toast",
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        } else if (error.response.data.error === "Email não encontrado.") {
          toast.error(
            "Email não encontrado. Por favor, verifique o Email digitado.",
            {
              className: "error-toast",
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        } else {
          toast.info("Erro de conexão. Entre contato com o suporte.", {
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

    } finally {

      setLoading(false); // Finalizar o carregamento, independentemente do resultado
    }
    
  }

  const handleSignin = (e) => {
    e.preventDefault();

    if (!email | !password) {
      return toast.warn("Preencha todos os campos", {
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
    if (
      !loading && localStorage.getItem("token_API") !== null ||
      localStorage.getItem("URL") === "/cliente/login") {

      navigate("/cliente");
    }
  }, [loading, navigate]);

  return (
    <>
      <ToastContainer />
      <div className={style.pageLogin}>
        <div className={style.animacao}>
          <DogSignup />
        </div>
        <form className={style.login} onSubmit={handleSignin}>
          <div className={style.cabecalho}>
            <label className={style.labelTitulo}>PetClinic,</label>
            <label className={style.labelText}>Seja Bem-Vindo</label>
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
            <Button Text="Entrar" onClick={handleSignin} />
            <label className={style.label}>Não tem conta?</label>
            <Link to="/signup" className={style.link}>
              &nbsp;Cadastre-se
            </Link>
          </div>
          {/* {loading && (
            <Loading />
          )} */}
        </form>
      </div>
    </>
  );
};

export default Signin;
