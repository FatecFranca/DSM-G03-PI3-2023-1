//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// --
// ---
// ----

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
  Title,
  LabelDelete,
  ButtonDelete,
  ButtonCancelar,
  Segunda,
  LabelCliente,
  PopupJornada

} from "../Buttons/buttons.styled";

import React, { useEffect, useState } from "react";
import http from "../../db/http";

const CardVeterinarios = () => {
  const [open, setOpen] = useState(false);
  const [veterinarios, setVeterinarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [veterinarioSelecionado, setVeterinarioSelecionado] = useState(null);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
  };

  const CardVeterinario = ({ veterinario, onDelete, onEdit }) => {

    const [openDelete, setOpenDelete] = useState(false);

    const handleClickDelete = (veterinario) => {
      setVeterinarioSelecionado(veterinario.nome);
      setOpenDelete(true);
    };

    const handleCloseDelete = () => {
      setOpenDelete(false);
    };

    const handleConfirmDelete = () => {
      onDelete(veterinario._id);
      handleCloseDelete();
    };

    const handleEdit = () => {
      onEdit(veterinario._id);
    };

    return (
      <>
        <ToastContainer />
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
            <DeleteIcon onClick={() => handleClickDelete(veterinario)}></DeleteIcon>
            {openDelete && (
              <PopupJornada>
                <Title>Você tem certeza que deseja <LabelDelete>DELETAR</LabelDelete> o veterinário <LabelCliente>{veterinarioSelecionado}</LabelCliente>?</Title>
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

      toast.warn("Veterinário deletado", {
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

      fetchVeterinarios();

      setOpenDelete(false);

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
    <ToastContainer />
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
