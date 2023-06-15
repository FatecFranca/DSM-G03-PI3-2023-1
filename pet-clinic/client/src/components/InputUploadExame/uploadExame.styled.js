import styled from "styled-components";

export const ModalUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  .container {
    background-color: #e3e3e3;
    border: solid #000;
    padding: 1.5vw;
  }

  label {
    font-size: 1.1rem;
    font-weight: 2rem;
    padding: 1vw;
  }
`;

export const TitleUpload = styled.h1`
  border-radius: 10px;
  color:  #127171;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(31, 73, 125, 0.8);
`;

export const PopupUpload = styled.div`
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(31, 73, 125, 0.8);
   z-index: 9999;
`;

export const ButtonUpload = styled.div`
 display: flex;
 justify-content: space-between;
`;

export const NomeUpload = styled.div`
 display: flex;
 flex-direction: column;
 gap: 5px;
 margin-top: 15px;
`;

export const ImageUpload = styled.div`
 display: flex;
 flex-direction: column;
 margin-top: 10px;
 gap: 5px;
`;

export const LabelUpload = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

export const InputUpload = styled.input`
  display: flex;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  color: #000000;
  padding: 5px;
  width: 350px;
  
 
`;

export const ButtonFechar  = styled.div`
  align-items: center;
  background: #1D4569;
  border-radius: 10px; 
  display: flex;
  color: #ffffff;
  cursor: pointer;  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  line-height: 16px;
  margin-top: 20px;
  width: 100px;
  height: 30px;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background: #21527c;
    cursor: pointer;
  }
`;

export const ButtonEnviar  = styled.div`
  align-items: center;
  background: #008080;
  border-radius: 10px; 
  display: flex;
  color: #ffffff;
  cursor: pointer;  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  line-height: 16px;
  margin-top: 20px;
  width: 100px;
  height: 30px;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background: #127171;
    cursor: pointer;
  }
`;