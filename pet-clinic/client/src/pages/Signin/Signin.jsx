import style from './styleSignin.module.css'

import { useState } from "react"

import { Link, useNavigate } from 'react-router-dom'

import useAuth from '../../hooks/useAuth'

import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import DogSignup from '../../components/Animacao/DogSignup/DogSignup'

const Signin = () => {

  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    if (!email | !password) {
      setError("Preencha todos os campos")
      return
    }

    const res = signin(email, password)

    if (res) {
      setError(res)
      return
    }

    navigate("/cliente")
  }

  return (
    <div className={style.pageLogin}>
      <div className={style.animacao}>
        <DogSignup />
      </div>
      <div className={style.login}>
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
            onClick={handleLogin}
          />
          <label className={style.label}>Não tem conta?</label>
          <Link to='/signup' className={style.link}>&nbsp;Cadastre-se</Link>
        </div>
      </div>
    </div>
  )
}

export default Signin