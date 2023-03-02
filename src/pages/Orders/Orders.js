import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './Orders.css'
const Orders = () => {
  const [orderNum, setOrderNum] = useState(1)
  const [personalInfo, setPersonalInfo] = useState()
  return (
    <Outlet
      context={{ orderNum, setOrderNum, personalInfo, setPersonalInfo }}
    />
  )
}

export default Orders
