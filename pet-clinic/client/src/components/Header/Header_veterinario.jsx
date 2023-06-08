import React from 'react';
import Time from '../Time/time';
import BasicMenu from '../Menu/Menu';
import { Header, Logo, ImgLogo, NomeLogo, NomeApp, FraseApp, Avatar, Avatar_vet, ImgAvatar, Usuario, NomeUsuario, TipoUsuario, Avatar_text } from './header.style';

import logoPet from '../../assets/logoPet.png'

export default function Cabecalho_veterinario(props) {

  return (
    <Header backgroundColor="#1D4569">
        <Logo>
            <ImgLogo src={logoPet} alt="Minha Figura"/>
            <NomeLogo>
                <NomeApp>PETCLINIC</NomeApp>
                <FraseApp>O melhor jeito de cuidar do seu pet</FraseApp>
            </NomeLogo>
        </Logo>
        <Time/> 
            <Usuario>
              <Avatar_vet> 
                <Avatar_text>
                  <BasicMenu/>
                  <NomeUsuario >Olá, Dr. {props.name}</NomeUsuario>
                </Avatar_text>
              </Avatar_vet>
                {/* <TipoUsuario>VETERINÁRIO</TipoUsuario> */}
            </Usuario>
    </Header>
  )
}
