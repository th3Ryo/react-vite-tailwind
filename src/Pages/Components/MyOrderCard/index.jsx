import React from "react";

const MyOrderCard = (props) => {
  const { id, title, description, price, image, quantity, deleteItemFromCart } =
    props;

  return (
    <div className="flex flex-row justify-between items-center w-full rounded-lg gap-2 py-4">
      <figure className="flex items-center gap-2 rounded-lg">
        <div className="relative flex items-center justify-center rounded-lg w-[220px]">
          <span className="absolute top-0 left-3 w-4 h-4 z-10 font-light text-sm text-white text-center bg-gradient-to-l from-red-800 to-orange-400 rounded-full">
            {quantity}
          </span>
          <img
            className="relative w-10 max-h-20 rounded-lg object-cover"
            src={image}
            alt={description}
          />
          {/* line-clamp-1 permite limitar las lineas que se muestran para el codigo es 3 tambien se puede con truncate*/}
          <span className="font-light text-sm w-[160px] px-3 line-clamp-3">
            {title}
          </span>
        </div>
      </figure>

      <div className="flex items-center gap-2 w-[100px]">
        <p className="flex flex-col justify-between">
          <span className="font-medium text-base w-[60px]">${price}</span>
          <span className="font-medium bold text-base">
            ${price * quantity}
          </span>
        </p>
        {/* renderiza un botón con un ícono de eliminación, siempre que la función esté definida. */}
        {deleteItemFromCart && (
          <button className="w-[20px]" onClick={() => deleteItemFromCart(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export { MyOrderCard };
