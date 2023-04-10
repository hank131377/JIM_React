import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import MenuStoreVertical from '../../components/MenuStoreVertical/MenuStoreVertical'

const StoreIndex = () => {
  return (
    <>
      {/* <LogoHorizontal /> */}
      <div className="d-flex flex-column flex-xxl-row justify-content-center align-items-center align-items-xxl-start">
        <MenuStoreVertical />
        <div className="store">
          <div className="store-title">
            <p>工作室管理</p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default StoreIndex
