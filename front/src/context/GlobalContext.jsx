import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { Navigate, redirect } from "react-router-dom";

const GlobalContext = createContext(); //creo contexto

function GlobalContextProvider({ children }) {
  const SERVER = "http://localhost:8000/api/";
  //
  const [user, setUser] = useState(undefined); //estados globales
  const [viandero, setViandero] = useState(undefined); //estados globales
  //
  //
  async  function getViandero() {
   const arrVianderos = await axios.get(`${SERVER}viandero`);
   const vianderos = arrVianderos.data;
   // console.log("viandero: ", vianderos);
   const result = vianderos.filter(
     (viandero) => viandero.user_id === user.user.id
   );
   console.log("result: ",result[0]);
   setViandero(result[0]);
   console.log("setViandero:", viandero);
   
   if ((result[0].lenght > 1)) {
     //console.log("setViandero:", setViandero);
     console.log("Viandero:", viandero);
     
   }
 }

  useEffect(() => {
    // console.log("se modif el user->modf viandero");
    getViandero();
  }, [user]);

  const logout = async () => {
    // console.log(user.accessToken);
    setUser(undefined);
    setViandero(undefined);
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
        console.log(err.message);
      });
  };

  const contextValue = { user, setUser, logout, SERVER, viandero, getViandero }; //variable a pasar a los hijos
  return (
    <GlobalContext.Provider value={contextValue}>
      {" "}
      {/**porner .Provider  */}
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider, GlobalContext };
