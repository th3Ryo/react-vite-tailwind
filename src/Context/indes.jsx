import React from 'react'
import { createContext } from 'react'

const storeContext = createContext ({})

function indes() {
  return (
    <div>indes</div>
  )
}

export const storeProvider = ({children}) => {
    return (
        <storeContext.Provider>
            {children}
        </storeContext.Provider>
    )
}