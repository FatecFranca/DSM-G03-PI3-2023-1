import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Signin from '../src/pages/Signin/Signin'
import Signup from '../src/pages/Signup/Signup'
import Cliente from '../src/pages/Cliente/Cliente'
<<<<<<< HEAD
=======
import SigninVeterinario from '../src/pages/SigninVeterinario/SigninVeterinario'
>>>>>>> origin/higorBraga

const Private = ({Item}) => {
  return localStorage.getItem('token_API') ? Item : <Signin />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route path="/" element={<Signin />} />
                <Route path="/veterinario" element={<SigninVeterinario />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="/portalvet" element={<SigninVeterinario />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp