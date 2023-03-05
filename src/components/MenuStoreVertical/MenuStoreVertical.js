import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuStoreVertical.css'
const MenuHorizontal = () => {
  return (
    <div className="Menu-horizontal">
      <ul className="list-unstyled text-center d-sm-block d-flex justify-content-evenly">
        <li>
          <NavLink
            to="/store/"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            廠商中心
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/1"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            訂單紀錄
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/3"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            商品列表
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/add"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            新增商品
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuHorizontal
