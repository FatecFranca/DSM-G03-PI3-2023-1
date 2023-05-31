import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  CardUsers,
  CardEmailVet,
  CardButton,
  CardMapVet,
  CardCrmv,
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

const CardVeterinarios = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const CardVeterinario = ({ veterinario, onDelete, onEdit }) => {
    const handleDelete = () => {
      onDelete(veterinario._id);
    };

    const handleEdit = () => {
      onEdit(veterinario._id);
    };

    return (
      <CardAdmin>
        <CardUsersEmail>
          <CardUsers>
            <LabelAdmin>{veterinario.nome} </LabelAdmin>
          </CardUsers>
          <CardEmailVet>
            <LabelAdmin>{veterinario.email} </LabelAdmin>
          </CardEmailVet>
          <CardCrmv>
            <LabelAdmin>{veterinario.crmv} </LabelAdmin>
          </CardCrmv>
        </CardUsersEmail>
        <CardButton>
          <span onClick={handleEdit}><EditIcon /></span>
          <span onClick={handleDelete}><DeleteIcon /></span>
        </CardButton>
      </CardAdmin>
    );
  };

  const [veterinarios, setVeterinarios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVeterinarios();
  }, []);

  const fetchVeterinarios = async () => {
    try {
      const token = localStorage.getItem('token_API');
      const response = await http.get('/admin/vets', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVeterinarios(response.data.users);
      setLoading(false);
      console.log('Response:', response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteVeterinario = async (veterinarioId) => {
    try {
      const token = localStorage.getItem('token_API');
      await http.delete(`/admin/vets/${veterinarioId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVeterinarios();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditVeterinario = (veterinarioId) => {
    console.log('Editar veterinario:', veterinarioId);
  };

  return (
    <>
      <div>
        <ButtonNewAdmin onClick={handleClick}>Veterinarios</ButtonNewAdmin>

        {open && (
          <PopupAdmin>
            <TitleAdmin>Veterinarios Cadastrados</TitleAdmin>
            <CardMapVet>
              <LabelMap>Nome: </LabelMap>
              <LabelMap>Email: </LabelMap>
              <LabelMap>CRMV: </LabelMap>
            </CardMapVet>
            {loading ? (
              <LabelAdmin>Carregando veterinarios...</LabelAdmin>
            ) : (
              (Array.isArray(veterinarios) && veterinarios.length > 0) ? (
                veterinarios.map((veterinario) => (
                  <CardVeterinario
                    key={veterinario._id}
                    veterinario={veterinario}
                    onDelete={handleDeleteVeterinario}
                    onEdit={handleEditVeterinario}
                  />
                ))
              ) : (
                <LabelAdmin>Nenhum veterinario encontrado.</LabelAdmin>
              )
            )}
            <ButtonAdmin onClick={handleClose}>Fechar</ButtonAdmin>
          </PopupAdmin>
        )}

      </div>
    </>
  );
};

export default CardVeterinarios;