import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Loading from './components/Loading/Loading'
import GotopButton from './components/GotopButton/GotopButton'
import Menu from './components/Menu/Menu'
import ContextDashbard from './ContextDashbard'
import Index from './pages/Index/Index'
import Map from './pages/Map/Map'
import Game from './pages/Game/Game'
import GameSinglePage from './pages/Game/GameSinglePage'
import GameIndex from './pages/Game/GameIndex'
import GameInfo from './pages/Game/GameInfo'
import GameMenuList from './pages/Game/GameMenuList'
import Orders from './pages/Orders/Orders'
import OrdersInfo from './pages/Orders/OrdersInfo'
import OrdersList from './pages/Orders/OrdersList'
import Signin from './pages/Signin/Signin'
import SigninIndex from './pages/Signin/SigninIndex'
import SigninTarget from './pages/Signin/SigninTarget'
import StoreIndex from './pages/Store/StoreIndex'
import Store from './pages/Store/Store'
import StoreAdd from './pages/Store/StoreAdd'
import StoreMenuList from './pages/Store/StoreMenuList'
import MemberIndex from './pages/Member/MemberIndex'
import Member from './pages/Member/Member'
import MemberMenuList from './pages/Member/MemberMenuList'
import './styles/all.css'

const App = () => {
  return (
    <ContextDashbard>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/game" element={<GameIndex />}>
          <Route index element={<Game />}></Route>
          <Route path=":id" element={<GameSinglePage />}>
            <Route index element={<GameInfo />}></Route>
            <Route path=":page" element={<GameMenuList />}></Route>
          </Route>
        </Route>
        <Route path="/orders" element={<Orders />}>
          <Route index element={<OrdersList />}></Route>
        </Route>
        <Route path="/map" element={<Map />}></Route>
        <Route path="/signin" element={<SigninIndex />}>
          <Route index element={<Signin />}></Route>
          <Route path=":target" element={<SigninTarget />}></Route>
        </Route>
        <Route path="/store" element={<StoreIndex />}>
          <Route index element={<Store />}></Route>
          <Route path=":action" element={<StoreMenuList />}></Route>
        </Route>
        <Route path="/member" element={<MemberIndex />}>
          <Route index element={<Member />}></Route>
          <Route path=":action" element={<MemberMenuList />}></Route>
        </Route>
      </Routes>
      <Footer />
    </ContextDashbard>
  )
}

export default App
