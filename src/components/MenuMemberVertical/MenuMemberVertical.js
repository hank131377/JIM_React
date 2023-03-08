import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './MenuMemberVertical.css'
const MenuMemberVertical = () => {
  const [num, setNum] = useState(1)
  return (
    <div className="Menu-horizontal">
      <ul className="list-unstyled text-center d-xl-block d-flex justify-content-evenly text-nowrap">
        <li>
          <NavLink
            to="/member"
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
            to="/member/collect"
            className={num == 2 ? 'clicked' : ''}
            onClick={() => {
              setNum(2)
            }}
          >
            收藏
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/member/information"
            className={num == 3 ? 'clicked' : ''}
            onClick={() => {
              setNum(3)
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
