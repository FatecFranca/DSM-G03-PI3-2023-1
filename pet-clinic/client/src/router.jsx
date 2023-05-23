import { Fragment } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Signin from '../src/pages/Signin/Signin'
import Signup from '../src/pages/Signup/Signup'
import Cliente from '../src/pages/Cliente/Cliente'
import SigninVeterinario from '../src/pages/SigninVeterinario/SigninVeterinario'

const Private = ({Item}) => {
  return localStorage.getItem('token_API') ? Item : <Signin />
}

const RoutesApp = () => {

  const PrivateRouteCliente = ({ children, redirectTo }) => {
    const isAuthenticated = localStorage.getItem('token_API') !== null
    return isAuthenticated ? children : <Navigate to={redirectTo} />
  }

  // const PrivateRouteVeterinario = ({ children, redirectTo }) => {
  //   const isAuthenticated = localStorage.getItem('crmv_API') !== null
  //   return isAuthenticated ? children : <Navigate to={redirectTo} />
  // }

  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/portalvet" element={<SigninVeterinario />} />

                
                <Route exact path="/veterinario" element={<Veterinario />} />
                {/* <Route path="/veterinario" element={<PrivateRouteVeterinario redirectTo='/'> <Veterinario /> </PrivateRouteVeterinario>}/> */}

                <Route path="/signup" element={<Signup />} />
                
                <Route path="*" element={<Signin />} />

            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp