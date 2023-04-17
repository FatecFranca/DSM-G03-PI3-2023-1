import React from 'react';
import Time from '../Time/time';
import './style.css';

export default function Header(props) {
  return (
    <div class="header">
        <div class="header__logo">
            <img class="header__img-logo" src="../src/assets/logoPet.png" alt="Minha Figura"/>
            <div class="header__nome-logo">
                <p id="nome-app">PETCLINIC</p>
                <p id="frase-app">O melhor jeito de cuidar do seu pet</p>
            </div>
        </div>
        <div class="header__date-time">
            <Time/>
        </div>
        <div class="header__avatar">
            <img class="header__img-avatar" src="../src/assets/userImg.png"/>
            <p class="header__nome-usuario">Ola, {props.name}</p>
        </div>
    </div>
  )
}
