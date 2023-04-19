//CSS
import styles from './time.module.css'

//hooks
import { useEffect, useState } from 'react'

const Time = () => {

  //DATA
  let month = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

  let date = new Date();

  let fullDate = date.getDate() + ' de ' + month[date.getMonth()] + ' de ' + date.getFullYear();

  //HORA
  const [ time , setTime] = useState(new Date());

  function refreshClock() {
    setTime(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  return (

    <div className={styles.relogio}>
      <p className={styles.time}>{time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</p>
      <p className={styles.date}>{fullDate}</p>
    </div>

  )
}

export default Time;