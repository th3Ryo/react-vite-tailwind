import React from 'react'
import { NavItem } from "./NavItem"
import { NavLink } from "react-router-dom"


const Navbar = () => {

    const navItems = [
        /* { name: 'Shopi', to: '/', className: 'font-semibold text-xl' }, */
        { name: 'All', to: '/' },
        { name: 'Clothes', to: '/clothes' },
        { name: 'Electronics', to: '/electronics' },
        { name: 'Furnitures', to: '/furnitures' },
        { name: 'Toys', to: '/toys' },
        { name: 'Others', to: '/others' }
      ]

      const pages = [
        { name:  "My Orders" ,to: "/my-orders" },
        { name: "My Account", to: "/my-account" },
        { name: "Sign In", to: "/sign-in" },
      ];


      const activeStyle = 'underline'

      return (
        <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
          <ul className='flex items-center gap-3'>
            <li className="font-semibold text-lg">
                <NavLink to="/">Shopi</NavLink>
            </li>
            {   
              navItems.map(({ to, className, name }) => (
                <NavItem
                  key={name}
                  to={to}
                  className={className}
                  navbarName={name}
                  activeStyle={activeStyle}
                />
              ))
            }
          </ul>
          <ul className='flex items-center gap-3'>
            <li className="text-black/60">Ryo@fake.com</li>

            {
              pages.map(({ to, className, name }) => (
                <NavItem
                  key={name}
                  to={to}
                  className={className}
                  navbarName={name}
                  activeStyle={activeStyle}
                />
              ))
            }
          </ul>
        </nav>
    
        )
    }


    {/** es hardcodeado posiblemente para hacer comprensible el concepto 
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
    </nav> */}
 
export {Navbar}