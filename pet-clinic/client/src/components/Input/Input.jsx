import style from './styleInput.module.css'

const Input = ({ type, placeholder, value, onChange, name, onBlur}) => {
  return (
    <div className={style.input}>
        <input  
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
        />
    </div>
  )
}

export default Input