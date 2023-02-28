import React, { createContext, useContext } from 'react'
import axios from 'axios'

const getBackData = async (url, medhod) => {
  try {
    const r = await axios.get(url)
    console.log(r.data)
    medhod(r.data)
  } catch (error) {
    console.log(error)
  }
}

const Context = createContext(null)
const ContextDashbard = ({ children }) => {
  return <Context.Provider value={getBackData}>{children}</Context.Provider>
}

export default ContextDashbard

export const useContextValue = () => useContext(Context)
