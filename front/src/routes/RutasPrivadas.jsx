import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Navigate } from "react-router-dom";

const RutasPrivadas = ({ children }) => {
  const { user } = useContext(GlobalContext);
  console.log("fx rutas prov privadas")
  return (user?.user ? children : <Navigate to="/login" />);
};

export default RutasPrivadas;
