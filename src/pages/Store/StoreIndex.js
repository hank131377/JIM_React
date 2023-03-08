import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import MenuStoreVertical from '../../components/MenuStoreVertical/MenuStoreVertical'
import './Store.css'

const StoreIndex = () => {
  return (
    <>
      <LogoHorizontal />
      <div className="d-flex  flex-xl-row flex-column">
        <MenuStoreVertical />
        <div className="store">
          <div className="store-title">
            <p>工作室管理中心</p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default StoreIndex
