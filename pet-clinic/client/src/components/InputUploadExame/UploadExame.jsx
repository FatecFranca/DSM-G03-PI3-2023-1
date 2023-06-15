import React, { useState } from "react";
import http from "../../db/http";
import {
  PopupUpload,
  TitleUpload,
  LabelUpload,
  InputUpload,
  ButtonFechar,
  ButtonEnviar,
  ButtonUpload,
  NomeUpload,
  ImageUpload,
} from "./uploadExame.styled";

const UploadExame = ({ isOpen, consulta_id, setIsOpen }) => {
  const [nome, setNome] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleChangeIsOpen = () => {
    setMessage("");
    setNome("");
    setFile(null);
    setIsOpen(false);
  };

  const handleNomeChange = (e) => {
    setNome(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token_API");
      const formData = new FormData();
      formData.append("nome", nome);
      formData.append("file", file);
      formData.append("consulta_id", consulta_id);

      const response = await http.post("/consulta/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage(response.data.response);
    } catch (error) {
      console.log(error);
      setMessage("Erro ao fazer o upload da imagem.");
    }
  };

  return (
    <PopupUpload>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <TitleUpload>Adicione aqui o Exame do paciente</TitleUpload>
          <div>
            <NomeUpload>
              <LabelUpload>Tipo do Exame:</LabelUpload>
              <InputUpload
                type="text"
                value={nome}
                onChange={handleNomeChange}
                placeholder="Escreva o nome do exame"
              />
            </NomeUpload>
            <ImageUpload>
              <LabelUpload>Anexar Imagem:</LabelUpload>
              <InputUpload type="file" onChange={handleFileChange} />
            </ImageUpload>
          </div>
          <ButtonUpload>
            <ButtonEnviar type="submit" onClick={handleSubmit}>
              Enviar
            </ButtonEnviar>
            <ButtonFechar onClick={handleChangeIsOpen}>Fechar</ButtonFechar>
          </ButtonUpload>
          {message && <p>{message}</p>}
        </form>
      </div>
    </PopupUpload>
  );
};

export default UploadExame;
