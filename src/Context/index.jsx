import React from "react";
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext({});


//shoppint cart
export const StoreProvider = ({ children }) => {
  //shoppint cart - contador  
  //detail card - open close  
  const openDetail = (data) => setIsDetailOpen(true);
  const closeDetail  = () => setIsDetailOpen(false);
  const toggleDetail = () =>  {
    setIsDetailOpen(!isDetailOpen)
  }
  //notificacion de adicion
  const [showNotification, setShowNotification] = useState(false); // Agregar el estado para controlar la notificación
  useEffect(() => {
    // Mostrar la notificación cuando showNotification es true
    if (showNotification) {
      setTimeout(() => {
        setShowNotification(false);
      }, 1000);
    }
  }, [showNotification]);


  //shoppint cart - total final
  const [totalCart, setTotalCart] = useState(0);
  /**
   * ! pendiente de verificar mas sencillo
   *  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    // Calcula el precio total
    const total = context.addToCart.reduce((accumulator, item) => {
      return accumulator + (item.price * item.quantity);
    }, 0);
    
    // Actualiza el precio total
    setTotalPrice(total);
  }, [context.addToCart]); */
  
  //shoppint cart - add Product to cart
  const [addToCart, setAddToCart] = useState([]); // Estado para mostrar el detail el false es para que por defecto este vacio
  //shoppint cart - open close 
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para mostrar el detail el false es para que por defecto este vacio
  const openCart = () => setIsCartOpen(true);
  const closeCart  = () => setIsCartOpen(false);
  
  
  //detail card - almacenar datos del click  
  const [detailData, setDetailData] = useState({});
  
  const [isDetailOpen, setIsDetailOpen] = useState(false); // Estado para mostrar el detail el false es para que por defecto este vacio
  
  return <StoreContext.Provider value={{
    isDetailOpen,
    openDetail,
    closeDetail,
    detailData,
    setDetailData,
    addToCart,
    setAddToCart,
    isCartOpen, 
    openCart,
    closeCart,
    showNotification,
    setShowNotification,
    totalCart,
    setTotalCart,
  }}>
    {children}
  </StoreContext.Provider>;
};


