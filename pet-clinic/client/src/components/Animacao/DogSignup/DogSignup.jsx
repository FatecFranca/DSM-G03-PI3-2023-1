import style from './styleDogSignup.module.css'

const DogSignup = () => {
    return (
        <>
            <div class={style.dog}>
                <div class={style.torso}>
                    <div class={style.fur}>
                        <div class={style.spot}></div>
                    </div>
                    <div class={style.neck}>
                        <div class={style.fur}></div>
                        <div class={style.head}>
                            <div class={style.fur}>
                                <div class={style.snout}></div>
                            </div>
                            <div class={style.ears}>
                                <div class={style.ear}>
                                    <div class={style.fur}></div>
                                </div>
                                <div class={style.ear}>
                                    <div class={style.fur}></div>
                                </div>
                            </div>
                            <div class={style.eye}></div>
                        </div>
                        <div class={style.collar}></div>
                    </div>
                    <div class={style.legs}>
                        <div class={style.leg}>
                            <div class={style.fur}></div>
                            <div class={style.legInner}>
                                <div class={style.fur}></div>
                            </div>
                        </div>
                        <div class={style.leg}>
                            <div class={style.fur}></div>
                            <div class={style.legInner}>
                                <div class={style.fur}></div>
                            </div>
                        </div>
                        <div class={style.leg}>
                            <div class={style.fur}></div>
                            <div class={style.legInner}>
                                <div class={style.fur}></div>
                            </div>
                        </div>
                        <div class={style.leg}>
                            <div class={style.fur}></div>
                            <div class={style.legInner}>
                                <div class={style.fur}></div>
                            </div>
                        </div>
                    </div>
                    <div class={style.tail}>
                        <div class={style.tail}>
                            <div class={style.tail}>
                                <div class={style.tailEnd}>
                                    <div class={style.tail }>
                                        <div class={style.tail}>
                                            <div class={style.tail}>
                                                <div class={style.tail}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DogSignup