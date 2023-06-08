import React from 'react';
import Time from '../Time/time';
import BasicMenu from '../Menu/Menu';
import { Header, Logo, ImgLogo, NomeLogo, NomeApp, FraseApp, Avatar, ImgAvatar, NomeUsuario } from './header.style';

export default function CabecalhoCliente(props) {

  return (
    <Header backgroundColor="#FFB505">
        <Logo>
            <ImgLogo src="../src/assets/logoPet.png" alt="Minha Figura"/>
            <NomeLogo>
                <NomeApp>PETCLINIC</NomeApp>
                <FraseApp>O melhor jeito de cuidar do seu pet</FraseApp>
            </NomeLogo>
        </Logo>
        <Time/>
        <Avatar>
            <BasicMenu/>
            <NomeUsuario margin="90px">Olá, {props.name}</NomeUsuario>
        </Avatar>
    </Header>
  )
}
