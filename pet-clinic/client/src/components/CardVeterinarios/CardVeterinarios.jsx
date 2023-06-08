import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// --

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
  CardAdmin,
} from "../Buttons/buttons.styled";

import React, { useEffect, useState } from "react";
import http from "../../db/http";

const CardVeterinarios = () => {
  const [open, setOpen] = useState(false);
  const [veterinarios, setVeterinarios] = useState([]);
  const [loading, setLoading] = useState(true);

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
          <span onClick={handleEdit}>
            <EditIcon />
          </span>
          <span onClick={handleDelete}>
            <DeleteIcon />
          </span>
        </CardButton>
      </CardAdmin>
    );
  };

  useEffect(() => {
    fetchVeterinarios();
    const intervalId = setInterval(fetchVeterinarios, 90000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const fetchVeterinarios = async () => {
    try {
      const token = localStorage.getItem("token_API");
      const response = await http.get("/admin/vets", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setVeterinarios(response.data.users);
      setLoading(false);
      console.log("Response:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteVeterinario = async (vet_id) => {
    console.log(vet_id);
    try {
      const token = localStorage.getItem("token_API");
      const response = await http.delete(`/admin/vets`, {
        data: {
          vet_id: vet_id,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchVeterinarios();

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditVeterinario = (vet_id) => {
    console.log("Editar veterinario:", vet_id);
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
            ) : Array.isArray(veterinarios) && veterinarios.length > 0 ? (
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
            )}
            <ButtonAdmin onClick={handleClose}>Fechar</ButtonAdmin>
          </PopupAdmin>
        )}
      </div>
    </>
  );
};

export default CardVeterinarios;
