import styled from 'styled-components';

// CARD ANIMAL

export const Animal = styled.div`
  width: 100%;
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
    font-size: 1em;
  }
`;

export const AnimalListInput = styled.input`
  display: none;

  &:checked + ${AnimalListLabel} {
    color: #008080;
    font-size: 1.5em;
  }
`;

export const CardAnimal = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardAnimalInicial = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 200px;
  height: 156px;
  margin-bottom: 20px;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;

  & img {
    margin-top: 40px;
  }
`;

export const CardAnimalInfos = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.6);
  border-radius: 15px;
  width: 200px;
  height: 156px;
`;

export const AnimalInfo = styled.div`
  position: absolute;
  left: -280px;
  top: -50px;
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
    margin-left: 40px;
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
  margin-top: 5px;
  margin-left: 15px;
  list-style: disc;
`;

export const CardAnimalInfoItem = styled.li`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  letter-spacing: 0.04em;
  margin-left: 14px;
  padding: 0.15em;
`;

export const ContainerAll = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TableContainer = styled.div`
  border-radius: 15px;
  width: 70%;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  line-height: 1.5;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  
  &:first-child {
    border-radius: 15px 15px 0 0;
  }
`;

export const HeaderRow = styled(Row)`
  background: #dee2e6;
  font-weight: bold;
  text-align: left;
  height: 30px;
`;

export const Cell = styled.p`
  flex: 1;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  align-items: center;

  img {
    width: 25px;
    justify-content: center;
    align-items: center;
  }

  button {
    background-color: transparent;
    width: 80%;
    height: 80%;
    justify-content: center;
    align-items: center;
  }
`;

export const EvenRow = styled(Row)`
  background-color: #f5e2e2;
`;