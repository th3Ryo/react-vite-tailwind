import React from 'react'
import { useContext } from "react";
import {Layout} from '../Components/Layout'
import { MyOrderCard } from "../Components/MyOrderCard";
import { StoreContext } from "../../Context";

function MyOrder() {
  const context = useContext(StoreContext);
  return (
    <Layout>
      <div>MyOrder</div>
      {/* verificacion que order exista */}
      {context.order?.slice(-1)[0].product.map ((item) => (
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
  )
}

export {MyOrder}