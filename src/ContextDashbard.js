import React, { createContext, useContext } from 'react'

const Context = createContext(null)
const ContextDashbard = ({ children }) => {
  return <Context.Provider value={''}>{children}</Context.Provider>
}

export default ContextDashbard

export const useContextValue = () => useContext(Context)
