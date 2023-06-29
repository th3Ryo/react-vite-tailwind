import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../../../Context";
import { MyOrderCard } from "../MyOrderCard";
import { MyOrderCardGuie } from "../MyOrderCard/MyOrderCardGuie";
/* import "./style.css"; */

function CartDetail() {
  const context = useContext(StoreContext);
  /* console.log("CART: ", context.addToCart); 
  const dataAllPages = {...context.detailData}
  console.log("detail: ", context.detailData); */
  //mas eficiente para eliminar que modificar el array
  const deleteItemFromCart = (id) => {
    // Filtrar los productos para eliminar el que tenga el ID especificado
    const filteredProducts = context.addToCart.filter(
      (product) => product.id !== id
    );
    if (context.addToCart.length > 1) {
      // Calcular el nuevo total del carrito si todavía hay productos después de eliminar
      const totalPrice = filteredProducts.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      context.setTotalCart(totalPrice);
    } else {
      //No hay productos en el carrito después de eliminar, establecer el total en 0
      context.setTotalCart(0);
    }

    context.setAddToCart(filteredProducts); // Actualizar los productos en el carrito en el contexto
  };

  const handleButtonCheckout = () => {
    const date = new Date();
    const orderToAdd = {
      Date: date.toLocaleDateString(),
      /* Date: date.toLocaleString(), con minutos y segundos*/
      product: context.addToCart,
      totalProduct: context.addToCart.length,
      totalPrice: context.totalCart,
    };
    //console.log("date " , orderToAdd.Date);

    //agregar order al hook serOrders
    // console de verificacion console.log("orderToAdd: ", orderToAdd);
    context.setOrder([...context.order, orderToAdd]); // Agregar la orden al estado de pedidos en el contexto
    //se vacia el carrito despues del voton
    context.setAddToCart([]); // Vaciar el carrito
    //vaciar el valor creo que se podria hacer de otra forma
    context.setTotalCart(0); // Establecer el total del carrito en 0
    context.setSearchByTitle(''); // Borrar el valor de búsqueda por título
    context.closeCart(); // Cerrar el carrito en el contexto
  };

  return (
    //se podria importar una clase product-detail para este caso se utilizara w-[360px] "h-[calc(100vh-80px)]" // Arbitrary values
    <aside
      className={`${
        context.isCartOpen ? "flex" : "hidden"
      } flex-col fixed top-[68px] right-0 bg-white w-[360px] h-[calc(60vh-82px)] items-center rounded-lg border overflow-y-scroll overflow-x-hidden border-black`}
    >
      <div className="flex justify-between items-center p-6 w-[350px] h-[68px]">
        <h2 className="font-medium text-xl">My Order</h2>
        <h2 className="font-medium text-xl">$ {context.totalCart}</h2>
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
      <MyOrderCardGuie />
      {context.addToCart?.map((item) => (
        <MyOrderCard
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          price={item.price}
          category={item.category}
          image={item.image}
          quantity={item.quantity}
          deleteItemFromCart={deleteItemFromCart}
        >
          {/* console de verificacion {console.log("addToCart ",context.addToCart)} */}
        </MyOrderCard>
      ))}

      {context.addToCart?.length > 0 && (
        <Link to="my-orders/last">
          {/* mt-auto para enviar al final el button siempre en clase usaban otro
          metodo era flex-1 */}
          <button
            className="w-[300px] rounded-lg py-3 bg-gradient-to-l from-red-800 to-orange-400 text-white mt-auto mb-2"
            onClick={() => handleButtonCheckout()}
          >
            Checkout
          </button>
        </Link>
      )}
    </aside>
  );
}

export { CartDetail };
