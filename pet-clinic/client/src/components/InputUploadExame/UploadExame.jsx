import React, { useState } from "react";
import http from "../../db/http";
import { ModalUpload } from "./uploadExame.styled";

const UploadExame = ({ isOpen, consulta_id, setIsOpen }) => {
  const [nome, setNome] = useState("");
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  if (!isOpen) {
    return null;
  }

  const handleChangeIsOpen = () => {
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
    <ModalUpload>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome:</label>
            <input type="text" value={nome} onChange={handleNomeChange} />
          </div>
          <div>
            <label>Imagem:</label>
            <input type="file" onChange={handleFileChange} />
          </div>
          <button type="submit">Enviar</button>
        </form>

        {message && <p>{message}</p>}

        <button onClick={handleChangeIsOpen}>Fechar</button>
      </div>
    </ModalUpload>
  );
};

export default UploadExame;
