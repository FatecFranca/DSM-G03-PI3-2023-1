import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import useAuth from '../src/hooks/useAuth'
import Signin from '../src/pages/Signin/Signin'
import Signup from '../src/pages/Signup/Signup'
import Cliente from '../src/pages/Cliente/Cliente'
import SigninVeterinario from '../src/pages/SigninVeterinario/SigninVeterinario'

const Private = ({Item}) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Signin />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/cliente" element={<Private Item={Cliente} />} />
                <Route path="/" element={<Signin />} />
                <Route path="/veterinario" element={<SigninVeterinario />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp