import React from "react";
import { createContext, useState } from "react";

export const StoreContext = createContext({});



export const StoreProvider = ({ children }) => {
  //shoppint cart - contador  
  const [count, setCount] = useState(0); // Estado para contar los elementos del carrito
  //detail card - open close  
  const [isDetailOpen, setIsDetailOpen] = useState(false); // Estado para mostrar el detail el false es para que por defecto este vacio
  const openDetail = (data) => {setIsDetailOpen(true)};
  const closeDetail  = () => { setIsDetailOpen(false)   }
  const toggleDetail = () =>  {
    setIsDetailOpen(!isDetailOpen)
  }
  //detail card - almacenar datos del click  
  const [detailData, setDetailData] = useState({});



  return <StoreContext.Provider value={{
    count,
    setCount,
    isDetailOpen,
    openDetail,
    closeDetail,
    detailData,
    setDetailData,
  }}>
    {children}
  </StoreContext.Provider>;
};


