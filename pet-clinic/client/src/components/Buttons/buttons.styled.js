import styled from 'styled-components';

// BOTOES LOGIN 

export const ButtonLogin = styled.button`
  padding: 16px;
    outline: none;
    border: none;
    border-radius: 5px;
    width: 250px;
    height: 50px;
    background-color: #F14827;
    color: white;
    font-weight: 600;
    font-size: 16px;
    max-width: 350px;


  &:hover {
    background: #F14850;
    cursor: pointer;
  }
`;

// BOTOES PAGINAS

export const ButtonNew = styled.button`
  border-radius: 10px;
  background: #008080;
  color: #FFFFFF;
  width: 185px;
  height: 37px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  margin-right: 50px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #127171;
    cursor: pointer;
  }
`;

// POP UP

export const Title = styled.h1`
  border-radius: 10px;
  color:  #127171;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0,139,139, 0.5);
`;

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  min-height: 300px;
  height: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,139,139, 1.0);
  z-index: 9999;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Label = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  color: #000000;
  padding: 5px;
`;

export const Select = styled.select`
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  color: #000000;
  padding: 5px;
`;

export const Option = styled.option`
  background-color: #ccc;
  color: #000000;
  padding: 5px;
`;

export const Button  = styled.div`
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


// -------------------POPUP ADMIN--------------------

export const ButtonNewAdmin = styled.button`
  border-radius: 10px;
  background: #008080;
  color: #FFFFFF;
  width: 185px;
  height: 37px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  margin-left: 30px;
  padding: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #127171;
    cursor: pointer;
  }
`;

// POP UP

export const TitleAdmin = styled.h1`
  border-radius: 10px;
  color:  #127171;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(0,139,139, 0.5);
`;

export const PopupAdmin = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: auto;
  width: 1000px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,139,139, 1.0);
   z-index: 9999;
`;

export const CardAdmin = styled.div`
  display: flex;
  background-color: #c8f7f7;
  justify-content: space-between;
  align-items: center;
  margin: 1px;
`;

export const CardUsersEmail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardUsers = styled.div`
  width: 40%;
 
`;


export const CardEmail = styled.div`
 width: 52%;


`;

export const CardCrmv = styled.div`
 width: 30%;
 

`;

export const CardEmailVet = styled.div`
 width: 40%;

`;


export const CardButton = styled.div`
 display: flex;
 justify-content: space-between;
 width: 7%;
  
`;

export const CardMap = styled.div`
 display: flex;
 gap: 370px;
 margin-bottom: 5px;
`;

export const CardMapVet = styled.div`
 display: flex;
 gap: 270px;
 margin-bottom: 5px;
`;

export const LabelAdmin = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
`;

export const LabelMap = styled.label`
display: flex;
justify-content: flex-start;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
`;


export const ButtonAdmin = styled.div`
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

export const ButtonJornada  = styled.div`
  align-items: center;
  background: #ffff00;
  border-radius: 10px; 
  display: flex;
  color: #000000;
  cursor: pointer;  
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  justify-content: center;
  line-height: 16px;
  margin-top: 20px;
  width: 200px;
  height: 30px;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background: #ffff3d;
    cursor: pointer;
  }
`;

export const PopupJornada = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  min-height: 200px;
  height: auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0,139,139, 1.0);
  z-index: 9999;
`;

export const InputJornada = styled.input`
  display: flex;
  text-align: center;
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #ccc;
  color: #000000;
  padding: 5px;
  width: 70px;

 
`;

export const InputJornadaCheck = styled.input`
  
`;

export const Domingo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;

  
`;

export const Segunda = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;

export const Terca = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;

  
`;


export const Quarta = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;


export const Quinta = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;


export const Sexta = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;


export const Sabado = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;

export const LabelJornada = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

`;

export const ButtonDelete  = styled.div`
  align-items: center;
  background: #ff0000;
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
    background: #ce2c00;
    cursor: pointer;
  }
`;

export const ButtonCancelar  = styled.div`
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

export const LabelDelete = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: #ff0000;

`;

export const LabelCliente = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 16px;
  color: black;

`;

// --------------********CONSULTAS_VETERINARIO********--------------

export const TableContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
width: 100%;

  padding-right: 300px;

`;

export const CardVet = styled.div`
  display: flex;
  
  margin: 1px;
  width: 100%;
  height: auto;

  background-color: #9ac6ed;
  
`;

export const CardDataVet = styled.div`

display: flex;
align-items: center;
justify-content: center;

  width: 20%;


`;

export const CardHoraVetVet = styled.div`

display: flex;
align-items: center;
justify-content: center;

 width: 20%;

 


`;

export const CardPetVet = styled.div`
display: flex;
align-items: center;
justify-content: center;

 width: 20%;

 

`;

export const CardMotivoVet = styled.div`
display: flex;
align-items: center;
justify-content: center;
  width: 20%;


 

`;

export const Upload = styled.div`

display: flex;
align-items: center;
justify-content: center;

 width: 20%;

`;

export const LabelVet = styled.label`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const LabelTitleVet = styled.label`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size:25px;
  line-height: 16px;
  
  margin-bottom: 30px;
  margin-top: 15px;
`;


