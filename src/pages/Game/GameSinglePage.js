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

// import './Game.css'
import { BsFillPeopleFill } from 'react-icons/bs'
import Calendars from '../../components/Calendar/Calendars'
import { NavLink, Outlet, useParams } from 'react-router-dom'

const GameSinglePage = () => {
  const getBackData = useContextValue()

  const [gameNavLinkDefault, setGameNavLinkDefault] = useState(true)
  const [gameInfoData, setGameInfoData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getBackData(`http://localhost:3005/gameSingle?sid=${id}`, setGameInfoData)
  }, [])
  return (
    <>
      <div className="index">
        <div className="d-flex">
          <Logo />
          <div className="mx-5 my-5">
            {gameInfoData.map((v, i) => {
              return (
                <img
                  key={v.gamesSid}
                  style={{
                    width: '700px',
                    aspectRatio: '1/1',
                    backgroundSive: 'cover',
                    backgroundPosition: 'center center',
                  }}
                  src={`/gamesImages/${v.gamesImages}`}
                  alt=""
                />
              )
            })}
          </div>
          <div className="mx-5">
            <ul className="list-unstyled d-flex justify-content-around game-navlink">
              <li className="me-3">
                <NavLink
                  className={({ isActive }) => {
                    return isActive
                      ? 'checked'
                      : `${gameNavLinkDefault ? 'checked' : ''}`
                  }}
                  to={`/game/${id}/`}
                >
                  遊戲說明
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'checked' : ''
                  }}
                  to={`/game/${id}/reserve`}
                  onClick={() => {
                    setGameNavLinkDefault(false)
                  }}
                >
                  預約
                </NavLink>
              </li>
              <li className="me-3">
                <NavLink
                  className={({ isActive }) => {
                    return isActive ? 'checked' : ''
                  }}
                  to={`/game/${id}/comment`}
                  onClick={() => {
                    setGameNavLinkDefault(false)
                  }}
                >
                  評論
                </NavLink>
              </li>
            </ul>
            <Outlet context={gameInfoData} />
          </div>
        </div>
      </div>
    </>
  )
}

export default GameSinglePage
