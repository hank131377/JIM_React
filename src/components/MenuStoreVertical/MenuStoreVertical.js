import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuStoreVertical.css'
const MenuHorizontal = () => {
  const [num, setNum] = useState(1)
  return (
    <div className="Menu-horizontal">
      <ul className="list-unstyled text-center d-xl-block d-flex justify-content-evenly text-nowrap">
        <li>
          <NavLink
            to="/store"
            className={num == 1 ? 'clicked' : ''}
            onClick={() => {
              setNum(1)
            }}
          >
            訂單紀錄
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/gamelist"
            className={num == 2 ? 'clicked' : ''}
            onClick={() => {
              setNum(2)
            }}
          >
            遊戲管理
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/add"
            className={num == 3 ? 'clicked' : ''}
            onClick={() => {
              setNum(3)
            }}
          >
            新增遊戲
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/store/information"
            className={num == 4 ? 'clicked' : ''}
            onClick={() => {
              setNum(4)
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
