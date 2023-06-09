import style from "./styleSigninAdminVeterinario.module.css";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import { Switch } from "antd";

import { useNavigate} from "react-router-dom";

import Input from "../../components/Input/Input";
import Button from "../../components/Buttons/Button";
import DogVeterinario from "../../components/Animacao/DogVeterinario/DogVeterinario";

import Loading from '../../components/Loading/Loading'

//axios
import http from "../../db/http";

const SigninAdminVeterinario = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(false);

  const [loading, setLoading] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  useEffect(() => {
    // Verificar se há uma entrada no histórico de navegação
    const { state } = navigate;

    if (state && state.from) {
      navigate(state.from);
    } else {
      // Verificar se há uma rota salva no localStorage
      const savedRoute = localStorage.getItem("Page");

      if (savedRoute) {
        navigate(JSON.parse(savedRoute));
      }
    }
  }, [navigate]);


  const signinSubmit = async () => {
    const routeBd = toggle ? "/admin/login" : "/vet/login";
    const routeNav = toggle ? "/portal/sec" : "/portal/vet";
    try {

      setLoading(true);

      const response = await http.post(routeBd, {
        email,
        senha: password,
      });

      localStorage.clear();
      localStorage.setItem("token_API", JSON.stringify(response.data.token));
      localStorage.setItem("Page", JSON.stringify(routeNav));

      navigate(routeNav);
      console.log(response);
      
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
  };

  const handleLogin = (e) => {
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
      !loading &&
      localStorage.getItem("token_API") !== null &&
      localStorage.getItem("Page") === "/portal/vet"
    ) {
      navigate("/portal/vet");

    } 
  }, [loading, navigate]);

  useEffect(() => {
    if (
      !loading &&
      localStorage.getItem("token_API") !== null &&
      localStorage.getItem("Page") === "/portal/sec"
    ) {
      navigate("/portal/sec");
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
            <div>
              <Switch onClick={toggler} />
              {toggle ? (
                <span>Secretario(a)</span>
              ) : (
                <span>Veterinário(a)</span>
              )}
            </div>
            <Button Text="Entrar" onClick={handleLogin} />
          </div>
          {/* {loading && (
            <Loading />
          )} */}
        </div>
      </div>
    </>
  );
};

export default SigninAdminVeterinario;
