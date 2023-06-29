import React, { useContext } from "react";
import { StoreContext } from "../../../Context";

import { navData } from "./navData";
import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const context = useContext(StoreContext);

  const activeStyle = "underline underline-offset-4";
  const data = navData();

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
            /* onClick={handleClickCategory} */
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
