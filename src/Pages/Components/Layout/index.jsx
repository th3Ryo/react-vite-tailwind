import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col items-center mt-10'>
        {children}
    </div>
  )
}

export {Layout}