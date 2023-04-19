import React from 'react';
import { Link } from 'react-router-dom';
import './btnNovaConsulta.css';

export default function BtnNovaConsulta() {
  return (
    <Link to="/NovaConsulta">
        <button class="btnNovaConsulta">Nova Consulta</button>
    </Link>
  )
}
