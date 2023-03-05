import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuMemberVertical.css'
const MenuMemberVertical = () => {
  return (
    <div className="Menu-horizontal">
      <ul className="list-unstyled text-center d-sm-block d-flex justify-content-evenly">
        <li>
          <NavLink
            to="/member/"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            會員中心
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/1"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            訂單紀錄
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/3"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            評論列表
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/4"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            收藏
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuMemberVertical
