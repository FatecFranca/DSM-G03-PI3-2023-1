import styled from 'styled-components';

// CARD ANIMAL

export const Animal = styled.div`
  width: 600px;
  height: 50px;
`;

export const AnimalList = styled.ul`
  display: flex;
  list-style-type: none;
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
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  padding: 10px;

  & a {
    margin-left: 80px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    &:hover {
      cursor: pointer;
      font-size: 14px;
    }
  }
`;

export const CardAnimalInfoList = styled.ul`
  margin-top: 10px;
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