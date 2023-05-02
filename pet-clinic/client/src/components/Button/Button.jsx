import style from './styleButton.module.css'

const Button = ({ Text, onClick, Type = "button"}) => {
  return (
    <div className={style.Button}>
      <button type={Type} onClick={onClick}>
        {Text}
      </button>
    </div>
  )
}

export default Button