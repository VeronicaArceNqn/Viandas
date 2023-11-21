import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const RutasPublicas = ({ children }) => {
  const { user } = useContext(GlobalContext);

  return !user?.user?.id ? children : <Navigate to="/" />;
};

export default RutasPublicas;
