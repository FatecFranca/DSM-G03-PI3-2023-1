import React, { useEffect, useState } from 'react';
import http from "../../db/http";

const CardVeterinarios = () => {

  const CardVeterinario = ({ veterinario, onDelete, onEdit }) => {
    const handleDelete = () => {
      onDelete(veterinario._id);
    };

    const handleEdit = () => {
      onEdit(veterinario._id);
    };

    return (
      <div>
        <h3>{veterinario.nome}</h3>
        <p>{veterinario.email}</p>
        <button onClick={handleDelete}>Excluir</button>
        <button onClick={handleEdit}>Editar</button>
      </div>
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
      console.log('Response Veterinarios:', response.data);
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
    <div>
      <h2>Veterinarios</h2>
      {loading ? (
        <p>Carregando veterinarios...</p>
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
          <p>Nenhum veterinario encontrado.</p>
        )
      )}
    </div>
  );
};

export default CardVeterinarios;