import { ButtonLogin } from './buttons.styled'

const Button = ({ Text, onClick, Type = "button"}) => {
  return (
    <ButtonLogin type={Type} onClick={onClick}>
      {Text}
    </ButtonLogin>
  )
}

export default Button