import styled from 'styled-components';

// CARD ANIMAL

export const Animal = styled.div`
  width: 600px;
  height: 50px;
`;

export const AnimalList = styled.ul`
  display: flex;
`;

export const AnimalListItem = styled.li`
  padding: 0 50px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

export const AnimalListLabel = styled.label`
  &:hover {
    color: #008080;
    cursor: pointer;
    font-size: 1.5em;
    text-decoration: underline;
  }
`;

export const AnimalListInput = styled.input`
  display: none;

  &:checked + ${AnimalListLabel} {
    color: #008080;
    font-size: 1.5em;
    text-decoration: underline;
  }
`;

export const CardAnimal = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 31px;
  margin-top: 30px;
`;

export const CardAnimalInicial = styled.div`
  border: 1px solid;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 250px;
  height: 206px;
  margin-bottom: 44px;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;

  & img {
    margin-top: 50px;
  }
`;

export const CardAnimalInfos = styled.div`
  border: 1px solid;
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 250px;
  height: 206px;
`;

export const CardAnimalTitle = styled.div`
  background: #008080;
  border-radius: 15px 15px 0 0;
  color: #FFFFFF;
  display: flex;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  padding: 10px;

  & div {
    margin-left: 40px;
  }

  & span {
    padding: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CardAnimalInfoList = styled.ul`
  margin-top: 10px;
  margin-left: 25px;
  list-style: disc;
`;

export const CardAnimalInfoItem = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.04em;
  margin-left: 14px;
  padding: 0.15em;
`;

export const InputEdit = styled.input`
  border: none;
  border-bottom: 1px solid #ccc;
  background-color: #f0f0f0;
  color: #000000;
  padding: 5px;
`;