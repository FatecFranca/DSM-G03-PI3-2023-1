import { Fragment } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import useAuth from '../src/hooks/useAuth'

import Home from '../src/pages/Home/Home'
import Signin from '../src/pages/Signin/Signin'
import Signup from '../src/pages/Signup/Signup'

const Private = ({Item}) => {
    const {signed} = useAuth();

    return signed > 0 ? <Item /> : <Signin />
}

const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Private Item={Home} />} />
                <Route path="/" element={<Signin />} />
                <Route exact path="/signup" element={<Signup />} />
                <Route path="*" element={<Signin />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp