import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ContextDashbard from './ContextDashbard'
import Form from './pages/Form/Form'
import LinaPay from './pages/LinePay/LinePay'
import Map from './pages/Map/Map'

const App = () => {
  return (
    <ContextDashbard>
      <Routes>
        <Route path="/" element={<Map />}></Route>
        <Route path="/linePay/comfirm" element={<LinaPay />}></Route>
        {/* <Form /> */}
      </Routes>
    </ContextDashbard>
  )
}

export default App
