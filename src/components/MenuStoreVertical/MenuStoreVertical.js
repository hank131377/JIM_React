import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuStoreVertical.css'
const MenuHorizontal = () => {
  return (
    <div className="Menu-horizontal">
      <ul className="list-unstyled text-center d-sm-block d-flex justify-content-evenly">
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
            to="/store/gamelist"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            遊戲管理
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/add"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            新增遊戲
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/information"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            工作室資料
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuHorizontal
