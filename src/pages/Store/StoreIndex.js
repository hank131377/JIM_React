import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import MenuStoreVertical from '../../components/MenuStoreVertical/MenuStoreVertical'
import './Store.css'

const StoreIndex = () => {
  return (
    <>
      <LogoHorizontal />
      <div className="d-block index d-sm-flex">
        <MenuStoreVertical />
        <div className="store">
          <div className="store-title">
            <p>廠商管理中心</p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default StoreIndex
