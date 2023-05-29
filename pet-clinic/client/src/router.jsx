import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signin from "../src/pages/Signin/Signin";
import Signup from "../src/pages/Signup/Signup";
import Cliente from "../src/pages/Cliente/Cliente";
import SigninVeterinario from "../src/pages/SigninAdminVet/SigninAdminVeterinario";
import Veterinario from "../src/pages/Veterinario/Veterinario";

import validateToken from "./db/validateToken";

// TESTE Cadastro de Veterinario
import SignupVet from "./pages/TESTESignupVet/SignupVet";

const RoutesApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({ redirectTo, bdUrl, children }) => {
    const token = localStorage.getItem("token_API");

    useEffect(() => {
      validateToken(token, bdUrl)
        .then((result) => {
          setIsAuthenticated(result);
          console.log(isAuthenticated);
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

        <Route
          path="/portal/vet"
          element={
            <PrivateRoute redirectTo={"/portal/singin"} bdUrl={"vet"}>
              <Veterinario />
            </PrivateRoute>
          }
        />
        <Route
          path="/portal/sec"
          element={
            <PrivateRoute redirectTo={"/portal/singin"} bdUrl={"admin"}>
              <div>Tela Admin</div>
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Signin />} />
        <Route path="/portal/singin" element={<SigninVeterinario />} />
        <Route path="/signup" element={<Signup />} />

        {/* TESTE Cadastro veterinario */}
        <Route path="/signupvet" element={<SignupVet />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
