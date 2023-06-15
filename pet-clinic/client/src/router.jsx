import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Signin from "../src/pages/Signin/Signin";
import Signup from "../src/pages/Signup/Signup";
import Cliente from "../src/pages/Cliente/Cliente";
import SigninAdminVeterinario from "../src/pages/SigninAdminVet/SigninAdminVeterinario";
import Veterinario from "../src/pages/Veterinario/Veterinario";
import Admin from "./pages/Admin/Admin";

import Loading from '../src/components/Loading/Loading'

import validateToken from "./db/validateToken";

const RoutesApp = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  const PrivateRoute = ({ redirectTo, bdUrl, children }) => {
    const token = localStorage.getItem("token_API");

    useEffect(() => {
      const checkAuthentication = async () => {
        try {
          const result = await validateToken(token, bdUrl);
          setIsAuthenticated(result);
        } catch (error) {
          setIsAuthenticated(false);
        } finally {
          setIsCheckingAuth(false);
        }
      };

      checkAuthentication();
    }, [token, bdUrl]);

    if (isCheckingAuth) {
      return <Loading />;
    }

    if (isAuthenticated) {
      return children;
    } else {
      return <Navigate to={redirectTo} />;
    }
  };

  return (
    <BrowserRouter>
      <Routes>


        {/* TELA CLIENTE */}
        <Route
          path="/cliente"
          element={
            <PrivateRoute redirectTo="/" bdUrl={"/cliente"}>
              <Cliente />
            </PrivateRoute>
          }
        />

        {/* TELA VETERINARIO */}
        <Route
          path="/portal/vet"
          element={
            <PrivateRoute redirectTo={"/portal/signin"} bdUrl={"/vet"}>
              <Veterinario />
            </PrivateRoute>
          }
        />

        {/* TELA ADMIN */}
        <Route
          path="/portal/sec"
          element={
            <PrivateRoute redirectTo={"/portal/signin"} bdUrl={"/admin"}>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Signin />} />
        <Route path="/portal/signin" element={<SigninAdminVeterinario />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
