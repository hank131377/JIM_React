import React, { createContext, useContext, useState } from 'react'
import axios from 'axios'

const getBackData = async (url, medhod) => {
  try {
    const r = await axios.get(url)
    console.log(r.data, r.data[0])
    medhod(r.data)
  } catch (error) {
    console.log(error)
  }
}

const Context = createContext(null)
const ContextDashbard = ({ children }) => {
  const [render, setRender] = useState(false)
  return (
    <Context.Provider value={{ getBackData, render, setRender }}>
      <div className="index">{children}</div>
    </Context.Provider>
  )
}

export default ContextDashbard

export const useContextValue = () => useContext(Context)

const checkToken = () => {
  return JSON.parse(localStorage.getItem('token'))
}

export { checkToken }
