//CSS
import style from './styleSignin.module.css'

//hooks
import { useState, useEffect } from "react"

//router
import { Link, useNavigate } from 'react-router-dom'

//contexts
// import useAuth from '../../hooks/useAuth'

//components
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import DogSignup from '../../components/Animacao/DogSignup/DogSignup'

//axios
import http from '../../db/http'


const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  //const { signin } = useAuth()
  const navigate = useNavigate()

  //API
  const signinSubmit = async () => {
   
    try {
      const response = await http.post("/cliente/login", {
        email,
        senha: password
      })

      navigate('/cliente')
      localStorage.setItem("token_API", JSON.stringify(response.data.token))

    } catch (err){
      console.log(err)
    }

    // await http({
    //   method: 'post',
    //   url: '/cliente/login',
    //   data:{
    //     email,
    //     senha: password
    //   }
    // })

    // .then((response) => {
    //   console.log(response)
    //   navigate('/cliente')

    //   localStorage.setItem("token_API", JSON.stringify(response.data.token))
    // })

    // .catch((error) => {
    //   console.log(error)
    // })
    
  }

  const handleSignin = (e) => {
    e.preventDefault()

    if (!email | !password) {
      setError("Preencha todos os campos")
      return
    } else {
      signinSubmit()
    }
  }

  return (
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
          <Button
            Text="Entrar"
            onClick={handleSignin}
          />
          <label className={style.label}>Não tem conta?</label>
          <Link to='/signup' className={style.link}>&nbsp;Cadastre-se</Link>
        </div>
      </form>
    </div>
  )
}

export default Signin