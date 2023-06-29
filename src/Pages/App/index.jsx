import { useRoutes, BrowserRouter } from "react-router-dom";
import { StoreProvider } from "../../Context";

import { Home } from "../Home";
import { MyAccount } from "../MyAccount";
import { MyOrder } from "../MyOrder";
import { MyOrders } from "../MyOrders";
import { SignIn } from "../SignIn";
import { NotFound } from "../NotFound";
import { Navbar } from "../Components/Navbar";
import { Layout } from "../Components/Layout";
import { ProductDetail } from "../Components/ProductDetail";
import { CartDetail } from "../Components/CartDetail";
import { Notification } from "../Components/Notification";

const AppRoutes = () => {
  //se crea una variable para el routes con un objeto con arrays
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/Electronics", element: <Home /> },
    { path: "/Jewelery", element: <Home /> },
    { path: `/mens-clothing`, element: <Home /> },
    { path: "/womens-clothing", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);
  //NotFound lleva asterico para representer cualquiera que no sea  las anteriores
  return routes;
};

const App = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <AppRoutes />{" "}
          {/* Renderiza el componente correspondiente a la ruta actual */}
          {/* aki es la otra forma es como la expuesta en este comentario
          {showProductDetail && <ProductDetail />} */}
          <ProductDetail /> {/* Renderiza el componente ProductDetail */}
          <CartDetail /> {/* Renderiza el componente CartDetail */}
          <Notification /> {/* Renderiza el componente Notification */}
        </Layout>
      </BrowserRouter>
    </StoreProvider>
  );
};

export default App;
