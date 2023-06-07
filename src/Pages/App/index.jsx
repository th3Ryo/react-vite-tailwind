import { useRoutes, BrowserRouter  } from "react-router-dom"
import { StoreProvider } from "../../Context"

import {Home} from "../Home"
import {MyAccount} from "../MyAccount"
import {MyOrder} from "../MyOrder"
import {MyOrders} from "../MyOrders"
import {SignIn} from "../SignIn"
import {NotFound} from "../NotFound"
import {Navbar} from "../Components/Navbar"
import {Layout} from '../Components/Layout'
import {ProductDetail} from '../Components/ProductDetail'


import './App.css'

const AppRoutes = () => {
  //se crea una variable para el routes con un objeto con arrays
  let routes = useRoutes ([
    { path: '/', element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/MyOrder', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/*', element: <NotFound /> },
  ])
  //NotFound lleva asterico para representer cualquiera que no sea  las anteriores
  return routes
}
    

const App = () => {
  return (
  <StoreProvider>
    <BrowserRouter>
      <Layout>
        <Navbar />
        <AppRoutes />
        <ProductDetail />
      </Layout>
    </BrowserRouter>
  </StoreProvider>
  )
}

export default App
