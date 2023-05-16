import style from './styleDogVeterinario.module.css'

const DogVeterinario = () => {
  return (
    <>
      <div class={style.dog}>
        <div class={style.ears}></div>
        <div class={style.body}>
          <div class={style.eyes}></div>
          <div class={style.beard}>
            <div class={style.mouth}>
              <div class={style.tongue}></div>
            </div>
          </div>
          <div class={style.belt}>
            <div class={style.locket}></div>
            <div class={style.tag}></div>
          </div>
          <div class={style.stomach}>
          </div>
          <div class={style.legs}>
            <div class={style.left}></div>
            <div class={style.right}></div>
          </div>
        </div>
        <div class={style.tail}>
        </div>
      </div>
    </>
  )
}

export default DogVeterinario