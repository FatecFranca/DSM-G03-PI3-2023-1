//CSS
import styles from './time.module.css'

//hooks
import { useEffect, useState } from 'react'

const Time = () => {

  //DATA
  let month = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');

  let date = new Date();

  let fullDate = month[date.getMonth()] + ' ' + date.getDate() + 'th, ' + date.getFullYear();

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
      <h1 className={styles.time}>{time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</h1>
      <h2 className={styles.date}>{fullDate}</h2>
    </div>

  )
}

export default Time;