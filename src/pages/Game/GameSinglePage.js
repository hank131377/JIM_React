import React, { useEffect, useState } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'

import { useContextValue } from '../../ContextDashbard'
import Logo from '../../components/Logo/Logo'
const GameSinglePage = () => {
  const getBackData = useContextValue()

  const [gameNavLinkDefault, setGameNavLinkDefault] = useState(1)
  const [gameInfoData, setGameInfoData] = useState([])
  const { id } = useParams()
  useEffect(() => {
    getBackData(`http://localhost:3005/gameSingle?sid=${id}`, setGameInfoData)
  }, [])
  return (
    <>
      <div className="index">
        <div className="d-flex flex-sm-row flex-column">
          <Logo />
          <div className="mx-5 my-5">
            {gameInfoData.map((v, i) => {
              return (
                <img
                  key={v.gamesSid}
                  className="game-single-img"
                  src={`${
                    v.gamesImages.length < 10
                      ? `/gamesImages/${v.gamesImages}`
                      : `${v.gamesImages}`
                  }`}
                  alt=""
                />
              )
            })}
          </div>
          <div className="mx-5">
            <ul className="list-unstyled d-flex justify-content-around game-navlink flex-sm-row flex-column">
              <li className="me-3 mb-sm-0 mb-3">
                <NavLink
                  className={gameNavLinkDefault == 1 ? 'checked' : ''}
                  to={`/game/${id}`}
                  onClick={() => {
                    setGameNavLinkDefault(1)
                  }}
                >
                  遊戲說明
                </NavLink>
              </li>
              <li className="me-3 mb-sm-0 mb-3">
                <NavLink
                  className={gameNavLinkDefault == 2 ? 'checked' : ''}
                  to={`/game/${id}/reserve`}
                  onClick={() => {
                    setGameNavLinkDefault(2)
                  }}
                >
                  預約
                </NavLink>
              </li>
              <li className="me-3 mb-sm-0 mb-3">
                <NavLink
                  className={gameNavLinkDefault == 3 ? 'checked' : ''}
                  to={`/game/${id}/comment`}
                  onClick={() => {
                    setGameNavLinkDefault(3)
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
