import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ButtonPet from '../components/ButtonPet/buttonPet';
import Header from '../components/Header/header';

import Home from '../pages/Home/Home';
import CadastroPet from '../pages/CadastroPet/CadastroPet';
import NovaConsulta from '../pages/NovaConsulta/NovaConsulta';

// Criação de rotas
function RoutesApp() {
    return (
        <div>
            <BrowserRouter>
                <Header name="Pedro Neves"/>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                    <Route path='/cadastroPet' element={ <CadastroPet/> } />
                    <Route path='/novaConsulta' element={ <NovaConsulta /> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesApp;