import React from 'react';
import { Link } from 'react-router-dom';
import './buttonPet.css';

export default function ButtonPet() {
  return (
    <Link to="/CadastroPet">
        <button class="buttonPet">Novo Pet</button>
    </Link>
  )
}
