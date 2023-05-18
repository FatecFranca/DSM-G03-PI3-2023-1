import styled from 'styled-components';

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