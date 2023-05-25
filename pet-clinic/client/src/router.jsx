import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signin from "../src/pages/Signin/Signin";
import Signup from "../src/pages/Signup/Signup";
import Cliente from "../src/pages/Cliente/Cliente";
import SigninVeterinario from "../src/pages/SigninVeterinario/SigninVeterinario";
import Veterinario from "../src/pages/Veterinario/Veterinario";

import validateToken from "./db/validateToken";

// TESTE Cadastro de Veterinario
import SignupVet from "./pages/TESTESignupVet/SignupVet";

const RoutesApp = () => {
  const PrivateRoute = ({ redirectTo, bdUrl, children }) => {
    const token = localStorage.getItem("token_API");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
      validateToken(token, bdUrl)
        .then((result) => {
          setIsAuthenticated(result);
        })
        .catch(() => {
          setIsAuthenticated(false);
        });
    }, [token, bdUrl]);

    if (isAuthenticated) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/cliente"
          element={
            <PrivateRoute redirectTo="/" bdUrl={"/cliente"}>
              <Cliente />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Signin />} />
        <Route path="/portalvet" element={<SigninVeterinario />} />
        <Route exact path="/veterinario" element={<Veterinario />} />
        <Route path="/signup" element={<Signup />} />

        {/* TESTE Cadastro veterinario */}
        <Route path="/signupvet" element={<SignupVet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
