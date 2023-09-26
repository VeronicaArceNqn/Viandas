import React, { createContext, useState } from 'react'

const GlobalContext = createContext()
const getProdut = ()=>{
    "holadddd"
}

 function GlobalContextProvider({children}) {
    const [user,setUser] = useState();

    const contextValue = {user,setUser,}


  return (
    <GlobalContext.Provider value={contextValue} >
        {children}
    </GlobalContext.Provider>
  )
}

export{GlobalContextProvider,GlobalContext}