import React from 'react'
import { Outlet } from 'react-router-dom'
import LogoHorizontal from '../../components/LogoHorizontal/LogoHorizontal'
import MenuMemberVertical from '../../components/MenuMemberVertical/MenuMemberVertical'
import MenuStoreVertical from '../../components/MenuStoreVertical/MenuStoreVertical'
import './Member.css'
const MemberIndex = () => {
  return (
    <>
      <LogoHorizontal />
      <div className="d-block index d-sm-flex">
        <MenuMemberVertical />
        <div className="store">
          <div className="store-title">
            <p>會員管理</p>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MemberIndex
