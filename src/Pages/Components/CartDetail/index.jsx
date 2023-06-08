import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../../Context";

/* import "./style.css"; */


function CartDetail() {
  const context = useContext(StoreContext);

  return (
    //se podria importar una clase product-detail para este caso se utilizara w-[360px] "h-[calc(100vh-80px)]" // Arbitrary values
    <aside
      className={`${
        context.isCartOpen ? "flex" : "hidden"
      } flex-col fixed top-[68px] right-0 bg-white w-[360px] h-[calc(60vh-82px)] `}
    >
      <div className="flex justify-between items-center p-3  w-[356px] h-[calc(100vh-78px)">
        <h2 className="font-medium text-xl">My Order</h2>
        <button onClick={() => context.closeCart()}>
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
      
    </aside>
  );
}

export {CartDetail}