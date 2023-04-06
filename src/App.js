import { Route, Routes } from 'react-router-dom'

import {
  Footer,
  Menu,
  ContextDashbard,
  Index,
  Map,
  Game,
  GameSinglePage,
  GameIndex,
  GameInfo,
  GameMenuList,
  Orders,
  OrdersList,
  Signin,
  SigninIndex,
  SigninTarget,
  StoreIndex,
  Store,
  StoreMenuList,
  MemberIndex,
  Member,
  MemberMenuList,
} from './All'
import IndexGame from './pages/Index/IndexGame'
import IndexList from './pages/Index/IndexList'
const App = () => {
  return (
    <ContextDashbard>
      <Menu />
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<IndexList />}></Route>
          <Route path=":part" element={<IndexList />}></Route>
        </Route>
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
