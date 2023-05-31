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
  CardAdmin
} from '../Buttons/buttons.styled';

import React, { useEffect, useState } from 'react';
import http from "../../db/http";

const CardClientes = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CardCliente = ({ cliente, onDelete, onEdit }) => {
    const handleDelete = () => {
      onDelete(cliente._id);
    };

    const handleEdit = () => {
      onEdit(cliente._id);
    };

    return (
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
          <span onClick={handleDelete}><DeleteIcon /></span>
        </CardButton>
      </CardAdmin>
    );
  };

  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClientes();
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

  const handleDeleteCliente = async (clienteId) => {
    try {
      const token = localStorage.getItem('token_API');
      await http.delete(`/admin/users/${clienteId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchClientes();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditCliente = (clienteId) => {
    console.log('Editar cliente:', clienteId);
  };

  return (
    <>
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