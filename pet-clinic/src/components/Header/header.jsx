import React from 'react';
import Time from '../Time/time';
import { Header, Logo, ImgLogo, NomeLogo, NomeApp, FraseApp, Avatar, ImgAvatar, NomeUsuario } from './header.style';

export default function Cabecalho(props) {
  return (
    <Header>
        <Logo>
            <ImgLogo src="../src/assets/logoPet.png" alt="Minha Figura"/>
            <NomeLogo>
                <NomeApp>PETCLINIC</NomeApp>
                <FraseApp>O melhor jeito de cuidar do seu pet</FraseApp>
            </NomeLogo>
        </Logo>
        <Time/>
        <Avatar>
            <ImgAvatar src="../src/assets/userImg.png"/>
            <NomeUsuario>Ola, {props.name}</NomeUsuario>
        </Avatar>
    </Header>
  )
}
