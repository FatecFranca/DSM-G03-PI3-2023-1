import styled from 'styled-components';

// BOTOES

export const ButtonNew = styled.button`
  border-radius: 10px;
  background: #008080;
  width: 185px;
  height: 37px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  margin-right: 50px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #127171;
    cursor: pointer;
  }
`;

// POP UP

export const Popup = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 480px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
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
