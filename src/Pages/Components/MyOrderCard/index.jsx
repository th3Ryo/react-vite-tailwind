import React from "react";

const MyOrderCard = props => {
  const {title, description, price, image, quantity } = props;
  
  return (
    <div className="flex flex-row justify-between items-center w-full rounded-lg gap-2 py-4">
      <figure className="flex items-center gap-2 rounded-lg ">
        <div className="flex items-center justify-center rounded-lg w-[271px]">
          <img
            className=" w-14 max-h-20 rounded-lg object-cover"
            src={image}
            alt={description}
          />
          <span className="font-light text-sm w-[221px] px-3">{title}</span>
        </div>
      </figure>
      <div className="flex items-center gap-2 w-[140px]">
        <p className="flex flex-col justify-between">
          <span className="font-medium text-lg w-[68px]">
            ${price}
          </span>
          <span className="font-medium bold text-lg">
            ${price * quantity}
          </span>
        </p>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export { MyOrderCard };
