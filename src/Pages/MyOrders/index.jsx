import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../Context";
import { Layout } from "../Components/Layout";
import { MyOrdersCard } from "../Components/MyOrdersCard";

function MyOrders() {
  const context = useContext(StoreContext);


  return (
    <Layout>
      <div className="flex items-center justify-center w-80">
        <h1 className="text-center mb-4">My Orders</h1>
      </div>

      {context.order.map((order, index) => (
        <Link key={index} to={`/my-orders/${index}`}>
            {/* {console.log("order MyOrders es", order.Date)} */}

          <MyOrdersCard
            dataProduct={order.Date}
            totalProduct={order.totalProduct}
            totalPrice={order.totalPrice}
          />
        </Link>
      ))}
    </Layout>
  );
}

export { MyOrders };
