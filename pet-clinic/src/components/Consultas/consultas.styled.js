import styled from 'styled-components';

export const TableContainer = styled.div`
  border-radius: 15px;
  width: 850px;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  background: #53e9dc33;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #dee2e6;
`;

export const HeaderRow = styled(Row)`
  background: #dee2e6;
  border: 1px solid #000000;
  border-radius: 15px 15px 0 0;
  font-weight: bold;
  text-align: left;
`;

export const Cell = styled.p`
  border-right: 1px solid #000000;
  flex: 1;
  padding: 0.75rem;
  vertical-align: top;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
`;

export const EvenRow = styled(Row)`
  background-color: #f5e2e2;
`;


