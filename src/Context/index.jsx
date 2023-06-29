import React from "react";
import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext({});


//shoppint cart
export const StoreProvider = ({ children }) => {
  //detail card - open close  
  const openDetail = (data) => setIsDetailOpen(true);
  const closeDetail  = () => setIsDetailOpen(false);
  

  //buscar textos en card 
  const [searchByTitle, setSearchByTitle] = useState("");
  console.log("searchByTitle ", searchByTitle); // Muestra el valor actual del campo de búsqueda
  //muestra items
  //funcion captura textos de input 
  const handleSearch = (event) => {
    const searchValue = event.target.value;
    //console.log(searchValue); // Muestra el valor actual del campo de búsqueda
    setSearchByTitle(searchValue);
  };
  

  
  
  /* const toggleDetail = () =>  {
    setIsDetailOpen(!isDetailOpen)
  } */
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
  
  
  //shoppint cart - order
  const [order, setOrder] = useState([]);
  
  
  //shoppint cart - add Product to cart
  const [addToCart, setAddToCart] = useState([]); // Estado para mostrar el detail el false es para que por defecto este vacio
  //shoppint cart - open close 
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para mostrar el detail el false es para que por defecto este vacio
  const openCart = () => setIsCartOpen(true);
  const closeCart  = () => setIsCartOpen(false);
  
  
  //detail card - almacenar datos del click  
  const [detailData, setDetailData] = useState({});
  
  const [isDetailOpen, setIsDetailOpen] = useState(false); // Estado para mostrar el detail el false es para que por defecto este vacio
  
  //estado de captegoria
  const [selectedNavItem, setSelectedNavItem] = useState(""); // Estado para almacenar el nombre del NavItem seleccionado
 //capturar los link del navbar
  
  
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
    order, 
    setOrder,
    handleSearch,
    searchByTitle,
    setSearchByTitle,
    selectedNavItem, 
    setSelectedNavItem,
  }}>
    {children}
  </StoreContext.Provider>;
};


