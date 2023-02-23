import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Menu from './components/Menu/Menu'
import ContextDashbard from './ContextDashbard'
import Index from './pages/Index/Index'
import LinaPay from './pages/LinePay/LinePay'
import Map from './pages/Map/Map'

const App = () => {
  return (
    <ContextDashbard>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/linePay/comfirm" element={<LinaPay />}></Route>
        {/* <Form /> */}
      </Routes>
      <Footer />
    </ContextDashbard>
  )
}

export default App
