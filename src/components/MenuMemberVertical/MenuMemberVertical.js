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
            訂單紀錄
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/collect"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            收藏
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/information"
            className={({ isActive }) => {
              return isActive ? 'clicked' : ''
            }}
          >
            個人資料
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default MenuMemberVertical
