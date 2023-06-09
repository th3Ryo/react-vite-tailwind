import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../../Context";

function Card({ID, title, description, price, category, image }) {
  const context = useContext(StoreContext);

  const newItem = {
    id: ID,
    title: title,
    description: description,
    price: price,
    category: category,
    image: image,
    quantity: 1,
  };

  const handleCardClick = (productDetail) => {
    context.openDetail();
    context.setDetailData(newItem);
    context.closeCart();
  };

  const handleButtonClick = (event) => {
    event.stopPropagation(); // Detener la propagación del evento
    // Realizar acciones adicionales al hacer clic en el botón
    /* valor que sirve para almacenar datos y usarlo en cartDetail o cualquier otra*/
    context.setDetailData(newItem); 


    // actualizar estado de add to cart
    /* context.setAddToCart([...context.addToCart, newItem]); */
    // Verificar si el producto ya existe en el carrito
    
    const existingItemIndex = context.addToCart.findIndex(
      (item) => item.id === newItem.id
    );
      /* console.log("item.id ", item.id);
      console.log("newItem.id ", newItem.id); 
      console.log("existingItemIndex ", existingItemIndex);*/
    if (existingItemIndex !== -1) {
      // El producto ya existe en el carrito, incrementa la cantidad en 1
      const updatedCart = [...context.addToCart];
      /* console.log("updatedCart ", updatedCart); */
      updatedCart[existingItemIndex].quantity += 1;
      context.setAddToCart(updatedCart);
    } else {
      // El producto no existe en el carrito, agrégalo con cantidad 1
      context.setAddToCart([...context.addToCart, newItem]);
    }

    
    
    
    


    // abrir el add to cart
    context.closeDetail();
    context.openCart();
    context.setShowNotification(true); // Agregar esta línea para activar la notificación
    setTimeout(() => {
      context.setShowNotification(false); // Ocultar la notificación después de 3 segundos
    }, 3000);
  };

  return (
    <div
      className="container bg-gradient-to-l from-red-800 to-orange-400 w-54 h-68 p-1 rounded-md overflow-visible flex items-center relative text-white text-center"
      // se remplazo la arrow function por el context.openDetail() por la costante handleCardClick
      onClick={handleCardClick}
    >
      <div className="box relative w-52 h-64 bg-gray-900 flex justify-center items-center rounded-lg">
        <div className="content flex flex-col justify-center items-center gap-0 px-5 w-full h-full overflow-hidden">
          <figure className="relative mb-2 w-full h-4/5 flex justify-center items-center">
            <span className="absolute bottom-0 left-0 bg-gradient-to-l from-red-800 to-orange-400 rounded-lg text-xs font-light m-2 px-2 py-0.5">
              {category}
            </span>
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image}
              alt={description}
            />
            <button
              className="absolute top-0 right-0 flex justify-center items-center text-center bg-gradient-to-l from-red-800 to-orange-400 w-6 h-6 rounded-full m-2 p-1 cursor-pointer"
              onClick={handleButtonClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 transform rotate-45"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </figure>
          <p className="flex justify-between w-full h-1/5 items-center">
            <span className="text-xs font-light mr-2 line-clamp-2">{title}</span>
            <span className="text-lg">${price}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export { Card };
