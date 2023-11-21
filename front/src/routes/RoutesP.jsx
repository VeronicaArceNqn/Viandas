import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Home from "../components/Home";
import RutasPublicas from "./RutasPublicas";
import RutasPrivadas from "./RutasPrivadas";
import RoutesPriv from "./RoutesPriv";
import { GlobalContext, GlobalContextProvider } from "../context/GlobalContext";
import Ubicar from "../components/Ubicar";
import { CarritoProvider } from "../context/CarritoProvider";
import Loggin from "../components/Login";
import Register from "../components/Register";

const RoutesP = () => {
  // const { user } = useContext(GlobalContext);

  return (
   <GlobalContextProvider>
    <CarritoProvider>
    <Ubicar/>
          <Routes>
            <Route
              path="/"
              element={
                <RutasPublicas>
                  <Home />
                </RutasPublicas>
              }
            />

            <Route
              path="/login"
              element={
                <RutasPublicas>
                  < Loggin/>
                </RutasPublicas>
              }
            />

            <Route
              path="/register"
              element={
                <RutasPublicas>
                  <Register />
                </RutasPublicas>
              }
            />
            {/* <Route
               path="/*"
                element={
                  <Navigate to="/" />
                }
                />
             */}

            <Route
              path="/*"
              element={
                <RutasPrivadas>
                  <RoutesPriv />
                </RutasPrivadas>
              }
            />
          </Routes>
    </CarritoProvider>
   </GlobalContextProvider>
      
  );
};

export default RoutesP;
