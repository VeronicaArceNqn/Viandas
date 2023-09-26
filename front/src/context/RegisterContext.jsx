import React, { createContext, useState } from 'react'

const RegisterContext = createContext()
const getProdut = ()=>{
    "hola"
}

 function RegisterContextProvider({children}) {
    const [color,setColor] = useState('verde');

    const contextValue = {color,setColor}


  return (
    <RegisterContext.Provider value={contextValue} >
        {children}
    </RegisterContext.Provider>
  )
}

export{RegisterContextProvider,RegisterContext}