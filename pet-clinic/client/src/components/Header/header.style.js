import styled from 'styled-components';

// HEADER

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 108px;
  left: 0px;
  top: 0px;
  background: ${props => props.backgroundColor || 'transparent'};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.div`
  display: flex;
  width: 290px;
  height: 60px;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 0px 15px 15px 0px;
`;

export const ImgLogo = styled.img`
  margin-left: 10px;
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
  width: 250px;
  height: 100%;
  top: 0;
`;

export const Avatar_vet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 80%;
`;

export const Avatar_text = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  text-align: right;
  width: 100%;
`;

export const ImgAvatar = styled.img`
  padding: 5px;
`;

export const Usuario = styled.p`
  display: block;
  text-align: right;
  justify-content: end;
  align-items: end;
  height: 100%;
  width: 310px;
  top: 0;
  margin-right: 1.5%;
`;

export const NomeUsuario = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: right;
`;

export const TipoUsuario = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 1000;
  font-size: 22px;
`;