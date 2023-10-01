import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";

const GlobalContext = createContext(); //creo contexto
function GlobalContextProvider({ children }) {
  const SERVER = "http://localhost:8000/api/";
  //
  const [user, setUser] = useState(undefined); //estados globales
  //
  const logout = async () => {
    console.log(user.accessToken);
    setUser(undefined);
    await axios("http://localhost:8000/api/logout", {
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + user.accessToken,
      },
    })
      .then((res) => {
        console.log(res);
        // navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const contextValue = { user, setUser, logout, SERVER }; //variable a pasar a los hijos
  return (
    <GlobalContext.Provider value={contextValue}>
      {" "}
      {/**porner .Provider  */}
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, GlobalContext };
