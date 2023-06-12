import React from 'react';
import Time from '../Time/time';
import BasicMenu from '../Menu/Menu';
import { Header, Logo, ImgLogo, NomeLogo, NomeApp, FraseApp, Avatar, ImgAvatar, NomeUsuario, TimeStyle } from './header.style';

export default function CabecalhoAdmin(props) {

  return (
    <Header backgroundColor="#008080">
        <Logo>
            <ImgLogo src="../src/assets/logoPet.png" alt="Minha Figura"/>
            <NomeLogo>
                <NomeApp>PETCLINIC</NomeApp>
                <FraseApp>O melhor jeito de cuidar do seu pet</FraseApp>
            </NomeLogo>
        </Logo>
        <TimeStyle>
          <Time/>
        </TimeStyle>
        <Avatar>
            <BasicMenu/>
            <NomeUsuario margin="90px">Olá, {props.name}</NomeUsuario>
        </Avatar>
    </Header>
  )
}
