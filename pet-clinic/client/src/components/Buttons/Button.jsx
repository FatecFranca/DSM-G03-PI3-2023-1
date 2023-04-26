import { ButtonLogin } from './buttons.styled'

const Button = ({ Text, onClick, Type = "button"}) => {
  return (
    <div className={style.Button}>
      <ButtonLogin type={Type} onClick={onClick}>
        {Text}
      </ButtonLogin>
    </div>
  )
}

export default Button