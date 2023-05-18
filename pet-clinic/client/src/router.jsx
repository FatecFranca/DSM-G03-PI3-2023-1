import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Signin from '../src/pages/Signin/Signin'
import Signup from '../src/pages/Signup/Signup'
import Cliente from '../src/pages/Cliente/Cliente'
import Admin from '../src/pages/Admin/Admin'
import SigninVeterinario from '../src/pages/SigninVeterinario/SigninVeterinario'

// const Private = ({Item}) => {
//   return localStorage.getItem('token_API') ? Item : <Signin />
// }

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/cliente" element={<Private Item={Cliente} />} />
                <Route exact path="/admin" element={<Admin />} />
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