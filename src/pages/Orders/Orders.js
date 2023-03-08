import { useState } from 'react'
import { Outlet } from 'react-router-dom'

import './Orders.css'
const Orders = () => {
  const [orderNum, setOrderNum] = useState(1)
  const [personalInfo, setPersonalInfo] = useState()
  return (
    <div className="game-index">
      <Outlet
        context={{ orderNum, setOrderNum, personalInfo, setPersonalInfo }}
      />
    </div>
  )
}

export default Orders
