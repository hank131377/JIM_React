import React, { useEffect, useMemo, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'

import { BsFillPeopleFill } from 'react-icons/bs'
import Calendars from '../../components/Calendar/Calendars'
import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom'
import axios from 'axios'
const GameInfo = () => {
  const data = useOutletContext()
  console.log(data)
  return (
    <>
      {data.map((v, i) => {
        console.log(v)
        return (
          <div key={v.gamesSid}>
            <p style={{ fontSize: '40px' }}>{v.gamesName}</p>
            <p>
              特色：
              {v.feature01}
              {v.feature02}
            </p>
            <p>
              遊戲人數：{v.gamesPeopleMin}-{v.gamesPeopleMax}人
            </p>
            <p>遊戲時間：{v.Time}分</p>
            <p>
              難度：
              {[...Array(5)].map((n, i) => {
                return (
                  <span className="me-3 mb-3 index-carousel-card" key={i}>
                    {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                  </span>
                )
              })}
            </p>
            <p>
              評價(暫無)：
              {[...Array(5)].map((n, i) => {
                return (
                  <span className="me-3 mb-3 index-carousel-card" key={i}>
                    {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                  </span>
                )
              })}
            </p>
            <p className="mt-3">
              遊戲介紹：
              <br />
              {v.gamesContent}
            </p>
            <ul className="list-unstyled">
              <li>場館名稱：{v.storeName}</li>
              <li>場館地址：{v.storeAddress}</li>
              <li>營業時間：{v.storeTime}</li>
              <li>場館電話：{v.storeMobile}</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default GameInfo