import React from "react";
import { createContext, useState } from "react";

export const StoreContext = createContext({});



export const StoreProvider = ({ children }) => {
  const [count, setCount] = useState(0); // Estado para contar los elementos del carrito
  const [isDetailOpen, setIsDetailOpen] = useState(false); // Estado para mostrar el detail el false es para que por defecto este vacio
  const openDetail = () => { setIsDetailOpen(true)   }
  const closeDetail  = () => { setIsDetailOpen(false)   }
  const toggleDetail = () =>  {
    
    setIsDetailOpen(!isDetailOpen)
    

  }

  return <StoreContext.Provider value={{
    count,
    setCount,
    isDetailOpen,
    openDetail,
    closeDetail,
  }}>
    {children}
  </StoreContext.Provider>;
};


