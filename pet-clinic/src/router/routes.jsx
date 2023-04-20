import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header/header';
import Home from '../pages/Home/Home';

// Criação de rotas
function RoutesApp() {
    return (
        <div>
            <BrowserRouter>
                <Header name="Pedro Neves"/>
                <Routes>
                    <Route path='/' element={ <Home/> } />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default RoutesApp;