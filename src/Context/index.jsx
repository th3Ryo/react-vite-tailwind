import React from "react";
import { createContext, useState } from "react";

export const StoreContext = createContext({});



export const StoreProvider = ({ children }) => {
  const [count, setCount] = useState(0); // Estado para contar los elementos del carrito
  return <StoreContext.Provider value={{
    count,
    setCount
  }}>
    {children}
  </StoreContext.Provider>;
};


