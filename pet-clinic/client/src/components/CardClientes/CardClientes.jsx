//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  CardUsers,
  CardEmail,
  CardButton,
  CardMap,
  ButtonNewAdmin,
  LabelMap,
  CardUsersEmail,
  PopupAdmin,
  TitleAdmin,
  LabelAdmin,
  ButtonAdmin,
  CardAdmin,
  PopupJornada,
  Title,
  LabelDelete,
  ButtonDelete,
  ButtonCancelar,
  Segunda,
  LabelCliente
} from '../Buttons/buttons.styled';

import React, { useEffect, useState } from 'react';
import http from "../../db/http";

const CardClientes = () => {

  const [open, setOpen] = useState(false);
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };


  const CardCliente = ({ cliente, onDelete, onEdit }) => {

    const [openDelete, setOpenDelete] = useState(false);

    const handleClickDelete = (cliente) => {
      setClienteSelecionado(cliente.nome);
      setOpenDelete(true);
    };

    const handleCloseDelete = () => {
      setOpenDelete(false);
    };

    const handleConfirmDelete = () => {
      onDelete(cliente._id);
      handleCloseDelete();
    };

    const handleEdit = () => {
      onEdit(cliente._id);
    };

    return (
      <>
        <ToastContainer />
        <CardAdmin>
          <CardUsersEmail>
            <CardUsers>
              <LabelAdmin>{cliente.nome} </LabelAdmin>
            </CardUsers>
            <CardEmail>
              <LabelAdmin>{cliente.email} </LabelAdmin>
            </CardEmail>
          </CardUsersEmail>
          <CardButton>
            <span onClick={handleEdit}><EditIcon /></span>
            <DeleteIcon onClick={() => handleClickDelete(cliente)}></DeleteIcon>
            {openDelete && (
              <PopupJornada>
                <Title>Você tem certeza que deseja <LabelDelete>DELETAR</LabelDelete> o cliente <LabelCliente>{clienteSelecionado}</LabelCliente>?</Title>
                <Segunda>
                  <ButtonDelete onClick={handleConfirmDelete}>Deletar</ButtonDelete>
                  <ButtonCancelar onClick={handleCloseDelete}>Cancelar</ButtonCancelar>
                </Segunda>
              </PopupJornada>
            )}
          </CardButton>
        </CardAdmin>
      </>

    );
  };


  useEffect(() => {
    fetchClientes();
    const intervalId = setInterval(fetchClientes, 90000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchClientes = async () => {
    try {
      const token = localStorage.getItem('token_API');
      const response = await http.get('/admin/users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setClientes(response.data.users);
      setLoading(false);
      console.log('Response:', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteCliente = async (cliente_id) => {
    console.log(cliente_id);
    try {
      const token = localStorage.getItem('token_API');
      const response = await http.delete(`/admin/users`, {
        data: {
          cliente_id: cliente_id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.warn("Cliente deletado", {
        className: "error-toast",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

      fetchClientes();
      setOpenDelete(false);

      console.log(response)

    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCliente = (cliente_id) => {
    console.log('Editar cliente:', cliente_id);
  };

  return (
    <>
      <ToastContainer />
      <div>
        <ButtonNewAdmin onClick={handleClick}>Clientes</ButtonNewAdmin>

        {open && (
          <PopupAdmin>
            <TitleAdmin>Clientes Cadastrados</TitleAdmin>
            <CardMap>
              <LabelMap>Nome: </LabelMap>
              <LabelMap>Email: </LabelMap>
            </CardMap>
            {loading ? (
              <LabelAdmin>Carregando clientes...</LabelAdmin>
            ) : (
              (Array.isArray(clientes) && clientes.length > 0) ? (
                clientes.map((cliente) => (
                  <CardCliente
                    key={cliente._id}
                    cliente={cliente}
                    onDelete={handleDeleteCliente}
                    onEdit={handleEditCliente}
                  />
                ))
              ) : (
                <LabelAdmin>Nenhum cliente encontrado.</LabelAdmin>
              )
            )}
            <ButtonAdmin onClick={handleClose}>Fechar</ButtonAdmin>
          </PopupAdmin>
        )}

      </div>
    </>
  );
};

export default CardClientes;