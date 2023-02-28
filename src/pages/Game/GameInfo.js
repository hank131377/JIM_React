import React, { useEffect, useMemo, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import BloodSvg, { UnfillBlood } from '../../svg/BloodSvg'
import { useContextValue } from '../../ContextDashbard'
import {
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaMapMarkerAlt,
  FaClock,
} from 'react-icons/fa'

import { BsFillPeopleFill } from 'react-icons/bs'
import Calendars from '../../components/Calendar/Calendars'
import { NavLink, Outlet, useOutletContext, useParams } from 'react-router-dom'
import axios from 'axios'
const GameInfo = () => {
  // const gameInfoData = useMemo(async () => {
  //   const r = await axios.get(`http://localhost:3005/gameSingle?sid=${id}`)
  //   console.log(r.data, 456)
  //   return r.data
  // }, [])
  const data = useOutletContext()
  console.log(data)
  return (
    <>
      {data.map((v, i) => {
        console.log(v)
        return (
          <div key={v.gamesSid}>
            <p style={{ fontSize: '40px' }}>{v.gamesName}</p>
            <span>
              難度：
              {[...Array(5)].map((n, i) => {
                return (
                  <span className="me-3 mb-3 index-carousel-card" key={i}>
                    {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                  </span>
                )
              })}
            </span>
            <span>
              評價(暫無)：
              {[...Array(5)].map((n, i) => {
                return (
                  <span className="me-3 mb-3 index-carousel-card" key={i}>
                    {i < v.gamesDifficulty ? <BloodSvg /> : <UnfillBlood />}
                  </span>
                )
              })}
            </span>
            <p className="mt-3">{v.gamesContent}</p>
            <ul className="list-unstyled">
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default GameInfo
