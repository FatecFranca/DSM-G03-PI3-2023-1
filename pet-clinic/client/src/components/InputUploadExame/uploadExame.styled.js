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
