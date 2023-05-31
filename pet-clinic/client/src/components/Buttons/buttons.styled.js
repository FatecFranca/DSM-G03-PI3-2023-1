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

export const Button = styled.div`
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


