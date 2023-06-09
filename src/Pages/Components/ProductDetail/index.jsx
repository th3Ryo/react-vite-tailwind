import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../../Context";

import "./style.css";

const ProductDetail = () => {
  const context = useContext(StoreContext);

  return (
    //se podria importar una clase product-detail para este caso se utilizara w-[360px] "h-[calc(100vh-80px)]" // Arbitrary values
    <aside
      className={`${
        context.isDetailOpen ? "flex" : "hidden"
      } flex-col fixed top-[68px] right-0 bg-gradient-to-l from-red-800 to-orange-400 rounded-lg bg-white w-[360px] h-[calc(80vh-82px)]`}
    >
      <div className="flex justify-between items-center p-3  w-[356px] h-[calc(100vh-78px)">
        <h2 className="font-medium text-xl">details</h2>
        <button onClick={() => context.closeDetail()}>
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
      {/* Mostrar los valores de context.detailData */}
      {context.detailData && (
        <figure className="px-6  flex-col">
          <div className="flex justify-center bg-white rounded-lg">
            <img
              className="product-img rounded-lg  object-contain"
              src={context.detailData.image}
              alt={context.detailData.description}
            />
          </div>
          <div className="flex flex-col p-3 space-y-1">
          <p className="flex flex-col p-3">
            <span className="font-medium text-2xl">
              ${context.detailData.price}
            </span>
            <span className="font-medium text-md text-white">
              {context.detailData.title}
            </span>
            <span className="font-medium text-md product-detail line-clamp-6">
              {context.detailData.description}
            </span>
            <span className="">{context.detailData.category}</span>
          </p>
          </div>
        </figure>
      )}
    </aside>
  );
};

export { ProductDetail };
