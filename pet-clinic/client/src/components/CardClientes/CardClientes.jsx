import React, { useEffect, useState } from 'react';
import http from "../../db/http";

const CardClientes = () => {
  
  const CardCliente = ({ cliente, onDelete, onEdit }) => {
    const handleDelete = () => {
      onDelete(cliente._id);
    };

    const handleEdit = () => {
      onEdit(cliente._id);
    };

    return (
      <div>
        <h3>{cliente.nome}</h3>
        <p>{cliente.email}</p>
        <button onClick={handleDelete}>Excluir</button>
        <button onClick={handleEdit}>Editar</button>
      </div>
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
    <div>
      <h2>Clientes</h2>
      {loading ? (
        <p>Carregando clientes...</p>
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
          <p>Nenhum cliente encontrado.</p>
        )
      )}
    </div>
  );
};

export default CardClientes;