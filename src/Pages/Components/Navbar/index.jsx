import React, { useContext, useState } from "react";
import { StoreContext } from "../../../Context";

import { navData } from "./navData";
import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = useContext(StoreContext); // Obtener el contexto StoreContext

  const activeStyle = "underline underline-offset-4"; // Estilo para resaltar el elemento de navegación activo

  const data = navData(); // Obtener los datos de navegación (presumiblemente una función que devuelve los datos)

  const handleNavItemClick = (name) => {
    if (name === `🛒${context.addToCart.length}`) {
      // Si el nombre del elemento de navegación es el carrito de compras
      context.openCart(); // Abrir el carrito de compras utilizando la función openCart del contexto
    } else {
      context.setSelectedNavItem(name); // Establecer el nombre del elemento de navegación seleccionado utilizando la función setSelectedNavItem del contexto
    }
  };

  /* const handleClickCategory = () => {
    const currentPath = window.location.pathname;
    console.log("category ", currentPath);

    let category = currentPath.substring(currentPath.lastIndexOf("/"));
    console.log("category ", category);
    setSelectedNavItem(category);
  };
 */
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shopi</NavLink>
        </li>
        {data.navItems.map(({ to, className, name }) => (
          <NavItem
            key={name}
            to={to}
            className={className}
            navbarName={name}
            activeStyle={activeStyle}
            onClick={() => handleNavItemClick(name)} // Llama a la función handleNavItemClick al hacer clic en el NavItem
          />
        ))}
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-black/60">Ryo@fake.com</li>

        {data.pages.map(({ to, className, name }) => (
          <NavItem
            key={name}
            to={to}
            className={className}
            navbarName={name}
            activeStyle={activeStyle}
            onClick={() => handleNavItemClick(name)} // Llama a la función handleNavItemClick al hacer clic en el NavItem
          />
        ))}
      </ul>
    </nav>
  );
};

{
  /** es hardcodeado posiblemente para hacer comprensible el concepto 
    const activeStyle = 'underline'

  return (



    
    <nav>
        <ul>
            <li>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                    isActive ? activeStyle : undefined
                    }
                >
                    shopi
                </NavLink>
            </li>
            <li>    
                <NavLink
                    to='/'
                    
                >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/clothes'
                >
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/electronics'
                >
                    Electronics
                </NavLink> 
            </li>
            <li>
                <NavLink
                    to='/furnitures'
                >
                    Furnitures
                </NavLink>
            </li>
            <li> 
                <NavLink
                    to='/others'
                >
                    Others
                </NavLink>
            </li>
            <li>  
                <NavLink
                    to='/toys'
                >
                    Toys
                </NavLink>
            </li>
        </ul>
        <ul>
            <li>
                <NavLink
                    
                >
                    Ryo@fake.com
                </NavLink>
            </li>
            <li>
                <NavLink
                   to='/my-orders' 
                >
                    My Orders
                </NavLink>
            </li>
            <li>    
                <NavLink
                    to='/my-account'
                >
                    My Account
                </NavLink>
            </li>
            <li>
                <NavLink
                    to='/sign-in'
                >
                    Sign In
                </NavLink>
            </li>
            <li>
                🛒0
            </li>
        </ul>
    </nav> */
}

export { Navbar };
