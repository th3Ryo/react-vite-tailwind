import React, { useContext } from 'react'
import { StoreContext } from '../../../Context'

const navData = () => {
  const context = useContext(StoreContext)

    const navItems = [
        /* { name: 'Shopi', to: '/', className: 'font-semibold text-xl' }, */
        { name: 'All', to: '/' },
        { name: 'Electronics', to: '/electronics' },
        { name: 'Jewelery', to: '/jewelery' },
        { name: "men's clothing", to: '/mens-clothing' },
        { name: "women's clothing", to: '/womens-clothing' },
        
      ]

      const pages = [
        { name:  "My Orders" ,to: "/my-orders" },
        { name: "My Account", to: "/my-account" },
        { name: "Sign In", to: "/sign-in" },
        { name: `🛒${context.addToCart.length }`, to: "/cart" },
      ];
      return {
        navItems,
        pages
      }
    }


export { navData }