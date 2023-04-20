import styled from 'styled-components';

// HEADER

export const Header = styled.header`
  display: flex;
  position: absolute;
  justify-content: space-between;
  width: 100%;
  height: 108px;
  left: 0px;
  top: 0px;
  background: #008080;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  display: flex;
  width: 310px;
  height: 60px;
  margin-top: 24px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0px 15px 15px 0px;
`;

export const ImgLogo = styled.img`
  margin-left: 28px;
  margin-top: 5px;
  width: 50px;
  height: 50px;
`;

export const NomeLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 204px;
  height: 48px;
`;

export const NomeApp = styled.h1`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 32px;
  margin: 0 auto;
  text-align: center;
  color: #000000;
`;

export const FraseApp = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  margin: 0 auto;
  text-align: center;
  color: #000000;
`;

export const Avatar = styled.div`
  display: flex;
  width: 185px;
  height: 60px;
  margin-top: 27px;
  margin-right: 16px;
`;

export const ImgAvatar = styled.img`
  padding: 5px;
`;

export const NomeUsuario = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`;