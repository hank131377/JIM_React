import React, { useState } from 'react'

import { Outlet } from 'react-router-dom'

const Index = () => {
  const [sum, setSum] = useState(0)
  return (
    <>
      <Outlet context={{ sum, setSum }} />
    </>
  )
}

export default Index
