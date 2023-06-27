import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { MyOrderCard } from "../Components/MyOrderCard";
import { StoreContext } from "../../Context";

function MyOrder() {
  const context = useContext(StoreContext);
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  /* console.log(index); verificar que solo toma despues del /*/
  if (index === "last") index = context.order?.length - 1 

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80">
        <Link to="/my-orders" className="">
          <span className="flex items-center h-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="none"
              stroke="black"
              /* stroke="currentColor" */
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-[20px] transform rotate-180 absolute left-0"
            >
              <path d="M5 12h13l-6-6m0 12l6-6" />
            </svg>
            <h1 className="mx-auto">My Order</h1>
          </span>
        </Link>
      </div>
      {/* verificacion que order exista context.order.length > 0 &&*/}
      {
        context.order?.[index]?.product.map((item) => (
          <MyOrderCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            category={item.category}
            image={item.image}
            quantity={item.quantity}
          >
            {/* console de verificacion {console.log("addToCart ",context.addToCart)} */}
          </MyOrderCard>
        ))}
    </Layout>
  );
}

export { MyOrder };
